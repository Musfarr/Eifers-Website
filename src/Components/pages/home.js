import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../Assets/css/style.css";
import t4 from "../../Assets/images/t4.jpg";
import c1 from "../../Assets/images/security-1.png";
import c2 from "../../Assets/images/net.png";
import c3 from "../../Assets/images/asser2x-150x150.png";
import i1 from "../../Assets/images/illustration1.png";
import Footer from "../common/footer";
import Header from "../common/header";
import Aos from "aos";
import CountUp from 'react-countup';



const Home = () => {


  useEffect(()=>{
    Aos.init({
      duration: 1200,
    })
  })
  


  return (
    <div className="bgnn  uk-background-fixed v1 ">
      <Header />
      <div class="uk-position-relative first_sec  " style={{ height: "700px" }}>
        <div className="overlay"></div>
        <img class="uk-background-cover uk-position-absolute" src={t4}></img>

        <div className="uk-position-cover first_sec_content ">
          <div className="uk-container uk-padding-large headingwrap">
            <div className=" animate__animated animate__fadeInLeft  ">
              <h1 className="hanim1" data-heading="i">
                eifers
              </h1>
            </div>
            <div className=" animate__animated animate__fadeInRight  ">
              <Link className="hero_btn" to={"/contact"}>
                <div>
                  <button className="fbutton" id="bottombtn">
                    Get a Free Cyber Security Audit
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="second_sec uk-light" >
        <div className=" second_sec_wrapper   uk-child-width-1-2@l uk-child-width-1-1@s" uk-grid = ''>
          
          <div data-aos="fade-right" >
            <img src={i1} alt="" />
          </div>

          <div data-aos="fade-left" style={{backgroundColor:''}} >


            <h1>Provide Advanced Security For Advanced Threat</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            <ul>
              <li><span uk-icon="icon: check"></span><h5>Qualified IT Experts</h5></li>
              <li> <span uk-icon="icon: check"></span> <h5>99% Malware Detection Removal</h5></li>
              <li><a href="" uk-icon="icon: heart"></a><h5>Our Work Process With Clients</h5></li>
            </ul>
            
          </div>

        </div>

      </div>



      <section className=" service_sec" style={{background:'#000a12'}} >
        <div className="service_head">
          <h5>Our Services</h5>
          <h1>What we Offer</h1>
        </div>
        <div
          className="uk-grid uk-child-width-1-1 uk-child-width-1-3@s "
          data-aos="fade-up"
          uk-grid=""
        >
          <div>
            <div className="uk-card uk-card-body uk-card-primary">
              <img style={{ width: "20%" }} src={c2} />
              <h2>Network Security</h2>
              <p>
                {" "}
                Alternatively, the Drop component has two additional ani*
                animations slide the dropdown
              </p>
              <Link to="/creator"> Learn More </Link>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-body uk-card-primary">
              <img style={{ width: "20%" }} src={c1} />
              <h2>Data Security</h2>
              <p>
                {" "}
                Alternatively, the Drop component has two additional ani*
                animations slide the dropdown
              </p>
              <Link to="/creator"> Learn More </Link>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-body uk-card-primary">
              <img style={{ width: "20%" }} src={c3} />
              <h2>Web Security</h2>
              <p>
                {" "}
                Alternatively, the Drop component has two additional ani*
                animations slide the dropdown
              </p>
              <Link to="/creator"> Learn More </Link>
            </div>
          </div>
        </div>
      </section>



        <section className="countsec">
        <div className="countwrap" data-aos="fade-up" >
          <div> <img src={c1} /> <CountUp end={1458} duration={9} /> <p>Cybersecurity Projects</p> </div>
          <div> <img src={c2} /> <CountUp end={158} duration={10} /> <p>Clients Protection</p> </div>
          <div> <img src={c2} /> <CountUp end={458} duration={10} /> <p>Service Guarantee</p> </div>
          <div> <img src={c1} /> <CountUp end={158} duration={10} /> <p>Team Experts</p> </div>
        </div>
        </section>


      <section className="ls_sec uk-light">

        <div className="newsletter" data-aos="fade-up" >

          <div className="newsletteritem">
          <h1>Subscribe Our Newsletter
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <input className="uk-input uk-width-1-2" placeholder="your email address" /> 
          <span> <button className=" uk-button uk-button-primary  "> Submit </button> </span>
          </div>
        </div>

      </section>




      <Footer />
    </div>
  );
};

export default Home;
