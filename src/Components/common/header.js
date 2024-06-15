import React from "react";
import logo from "../../Assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header class="header header-transparent">
        <nav class="navbar navbar-expand-lg sticky-navbar">
          <div class="container">
  
            <a class="navbar-brand" href="index-2.html">
              <img src={logo} class="logo-light" alt="logo"/>
              <img src={logo} class="logo-dark" alt="logo"/>
              
            </a>
            <button class="navbar-toggler" type="button">
              <span class="menu-lines"><span></span></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNavigation">
              <ul class="navbar-nav ml-auto">
                <li class="nav__item  has-dropdown">
                  <Link to = "/"><a href="index-2.html"  class=" nav__item-link active">Home</a></Link>
                </li>

                
                <li class="nav__item  has-dropdown">
                  <Link to="/creator" ><a href="#" data-toggle="dropdown" class=" nav__item-link">Company</a></Link>
                </li>
                <li class="nav__item  has-dropdown">
                  <a href="#" data-toggle="dropdown" class=" nav__item-link">Services</a>
                </li>
                
               
                {/* <li class="nav__item">
                  <a href="contact-us.html" class="nav__item-link">Contacts</a>
                </li> */}
              </ul>
            </div>
            <ul class="navbar-actions list-unstyled mb-0 d-flex align-items-center">
              <li class="d-none d-xl-block">
                <Link to="/contact"><a href="request-quote.html" class="btn action__btn-contact">Contact Us</a></Link>
              </li>
              
            </ul>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;
