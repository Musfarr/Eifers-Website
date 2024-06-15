import React from "react";
import logo from "../../Assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-light">
    <div className="footer-primary">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-3 footer-widget footer-widget-about">
            <div className="footer-widget__content">
              <img src={logo} alt="logo" className="mb-30"/>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 footer-widget footer-widget-nav">
            <h6 className="footer-widget__title">Company</h6>
            <div className="footer-widget__content">
              <nav>
                <ul className="list-unstyled">
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="leadership-team.html">Meet Our Team</a></li>
                  <li><a href="blog.html">News & Media</a></li>
                  <li><a href="projects-grid.html">Case Studies</a></li>
                  <li><a href="contact-us.html">Contacts</a></li>
                  <li><a href="#">Investors</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 footer-widget footer-widget-nav">
            <h6 className="footer-widget__title">Solutions</h6>
            <div className="footer-widget__content">
              <nav>
                <ul className="list-unstyled">
                  <li><a href="#">IT Management</a></li>
                  <li><a href="#">Cyber Security</a></li>
                  <li><a href="#">Cloud Computing</a></li>
                  <li><a href="#">IT Consulting</a></li>
                  <li><a href="#">Software Dev</a></li>
                  <li><a href="#">IT Support</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 footer-widget footer-widget-nav">
            <h6 className="footer-widget__title">Resources</h6>
            <div className="footer-widget__content">
              <nav>
                <ul className="list-unstyled">
                  <li><a href="pricing.html">Pricing and plans</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="faqs.html">Help & FAQ</a></li>
                  <li><a href="contact-us.html">Contact Us</a></li>
                  <li><a href="#">Site map</a></li>
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
                <div className="custom-control custom-checkbox d-flex align-items-center mb-20">
                  <input type="checkbox" className="custom-control-input" id="terms"/>
                  <label className="custom-control-label" for="terms">I accept the privacy and terms.</label>
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
              <span className="fz-14">&copy; 2020 Smart Data, All Rights Reserved. With Love by</span>
              <a className="fz-14 color-primary" href="http://themeforest.net/user/7oroof">7oroof.com</a>
            </div>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2 text-center">
            <button id="scrollTopBtn" className="my-2"><i className="icon-arrow-up-2"></i></button>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5 d-flex flex-wrap justify-content-end align-items-center">
            <ul className="social-icons list-unstyled mb-0 mr-30">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            </ul>
            <div>
              <a href="#" className="btn btn__white btn__download mr-20">
                <i className="fab fa-apple"></i>
                <span>App Store</span>
              </a>
              <a href="#" className="btn btn__white btn__download">
                <i className="fab fa-google-play"></i>
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
