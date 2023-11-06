import React from "react";
import logo from "../../Assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav class="uk-navbar-container  " style={{ backgroundColor: "white" }}>
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
                  <a href="#" className="black">
                    <Link to={"/"} style={{ color: "black" }}>
                      <span class=" uk-margin-small-right black  "></span>
                      Home
                    </Link>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <Link to={"/creator"} style={{ color: "black" }}>
                      <span class=" uk-margin-small-right   "></span>
                      Services
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
