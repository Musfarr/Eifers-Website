import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import bg2 from "../../Assets/images/contactbg.jpg";
import bg3 from "../../Assets/images/sky.jpg";

const Contact = () => {
  return (
    <div>
      <div className="">
        <Header />
        </div>
      <div class="  uk-position-relative uk-position-z-index-zero" style={{marginTop:'-100px'}}>
        <div
          class=" sh uk-background-secondary uk-background-cover uk-padding uk-flex uk-flex-center uk-flex-middle uk-text-center uk-light uk-position-z-index-negative"
          data-src={bg2}
          uk-img="loading:eager"
          uk-sticky="overflow-flip: ; end: 100%; offset: 0"
        >
          <div class="h100  pt ">
            <h1
              className="gh1 animated-text"
              style={{
                fontWeight: "700",
                fontSize: "87px",
                fontFamily: "Lexend Deca",
              }}
            >
              {" "}
              Contact Us <br></br>{" "}
            </h1>
            {/* <p
              className=" animated-text"
              style={{ fontSize: "54px", fontWeight: "400" }}
            >
              Please feel free to call or email us, or use our contact form to
              get in touch with us. We look forward to hearing from you!
            </p> */}
          </div>
        </div>

        <div
          class="sh uk-background-secondary   uk-position-z-index-negative"
          uk-sticky=" true; start: 100%; "
        >
          <div className=" cntctform uk-section ">
            <div className="uk-container">
              <div className="uk-grid uk-child-width-1-2@m uk-flex-middle ">
                <div className="uk-light" >
                  <h2>Contact Us</h2>
                  <form className="uk-form-stacked ">
                    <div className="uk-margin">
                      <label className="uk-form-label" htmlFor="name">
                        Name
                      </label>
                      <div className="uk-form-controls">
                        <input
                          className="uk-input"
                          type="text"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <label className="uk-form-label" htmlFor="email">
                        Email
                      </label>
                      <div className="uk-form-controls">
                        <input
                          className="uk-input"
                          type="email"
                          id="email"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <label className="uk-form-label" htmlFor="message">
                        Message
                      </label>
                      <div className="uk-form-controls">
                        <textarea
                          className="uk-textarea"
                          id="message"
                          rows="5"
                          placeholder="Your Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className=" uk-light uk-margin">
                      <button
                        className="uk-button  "
                        style={{ backgroundColor: " #00a0c2 " }}
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
                <div>
                  <div className="  uk-card uk-card-default uk-card-body">
                    <h3>Contact Information</h3>
                    {/* <p>Feel free to reach out to us!</p> */}
                    <ul className="uk-list">
                      <li>
                        <strong>Phone:</strong> +447598320511{" "}
                      </li>
                      <li>
                        <strong>Email:</strong> Info@eifers.com
                      </li>
                      <li>
                        <strong>Address:</strong> 80 Kingsway North, Hollington , United Kingdom.
                      </li>
                    </ul>
                    {/* <div>
                      <a
                        href="#"
                        target="_blank"
                        title="Facebook"
                        className="uk-icon-button uk-margin-small-right"
                        uk-icon="facebook"
                      ></a>
                      <a
                        href="#"
                        target="_blank"
                        title="Instagram"
                        className="uk-icon-button uk-margin-small-right"
                        uk-icon="instagram"
                      ></a>
                      <a
                        href="#"
                        target="_blank"
                        title="Pinterest"
                        className="uk-icon-button uk-margin-small-right"
                        uk-icon="pinterest"
                      ></a>
                      <a
                        href="#"
                        target="_blank"
                        title="LinkedIn"
                        className="uk-icon-button uk-margin-small-right"
                        uk-icon="linkedin"
                      ></a>
                      <a
                        href="#"
                        target="_blank"
                        title="Yelp!"
                        className="uk-icon-button"
                        uk-icon="yelp"
                      ></a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
