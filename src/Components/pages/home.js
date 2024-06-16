import React, { useState, useEffect, useRef } from "react";
import bg1 from "../../Assets/images/vv4.mp4";
import { Link } from "react-router-dom";
import "../../Assets/css/style.css";
import bg2 from "../../Assets/images/cc.png";
import t1 from "../../Assets/images/t1.jpg";
import t2 from "../../Assets/images/t2.jpg";
import t3 from "../../Assets/images/tt.jpeg";
import Footer from "../common/footer";
import Header from "../common/header";

const Counter = ({ title, value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    if (count < value) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 70); // You can adjust the duration as needed
    }
    return () => {
      clearInterval(interval);
    };
  }, [count, value]);

  return (
    <div className="counter ">
      <span className="neon uk-heading-xlarge uk-text-primary">{count}</span>
      {suffix && <span className="counter-suffix">{suffix}</span>}
      <div className="counter-title">{title}</div>
    </div>
  );
};

// function for placeholder image 

const Home = () => {
  return (
    <div
      className="bgnn uk-background-cover uk-background-fixed uk-background-center-center v1 "
    >
      
      <Header />
      <div
        class="uk-position-relative  "
        style={{ height: "700px", marginBottom: "25%" }}
      >
        <img
          class="uk-background-cover uk-position-absolute"
          src={t1}
        ></img>

        <div className="uk-position-cover  ">
          <div className="uk-container uk-padding-large headingwrap">
            <div className=" animate__animated animate__fadeInLeft h1bg uk-position" >
              <h1 className="hanim1" data-heading="i">
                eifers
              </h1>
            </div>
          </div>
          
        </div>
      </div>

      {/* Section 2 with tabs */}

      {/* /////////////////////////// */}


      <div class="hbg3  uk-padding uk-flex uk-flex-center uk-flex-column uk-flex-middle uk-text-center uk-light uk-height-large ">
        <div>
          <h1 uk-parallax="opacity: 0,1; y: -0,0; scale: 1,1; end: 50vh + 50%;">
            We’re ready to take on any Security question.
          </h1>
        </div>

        <Link to={"/contact"}>
          <div>
            <button className="fbutton" id="bottombtn">
              Get in Touch
            </button>
          </div>
        </Link>
      </div>

      
        <Footer />
    </div>
  );
};

export default Home;
