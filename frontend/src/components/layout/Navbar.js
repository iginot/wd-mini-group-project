import React from "react";
import { Link } from "react-router-dom";

import Logo from './Logo.js';

function Navbar({onLogout}) {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-lightBlue">

            <a className="navbar-brand" href="#"> <Logo
                source = {require("./Logo.png")}
            /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nab-link">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/posts" className="nab-link">
                                Posts
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/chat" className="nab-link">
                                Chat
                            </Link>
                        </li>
                </ul>

                <button className="btn btn-outline-info my-2 my-sm-0" onClick={onLogout}>Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;