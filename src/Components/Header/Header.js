import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css"


function Header(props) {
    return (
        <>
        <nav className="navbar navbar-light py-4">
        <div className="container-fluid">
            <Link className="navbar-brand"  to="/">
                <img src={props.logo} alt="" width="30" height="30" className="d-inline-block align-text-top" />
                AK | <small>Lets add creativity</small>
            </Link>
        </div>
        </nav>
        </>
    )
}

export default Header
