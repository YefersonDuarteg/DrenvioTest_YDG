import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Select from 'react-select'
import * as productService from '../../services/ProductService'
import * as customerService from '../../services/CustomerService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

interface ModalProps {
    title: String;
    showModal: boolean;
    handleClose: () => void;
}


interface DropDown {
    value: String;
    label: String;
}

interface ProductMod {
    name: String;
    price: Number;
    stock: Number;
    color: String;
    brand: String;
    category: String;
    discount?: String;
    specialPrice?: Number;
}

function ModalPricies({title, showModal, handleClose }: ModalProps) {

    const [Products, setProducts] = useState<DropDown[]>([])
    const [Customers, setCustomers] = useState<DropDown[]>([])
    const [ProductSelect, setProductSelect] = useState<DropDown | null>(null)
    const [CustomerSelect, setCustomerSelect] = useState<DropDown | null>(null)
    const [ProductSpecial, setProductSpecial] = useState<ProductMod[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const [showDiv, setShowDiv] = useState(false);

    const ProductsCount = async () => {
        const res = await productService.getProducts()

        const products = await res.data.map(prod => {
            return {
                value: prod._id,
                label: prod.name
            }
        })

        setProducts(products)
    }

    const CustomersCount = async () => {
        const res = await customerService.getCustomers()
        const customers = res.data.map(cust => {
            return {
                value: cust._id,
                label: cust.name
            }
        })

        setCustomers(customers)
    }

    const handleChangeProduct = (selectedOption: DropDown | null) => {
        setProductSelect(selectedOption);
    };
    

    const handleChangeCustomer = (selectedOption: DropDown | null) => {
        setCustomerSelect(selectedOption);
    };

    const getProductsSpecialPrecie = async () =>{
        if(ProductSelect?.label && CustomerSelect?.value){
            setLoading(true);
            const res = await productService.getProductSpecialPrecie(CustomerSelect?.value,ProductSelect?.label)
            if(res.data){
                const arrTem =[];
                arrTem.push(res.data)
                const product = await arrTem.map(prod => {
                    return {
                        name: prod.name,
                        description: prod.description,
                        price: prod.price,
                        stock: prod.stock,
                        color: prod.color,
                        brand: prod.brand,
                        category: prod.category,
                        discount: prod.percentageSpecialPrice ? prod.percentageSpecialPrice : null,  
                        specialPrice: prod.specialPrice ? prod.specialPrice : null
                    }
                })
                setProductSpecial(product)
                contieneCampoNulo(product)
                setLoading(false);
            }
        }
    }

    const contieneCampoNulo = (products: ProductMod[])  => {
        for (const prod of products) {
            const findNull = Object.values(prod).some((element) => element == null)
            setShowDiv(findNull)
        }
    };

    useEffect(() => {
        ProductsCount()
        CustomersCount()
    }, [])


    return (
        <>
            <Modal show={showModal} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='mb-3'>
                        <label className='mb-2'>Clientes</label>
                        <Select options={Customers} defaultValue={CustomerSelect} onChange={handleChangeCustomer}/>
                    </div>
                    <div className='mb-3'>
                        <label className='mb-2'>Productos</label>
                        <Select options={Products} defaultValue={ProductSelect} onChange={handleChangeProduct} />
                    </div>
                    <Button className="btn btn-animate" onClick={getProductsSpecialPrecie}>
                        <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} />
                        <span style={{marginLeft:"10px"}}>Verificar</span>
                    </Button>

                    {!showDiv && (
                        <div className="alert alert-info mt-4" role="alert">
                            The user has a special discount for this product!
                        </div>
                    )}       
                    {loading ? (
                        <p>Cargando...</p>
                    ) : (     
                        <Table striped bordered hover style={{marginTop:"20px"}}>
                            <thead>
                                <tr>
                                    {Object.keys(ProductSpecial[0] ? ProductSpecial[0]: []).map((key) => (
                                        <th key={key}>{key}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {ProductSpecial.map((item, index) => (
                                    <tr key={index}>
                                        {Object.values(item).map((value, index) => (
                                            <td key={index} className={index>6?'text-primary':''}>{value}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPricies;