import logo from "@public/images/logo.svg"
import navIcon from "@public/images/nav-icon.svg"
import arrowRight from "@public/images/arrow-right.svg"
import arrowLeft from "@public/images/arrow-left.svg"
import phone from "@public/images/phone.svg"
import cart from "@public/images/cart.svg"
import location from "@public/images/location.svg"
import { NavLink } from "react-router-dom";

export default function HeaderTop(){
    return(
        <header className="header--top">
                <div className="container d-grid">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4 col-lg-2">
                            <div className="pt-3 pt-lg-0 d-flex">
                                <img className="me-32 pointer" src={navIcon} />
                                <NavLink to="/">
                                    <img className="pointer" src={logo} alt="logo" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-6 ">
                            <div className="d-flex mt-3 mt-lg-0 justify-content-center">
                                <img className="me-32 pointer" src={arrowLeft} />
                                <div className="header--text">Valentine’s Day Offers! Buy Two Get One Free <a className="ps-1" href="#"> Shop Now</a></div>
                                <img className="ms-32 pointer" src={arrowRight} />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="d-flex pb-3 pb-lg-0 header--links flex-wrap justify-content-between">
                                <a className="me-32 mt-3 mt-lg-0" href="#">
                                    <img src={phone} className="pe-2" />
                                    Contact Us
                                </a>
                                <a className="me-32 mt-3 mt-lg-0" href="#">
                                    <img src={cart} className="pe-2" />
                                    Track Order
                                </a>
                                <a className="me-32 mt-3 mt-lg-0" href="#">
                                    <img src={location} className="pe-2" />
                                    Find A Store
                                </a>

                            </div>
                        </div>



                    </div>
                </div>
            </header>
    )
}