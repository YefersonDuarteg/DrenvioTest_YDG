import React, { useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import imgLogo from '../../img/logo3.png';
import '../../css/navbar.css'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState<Boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  return (
   
	<header className={`header_area ${isScrolled ? 'sticky' : ''}`}>
		<div className="main_menu">
			<nav className="navbar navbar-expand-lg navbar-light main_box">
				<div className="container">
					<a className="navbar-brand logo_h" href="/"><img src={imgLogo} alt=""/></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul className="nav navbar-nav menu_nav ml-auto">
							<li className="nav-item"><a className="nav-link" href="/">Home</a></li>
							<li className="nav-item submenu dropdown active">
								<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Shop</a>
								<ul className="dropdown-menu">
									<li className="nav-item active"><a className="nav-link" href="#">Shop Category</a></li>
									<li className="nav-item"><a className="nav-link" href="#">Product Details</a></li>
									<li className="nav-item"><a className="nav-link" href="#">Product Checkout</a></li>
									<li className="nav-item"><a className="nav-link" href="#">Shopping Cart</a></li>
									<li className="nav-item"><a className="nav-link" href="#">Confirmation</a></li>
								</ul>
							</li>
							<li className="nav-item submenu dropdown">
								<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Blog</a>
								<ul className="dropdown-menu">
									<li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
									<li className="nav-item"><a className="nav-link" href="#">Blog Details</a></li>
								</ul>
							</li>
							<li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li className="nav-item"><a href="#" className="cart"><span className="ti-bag"></span></a></li>
							<li className="nav-item">
								<button className="search"><span className="lnr lnr-magnifier" id="search"></span></button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		{/* <div className="search_input" id="search_input_box">
			<div className="container">
				<form className="d-flex justify-content-between">
					<input type="text" className="form-control" id="search_input" placeholder="Search Here"/>
					<button type="submit" className="btn"></button>
					<span className="lnr lnr-cross" id="close_search" title="Close Search"></span>
				</form>
			</div>
		</div> */}
        {/* <section className="banner-area organic-breadcrumb">
            <div className="container">
                <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                    <div className="col-first">
                        <h1>Shop Category page</h1>
                        <nav className="d-flex align-items-center">
                            <a href="/">Home<span className="lnr lnr-arrow-right"></span></a>
                            <a href="#">Shop<span className="lnr lnr-arrow-right"></span></a>
                            <a href="category.html">Fashon Category</a>
                        </nav>
                    </div>
                </div>
            </div>
        </section> */}
	</header>
	
  )
}

export default Navbar