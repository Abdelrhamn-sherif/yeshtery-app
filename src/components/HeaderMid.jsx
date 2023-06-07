// react import
import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItems from '@/components/CartItems'
// scss import
import '@scss/offcanvas.scss';
// images import
import adidas from "@public/images/adidas.svg"
import search from "@public/images/search.svg"
import cartM from "@public/images/cart-m.svg"
import like from "@public/images/like.svg"
import accountIcon from "@public/images/account.svg"

export default function HeaderMid(props) {
    const [modalShow, setModalShow] = useState(false);
    const handleClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);
    const cartItems = props.cartItems;
      
    return (
        <>
            <header className="header--mid">
                <div className="container d-grid">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-5 col-lg-4">
                            <div className="pt-3 pt-lg-0">
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><img className="mx-auto" src={search} /></span>

                                    <input type="text" className="form-control input" placeholder="Search" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg  text-lg-center">
                            <img className="mx-auto" src={adidas} />
                        </div>
                        <div className="col-12 col-lg">
                            <div className="d-flex pb-3 pb-lg-0 mt-4 mt-lg-0 justify-content-between justify-content-lg-end ">
                                <div className="me-32 header--links pointer" onClick={handleModalShow}>
                                    <span className="position-relative">
                                        <img src={cartM} className="pe-2" />
                                        <div className="header--cart-itmes">{cartItems.length}</div>
                                    </span>
                                    Cart
                                </div>
                                <div className="me-32 header--links pointer">
                                    <img src={like} className="pe-2" />
                                    Wishlist
                                </div>
                                <div className="me-32 header--links pointer">
                                    <img src={accountIcon} className="pe-2" />
                                    Login
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </header>

            <Offcanvas show={modalShow} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>                    
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='offcanvas--header'>My Cart</div>
                   <div className="offcanvas--title">Cart Summary</div>
                   <CartItems items={cartItems} />
                   <div className="offcanvas--total">Total: Total: 19,999 LE</div>
                   <div className="row">
                        <div className="col-12 col-md-6">
                            <button className='btn btn-yellow w-100 mt-3'>Review Cart</button>
                        </div>
                        <div className="col-12 col-md-6">
                            <button className="btn btn-purple w-100 mt-3">Complete Checkout</button>
                        </div>
                   </div>                   
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}