import React, { useEffect } from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import { Link } from 'react-router-dom'
import c1 from "../../Assets/images/security-1.png";
import c2 from "../../Assets/images/net.png";
import c3 from "../../Assets/images/asser2x-150x150.png";

import Aos from 'aos';





const Creator = () => {

  
useEffect(() => {
  Aos.init({
    duration: 1200,
  })
})


  return (
<div  >
<Header/>



<section className=" service_sec"style={{marginTop : '-100px'}} >

<div class="uk-padding-large"  >
    <div class=" uk-text-center uk-light uk-height-medium "  >
    <div className='anid'>
<p className='anip' >
  <span className='anis'>
    Our Services
  </span>
  &mdash; Protective Security Solutions &mdash;
</p>
</div> 
</div>
</div>
        
        <div
          className="uk-grid uk-child-width-1-1 uk-child-width-1-3@s "
          data-aos="fade-up"
          uk-grid=""
        >
          <div>
            <div className="uk-card uk-card-body uk-card-primary">
              <img style={{ width: "20%" }} src={c2} />
              <h2>Malware Protection</h2>
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
              <h2>Computer Security</h2>
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
              <h2>Locker Security</h2>
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


<Footer/>


    </div>
  )
}

export default Creator
