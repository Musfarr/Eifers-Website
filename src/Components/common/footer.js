import React, { useEffect } from "react";
import logo from "../../Assets/images/logotrans.png";
import { Link } from "react-router-dom";
import { FaFacebookF  , FaLinkedin , FaInstagram } from "react-icons/fa";

import $ from 'jquery'

const Footer = () => {

  
  useEffect(() => {
    $('#scrollTopBtn').on('click', function () {
      $('html, body').animate({
          scrollTop: 0
      }, 500);
  })
},[]);

  
  return (
    <footer className="footer  uk-light">
    <div className="footer-primary">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-3  footer-widget-about">
            <div className="">
              <img src={logo} alt="logo" className="" style={{width:'100%'}} />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 footer-widget footer-widget-nav">
            <h6 className="footer-widget__title">Company</h6>
            <div className="footer-widget__content">
              <nav>
                <ul className="list-unstyled">
                  <li><a href="/contact">About Us</a></li>
                  <li><a href="/contact">Case Studies</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 footer-widget footer-widget-nav">
            <h6 className="footer-widget__title">Solutions</h6>
            <div className="footer-widget__content">
              <nav>
                <ul className="list-unstyled">
                  <li><a href="/creator">Cyber Security</a></li>
                  <li><a href="/creator">IT Consulting</a></li>
                  <li><a href="/creator">Software Dev</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 footer-widget footer-widget-nav">
            <h6 className="footer-widget__title">Resources</h6>
            <div className="footer-widget__content">
              <nav>
                <ul className="list-unstyled">
                  <li><a href="/privacy">Privacy Policy</a></li>
                  <li><a href="/faq">Help & FAQ</a></li>
                  <li><a href="/terms-and-condition">Terms And Condition</a></li>
                  
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 footer-widget">
            <h6 className="footer-widget__title">Newsletter</h6>
            <div className="footer-widget__content">
              <form className="footer-form">
                <div className="form-group mb-20">
                  <input type="text" className="form-control" placeholder="Your Email Address"/>
                  <button type="submit" className="footer-form__submit"><i className="icon-arrow-right"></i></button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-secondary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-5 col-lg-5">
            <div className="footer__copyrights">
              <span className="fz-14">&copy; 2020 Eifers, All Rights Reserved.</span>
            </div>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2 text-center">
            <button id="scrollTopBtn" className="my-2"><i className="icon-arrow-up-2"></i></button>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5 d-flex flex-wrap justify-content-end align-items-center">
            <ul className="social-icons list-unstyled mb-0 mr-30">
              <li><a href="https://www.linkedin.com/company/eifers-ltd/"><FaLinkedin/></a></li>
              <li><a href="https://www.instagram.com/eifers_/?igsh=aXVxenY5dzB1bHNt"><FaInstagram/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
