import React from "react";
import logo from "../../Assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>

      <div className="uk-hidden@s mobheader" >
        <div className="uk-container">
        <div className="uk-flex uk-flex-between">

          <div className="logowrap">
          <Link to={"/"}>
            <img  src={logo} /> 
            </Link>
          </div>

          <div className="listwrap">
            <ul>
              <li>
                <Link to={"/"}>
                <p>Home</p>
                </Link>
              </li>
              <li>
                <Link to={"/creator"}>
                <p>Services</p>
                </Link>
              </li>
              <li>
                <Link to={"/contact"}>
                <p>Contact</p>
                </Link>
              </li>
            </ul>
      
          </div>



        </div>
        </div>
      </div>


      <nav class="uk-navbar-container header  " style={{ backgroundColor: "white" }}>
        <div class="uk-container navbar  ">
          <div uk-navbar>
            <div class="uk-navbar-left">
              <Link to={"/"}>
                <div style={{ width: "150px", height: "100px" }}>
                  <img style={{ paddingTop: "2vh" }} src={logo} />
                </div>
              </Link>

              <ul
                class="uk-navbar-nav  "
                style={{
                  marginLeft: "48%",
                  marginTop: "2vh",
                  fontWeight: "600",
                }}
              >
                <li>
                <Link to={"/"} style={{ color: "black" }}>
                    <a  className="black">
                      <span class=" uk-margin-small-right black  "></span>
                      Home
                      </a>
                    </Link>
                  
                </li>

                <li>
                  <a href="#">
                    <Link to={"/creator"} style={{ color: "black" }}>
                      <span class=" uk-margin-small-right   ">Services</span>
                      
                    </Link>
                  </a>
                </li>
              </ul>

              <div class="uk-navbar-item" style={{ paddingBottom: "28px" }}>
                <form action="javascript:void(0)">
                  <Link to={"/contact"}>
                    <button
                      style={{ borderRadius: "20px", marginTop: "4.5vh" }}
                      class="uk-button uk-button-primary custombtn "
                    >
                      Contact
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
