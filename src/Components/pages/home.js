import React, { useState, useEffect, useRef } from "react";
import bg1 from "../../Assets/images/vv4.mp4";
import { Link } from "react-router-dom";

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

const Home = () => {
  return (
    <div
      className="bgnn uk-background-cover uk-background-fixed uk-background-center-center v1 "
      data-src={bg2}
      uk-img="loading : eager"
    >
      <Header />
      <div
        class="uk-position-relative  "
        style={{ height: "700px", marginBottom: "25%" }}
      >
        <video
          class="uk-background-cover uk-position-absolute  "
          src={bg1}
          loop
          muted
          playsinline
          autoplay
          uk-video="autoplay: inview"
        ></video>

        <div className="uk-position-cover  ">
          <div></div>
          <div className="uk-container uk-padding-large">


            <div className="h1bg" >
              <h1 className="hanim1" data-heading="i">
                eifers
              </h1>
            </div>

            <div className="shineC" >
              <p className="shine">
                Navigating Your Cyber World with Unparalleled Security Expertise
              </p>
            </div>
          </div>
          <Link to={"/contact"}>
            <div id="btn1">
              <button className="uk-button" > Get a Free Cyber Security Audit </button>
            </div>
          </Link>
        </div>
      </div>

      {/* Section 2 with tabs */}

    <section>
      <div
        className="sec2"
        style={{ marginTop: "0vh", backgroundColor: "transparent" }}
      >
        <ul
          class="uk-subnav uk-subnav-pill uk-flex-center tabbuttons "
          uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium"
        >
          <li className="tbbtn">
            <a className="tbbtn">Threat Assesment </a>{" "}
          </li>
          <li className="tbbtn">
            <a>Pen Testing</a>
          </li>
          <li className="tbbtn">
            <a> Risk Mitigation </a>
          </li>
        </ul>
        <ul class="uk-switcher uk-margin">
          <li>
            <div className="uk-container uk-flex uk-padding ">
              <div>
                <p className="heading">Threat Assessment</p>

                <div className="text1 ">
                  <p>
                    Our experienced team of security analysts will identify
                    potential security threats to your company and provide you
                    with a comprehensive report outlining areas of concern.
                  </p>
                </div>
              </div>
              <div className="">
                <img className="tabimg" src={t3} loading="lazy" />
              </div>
            </div>
          </li>

          <li>
            <div className="uk-container uk-flex uk-padding ">
              <div>
                <p className="heading">Penetration Testing</p>

                <div className="text1 ">
                  <p>
                    Identify vulnerabilities in your organization’s
                    cybersecurity defenses from a hacker’s perspective. Our team
                    of experts will simulate a cyber attack to identify
                    potential risks and provide you with recommendations to
                    address them.
                  </p>
                </div>
              </div>
              <div className="">
                <img className="tabimg" src={t2} />
              </div>
            </div>
          </li>

          <li>
            <div className="uk-container uk-flex uk-padding ">
              <div>
                <p className="heading">Risk Mitigation</p>

                <div className="text1 ">
                  <p>
                    Our team of experts will work with your organization to
                    address any vulnerabilities identified through our threat
                    assessment and penetration testing services. We will provide
                    you with a comprehensive plan to mitigate risks and protect
                    your sensitive information.
                  </p>
                </div>
              </div>
              <div className="">
                <img className="tabimg" src={t1} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

      {/* /////////////////////////// */}

      <section>
        <div class="uk-section uk-section-large uk-background-secondary uk-light ">
          <div class="uk-container">
            <div class="uk-grid-large" data-uk-grid>
              <div class="uk-width-expand@m uk-flex uk-flex-column">
                <h1
                  class="uk-margin-auto-top uk-margin-medium-bottom "
                  style={{ marginLeft: "17vh" }}
                >
                  Get the very best of us by doing the best of you
                </h1>

                <div class="uk-child-width-1-3" data-uk-grid>
                  <div class="uk-width-1-3@m">
                    <h2 class="uk-heading-small uk-margin-large-bottom"></h2>
                    <Counter value={150} suffix="+" />
                    <hr class="uk-margin-bottom uk-margin-medium-top tm-small-hr" />
                    <h3 class="uk-margin-remove-bottom uk-text-uppercase uk-h5 uk-margin-small-top">
                      Happy Clients
                    </h3>
                  </div>

                  <div class="uk-width-1-3@m">
                    <h2 class="uk-heading-small uk-margin-large-bottom"></h2>
                    <Counter value={6} suffix="+" />
                    <hr class="uk-margin-bottom uk-margin-medium-top tm-small-hr" />
                    <h3 class="uk-margin-remove-bottom uk-text-uppercase uk-h5 uk-margin-small-top">
                      Years Experience
                    </h3>
                  </div>

                  <div class="uk-width-1-3@m">
                    <h2 class="uk-heading-small uk-margin-large-bottom"></h2>
                    <Counter value={150} suffix="+" />
                    <hr class="uk-margin-bottom uk-margin-medium-top tm-small-hr" />
                    <h3 class="uk-margin-remove-bottom uk-text-uppercase uk-h5 uk-margin-small-top">
                      Projects Done
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <div className="foot">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
