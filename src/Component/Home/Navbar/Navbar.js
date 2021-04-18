import React from 'react';
import logo from '../../../image/logo.png'
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <img style={{height:"70px"}} src={logo} class="img-fluid" alt="..."/>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item ms-5">
                <Link class="nav-link text-white" to="">Home</Link>
                </li>
                <li class="nav-item ms-5">
                <Link class="nav-link text-white" to="">About</Link>
                </li>
                {/* <li class="nav-item ms-5">
                <Link class="nav-link text-white" to="">Dashbord</Link>
                </li> */}
                <li class="nav-item ms-5">
                <Link class="nav-link text-white" to="/addminPannel">Dashbord</Link>
                </li>
                <li class="nav-item ms-5">
                <Link class="nav-link text-white" to="">Blog</Link>
                </li>
                <li class="nav-item ms-5">
                <Link class="nav-link text-white" to="">Contact us</Link>
                </li>
                  
              </ul>
            </div>
          </div>
        </nav>
  );
};

export default Navbar;