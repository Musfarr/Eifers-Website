import React, { useEffect, useState } from "react";
import logo from "../../Assets/images/logotrans.png";
import { NavLink, Link } from "react-router-dom";
import $ from 'jquery'



const Header = () => {

  const[link , setlink] = useState('Home')

  useEffect(() => {
    var $navToggler = $('.navbar-toggler');
    $navToggler.on('click', function () {
        $(this).toggleClass('actived');
    })
    $navToggler.on('click', function () {
        $('.navbar-collapse').toggleClass('menu-opened');
    })
  })

  
    return (
      <header class="header header-transparent">
        <nav class="navbar navbar-expand-lg sticky-navbar">
          <div class="container">
  
          <Link to='/' className="navbar-brand">
              <img src={logo} class="logo-light" alt="logo"/>
              {/* <img src={logo} class="logo-dark" alt="logo"/> */}
            
            </Link>
            <button class="navbar-toggler" type="button">
              <span class="menu-lines"><span></span></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNavigation">
              <ul class="navbar-nav ml-auto">
                <li class="nav__item">
                  <NavLink to = "/" className = {`nav__item-link`}> Home</NavLink>
                </li>

                
                <li class="nav__item">
                  <NavLink to="/creator" className = {`nav__item-link`} > services </NavLink>
                </li>
              </ul>
            </div>
            <ul class="navbar-actions list-unstyled mb-0 d-flex align-items-center">
              <li class="d-none d-xl-block">
                <Link onClick={()=>{setlink('')}} className="btn action__btn-contact" to="/contact">Contact</Link>
              </li>
              
            </ul>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;
