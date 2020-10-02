import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <Link to="/React-Portfolio" className="navbar-brand">Daria's Page</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/React-Portfolio" className="nav-link">Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className="nav-link">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
            <br/><br/>
        </nav>
    )

}

export default Navbar;