import React from "react";
import logo3 from './logo3.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


function Header() {
    return (
        <>

            <div className="Header-Comp">
            </div>

            <nav className="navbar navbar-expand-sm navbar-dark flex-sm-nowrap flex-wrap" style={{ width: '100%' }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src={logo3}
                            alt="Digital futures logo" className="logoimage" /> DFX
                    </a>
                    <div class="navbar-collapse collapse flex-grow-1 justify-content-end" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            {/* <a class="nav-item nav-link 1" href="#"> Talk to us {/*<span class="sr-only">(current)</span></a>*/}
                            {/* <a class="nav-item nav-link 2" href="#"> Home button </a> */}
                            {/* <a class="nav-item nav-link 3" href="#"> Your requirements </a> */}
                            <a class="nav-item nav-link 4" href="https://digitalfutures.com/contact/" > Talk to us</a>
                            <a class="nav-item nav-link 4" href="/"> Talent spotlight </a>

                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}


export default Header;



