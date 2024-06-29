import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../Assets/css/style.css";
import t4 from "../../Assets/images/t4.jpg";
import c1 from "../../Assets/images/security-1.png";
import c2 from "../../Assets/images/net.png";
import c3 from "../../Assets/images/asser2x-150x150.png";

import Footer from "../common/footer";
import Header from "../common/header";
import Aos from "aos";



// function for placeholder image

const Home = () => {

  const [count, setCount] = useState(0);

  useEffect(()=>{
    Aos.init({
      duration: 1200,
    })


  // let interval;
  // for(var i = count; i <  ; i++ ){
  //     if (count < 10) {
  //       interval = setInterval(() => {
  //         setCount((prevCount) => prevCount + 1);
  //       }, 70); // You can adjust the duration as needed
  //     }
  //     clearInterval(interval);
  //   }
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

      

      <div className=" uk-container service_sec">
        <div className="service_head">
          <h5>Our Services</h5>
          <h1>What we Offer</h1>
        </div>



        {/* <div className="counter ">
        <span className="neon uk-heading-xlarge uk-text-primary">{count}</span>
        {suffix && <span className="counter-suffix">{suffix}</span>}
        <div className="counter-title">{title}</div>
      </div> */}



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
              <Link to="/creator"> Read More </Link>
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
              <Link to="/creator"> Read More </Link>
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
              <Link to="/creator"> Read More </Link>
            </div>
          </div>
        </div>






        
      </div>

      <Footer />
    </div>
  );
};

export default Home;
