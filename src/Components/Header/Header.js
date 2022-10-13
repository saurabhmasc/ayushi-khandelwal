import React from 'react'
import { Link } from "react-router-dom";
import "./Header.scss"


function Header(props) {
    return (
        <>
            <div className='brand-header container-fluid d-none d-md-flex px-0 py-2'>
                <div className="row gx-0 d-lg-flex">
                    <div className="px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center me-4">
                            <span className="fa fa-phone-alt me-2"></span>
                            <span>+91 8308000958</span>
                        </div> 
                        <div className="h-100 d-inline-flex align-items-center">
                            <span className="far fa-envelope me-2"></span>
                            <span>saurabhmasc@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar sticky-top navbar-light bg-white">
                <div className="container-fluid p-0">
                    <Link className="navbar-brand"  to="/">
                        <div className='px-5 '>
                            <img src={props.logo} alt="" width="30" height="30" className="d-inline-block align-text-top" />
                            <span className='site-title'>AK</span> | <small className='tagline'>Graphice designer</small>
                        </div>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Header
