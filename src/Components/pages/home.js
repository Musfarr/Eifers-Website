import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../Assets/css/style.css";
import t4 from "../../Assets/images/t4.jpg";
import c1 from "../../Assets/images/security-1.png";
import c2 from "../../Assets/images/net.png";
import c3 from "../../Assets/images/asser2x-150x150.png";
import i1 from "../../Assets/images/about1.png";
import c4 from "../../Assets/images/cloud.png";

import Footer from "../common/footer";
import Header from "../common/header";
import Aos from "aos";
import CountUp from 'react-countup';
import { AiOutlineCheck } from "react-icons/ai";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';



const Home = () => {


  useEffect(() => {
    Aos.init({
      duration: 1200,
    })
  })



  return (
    <div className="bgnn  uk-background-fixed v1 ">
      <Header />
      <div className="uk-position-relative first_sec  ">
        <div className="overlay"></div>
        <img className="uk-background-cover uk-position-absolute" src={t4}></img>

        <div className="uk-position-cover first_sec_content ">
          <div className="uk-container uk-padding-large headingwrap">
            <div className=" animate__animated animate__fadeInLeft  ">
              <h1 className="hanim1" data-heading="i">
                EiFERS
              </h1>
            </div>
            <div className=" animate__animated animate__fadeInRight  ">
              <div >
                <Link className="hero_btn" to={"/contact"}>
                  <button className="fbutton" id="bottombtn">
                    Get A Free Cyber Security Audit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second_sec uk-light" >
        <div className=" second_sec_wrapper   uk-child-width-1-2@l uk-child-width-1-1@s" uk-grid=''>

          <div data-aos="fade-right" >
            <img src={i1} alt="" />
          </div>

          <div className="uk-flex uk-flex-center uk-flex-middle" data-aos="fade-left"  >
            <div>
              <h1 className="uk-h1" style={{ fontWeight: '700' }} >Provide Advanced Security For Advanced Threat</h1>
              <p className="">Our advanced security solutions are designed to stay ahead of these threats, providing robust protection for your business. With our experts on your side, you can rest assured that your business is in capable hands.</p>
              <ul>
                <li><h5> <AiOutlineCheck />Qualified IT Experts</h5></li>
                <li>  <h5><AiOutlineCheck />99% Malware Detection Removal</h5></li>
                <li><h5> <AiOutlineCheck />Our Work Process With Clients</h5></li>
              </ul>
            </div>
          </div>

        </div>

      </div>



      <section className=" service_sec" style={{ background: '#000a12' }} >
        <div className="service_head">
          <h5>Our Services</h5>
          <h1>What we Offer</h1>
        </div>


        {/* <div
          className="  "
          // data-aos="fade-up"
          // uk-grid=""

          uk-slider=""
        >
          <div className=" uk-slider-items  uk-child-width-1-1@s uk-child-width-1-3@m uk-grid" uk-height-match="target : > div > .uk-card">

            <div>
              <div className="uk-card uk-card-body uk-card-primary " >
                <img style={{ width: "20%" }} src={c2} />
                <h2>Network Security</h2>
                <p>
                  {" "}
                  Our Network Security service aims to secure your organization's network infrastructure from unauthorized access, intrusions, and other cyber threats. Eifers employs a combination of firewalls, intrusion detection and...
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
                  Our Data Security service focuses on protecting your sensitive information from unauthorized access, breaches, and theft. We implement robust encryption techniques, secure data ...
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
                  Eifers' Web Security service is dedicated to protecting your online presence from a wide range of cyber threats, including SQL injection, cross-site scripting (XSS), and DDoS attacks. We provide a multi-layered ...
                </p>
                <Link to="/creator"> Learn More </Link>
              </div>
            </div>


            <div>
              <div className="uk-card uk-card-body uk-card-primary">
                <img style={{ width: "20%" }} src={c1} />
                <h2>Computer Security</h2>
                <p>
                  {" "}
                  Eifers' Computer Security service is focused on protecting individual workstations, servers, and mobile devices within your organization. We provide comprehensive endpoint security solutions that include antivirus software, endpoint detection...


                </p>
                <Link to="/creator"> Learn More </Link>
              </div>
            </div>

            <div>
              <div className="uk-card uk-card-body uk-card-primary">
                <img style={{ width: "20%" }} src={c4} />
                <h2>Locker Security</h2>
                <p>
                  {" "}
                  Our Locker Security service offers physical and digital solutions for securing your most valuable assets. Eifers provides state-of-the-art physical security measures, such as biometric access controls and secure storage facilities, as well as...
                </p>
                <Link to="/creator"> Learn More </Link>
              </div>
            </div>

            <div>
              <div className="uk-card uk-card-body uk-card-primary">
                <img style={{ width: "20%" }} src={c2} />
                <h2>Malware Protection</h2>
                <p>
                  {" "}
                  Eifers' Malware Protection service is designed to safeguard your systems from malicious software, including viruses, trojans, ransomware, and spyware. Our advanced detection and prevention solutions ensure that your digital environment remains secure from both known and emerging threats. Utilizing state-of-the-art technologies ...
                </p>
                <Link to="/creator"> Learn More </Link>
              </div>
            </div>
          </div>
          <a class="uk-position-center-left uk-position-large " href uk-slidenav-previous uk-slider-item="previous"></a>
          <a class="uk-position-center uk-position-large " uk-slidenav-next uk-slider-item="next"></a>

        </div> */}

<Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop
        autoplay
        uk-height-match=".uk-card"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div>
            <div className="uk-card uk-card-body uk-card-primary "  >
              <img style={{ width: "20%" }} src={c2} />
              <h2>Network Security</h2>
              <p>
                {" "}
                Our Network Security service aims to secure your organization's network infrastructure from unauthorized access, intrusions, and other cyber threats. Eifers employs a combination of firewalls, intrusion detection and...
              </p>
              <Link to="/creator"> Learn More </Link>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div>
          <div className="uk-card uk-card-body uk-card-primary">
            <img style={{ width: "20%" }} src={c1} />
            <h2>Data Security</h2>
            <p>
              {" "}
              Our Data Security service focuses on protecting your sensitive information from unauthorized access, breaches, and theft. We implement robust encryption techniques, secure data ...
            </p>
            <Link to="/creator"> Learn More </Link>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide><div>
              <div className="uk-card uk-card-body uk-card-primary">
                <img style={{ width: "20%" }} src={c1} />
                <h2>Computer Security</h2>
                <p>
                  {" "}
                  Eifers' Computer Security service is focused on protecting individual workstations, servers, and mobile devices within your organization. We provide comprehensive endpoint security solutions that include antivirus software, endpoint detection...


                </p>
                <Link to="/creator"> Learn More </Link>
              </div>
            </div></SwiperSlide>


        <SwiperSlide><div>
              <div className="uk-card uk-card-body uk-card-primary">
                <img style={{ width: "20%" }} src={c4} />
                <h2>Locker Security</h2>
                <p>
                  {" "}
                  Our Locker Security service offers physical and digital solutions for securing your most valuable assets. Eifers provides state-of-the-art physical security measures, such as biometric access controls and secure storage facilities, as well as...
                </p>
                <Link to="/creator"> Learn More </Link>
              </div>
            </div></SwiperSlide>

        <SwiperSlide><div>
              <div className="uk-card uk-card-body uk-card-primary">
                <img style={{ width: "20%" }} src={c2} />
                <h2>Malware Protection</h2>
                <p>
                  {" "}
                  Eifers' Malware Protection service is designed to safeguard your systems from malicious software, including viruses, trojans, ransomware, and spyware. Our advanced detection and prevention solutions ensure that your digital environment remains secure from both known and emerging threats. Utilizing state-of-the-art technologies ...
                </p>
                <Link to="/creator"> Learn More </Link>
              </div>
            </div></SwiperSlide>


      </Swiper>

      </section>



      




      <section className="countsec">
        <div className="overlay2"></div>
        <div className="countwrap" data-aos="fade-up" >
          <div> <img src={c1} /> <CountUp end={458} duration={16} /> <p>Cybersecurity Projects</p> </div>
          <div> <img src={c2} /> <CountUp end={158} duration={15} /> <p>Clients Protection</p> </div>
          {/* <div> <img src={c2} /> <CountUp end={100} duration={15} /> <p>Services</p> </div> */}
          <div> <img src={c1} /> <CountUp end={50} duration={15} /> <p>Team Experts</p> </div>
        </div>
      </section>


      <section className="ls_sec uk-light">

        <div className="newsletter" data-aos="fade-up" >

          <div className="newsletteritem">
            <h1>Subscribe Our Newsletter
            </h1>
            <p>Subscribe to our newsletter and be the first to receive the latest cybersecurity news.</p>
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
