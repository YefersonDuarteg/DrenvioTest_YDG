
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye} from '@fortawesome/free-solid-svg-icons'
import { Dashcard } from '../../interfaces/intComponents/Dashcard'
import Button from 'react-bootstrap/Button';
import ModalInfo from './ModalInfo';
import '../../css/btnAnimate.css'

const Dahscards = ({ icon, backgroundColor, title, value, data }: Dashcard) => {

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <div className="col-md-6 col-lg-4 p-2">
            <ModalInfo title={title} showModal={showModal} handleClose={handleClose} data={data}/>
            <a className="text-decoration-none" href="#">
                <div className={`card p-3 shadow bg-purple text-center border-0 ${backgroundColor}`}>
                    <FontAwesomeIcon icon={icon} fontSize={50} style={{ color: "white" }} />
                    <hr style={{ color: "white" }} />
                    <p className="card-title lead" style={{ color: "white" }}>
                        <b>{title}</b>
                        <br></br>
                        <b><span style={{ fontSize: "xx-large" }}>{value !== undefined ? value.toString() : ''}</span></b>
                    </p>
                    <div className="btntext-box">
                        <Button className="btn btn-animate" onClick={handleShow}>
                            <FontAwesomeIcon icon={faEye} style={{ color: "white" }} />
                            <span style={{marginLeft:"10px"}}>Ver</span>
                        </Button>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Dahscards