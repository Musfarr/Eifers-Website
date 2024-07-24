import React, { useState } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import bg2 from "../../Assets/images/contactbg.jpg";
import bg3 from "../../Assets/images/sky.jpg";
import axios from "axios";
import swal from "sweetalert";
 


const Contact = () => {

const[name,setname] = useState('')
const[email,setemail] = useState('')
const[message,setmessage] = useState('')

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target

  let data = {
    name : name ,
    email : email ,
    message : message 
  }

  axios.post('https://sheet.best/api/sheets/98a302ec-1fc8-4c0d-b397-566ecab5a191' , data)
  .then((res) => {

    
    if(res.status === 200){
      swal({
        icon:'success' ,
        text : 'Sent Successfully'
      })
      form.reset()
    }
    else{
      swal({
        icon:'error' ,
        text : 'Error Occured'
      })
    }
  })

}



  return (
    <div>
      <div className="">
        <Header />
        </div>
      <div class="  uk-position-relative uk-position-z-index-zero" style={{marginTop:'-100px'}}>

        <div
          class=" uk-background-cover uk-padding uk-flex uk-flex-center uk-flex-middle uk-text-center uk-light "
          data-src={bg2}
          uk-img="loading:eager"
        >
                  <div className="overlay" style={{zIndex:1}}></div>

          <div class="h100  pt " style={{zIndex:1}} >
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
          </div>
        </div>

        <div
          class="sh  "
          uk-sticky=" true; start: 100%; "
        >
          <div className=" cntctform uk-section ">
            <div className="uk-container">
              <div className="uk-grid uk-child-width-1-2@m uk-flex-middle ">
                <div className="uk-light" >
                  <h2>Contact Us</h2>


                  <form onSubmit={handleSubmit}  className="uk-form-stacked ">
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
                          onChange={(e) => {setname(e.target.value)}}
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
                          onChange={(e) => {setemail(e.target.value)}}
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
                          onChange={(e) => {setmessage(e.target.value)}}
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
                        <strong>Email:</strong> privacy@eifers.io
                      </li>
                      <li>
                        <strong>Address:</strong> 80 Kingsway North, Hollington , United Kingdom.
                      </li>
                    </ul>
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
