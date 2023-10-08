import React from 'react'
import logo from "../../Assets/images/logo.jpg"

const Footer = () => {
  return (

    <div className='foot'>
    <section >
<div  style={{height:"448px" , backgroundColor:"white" }} > 
<div className='uk-container uk-padding' >
    <div class="uk-flex" style={{width:"150px"}} >
        <img src={logo} />
    </div>

    <div className='uk-flex' style={{  marginTop:"44px" , fontFamily:"Lex" }} >
        <div className='' style={{width:"351px",}}>
        
        <h2 className='bt '  >Experts Security Solutions</h2>
        </div>

        <div className='bt' style={{paddingLeft:"110px"}}  >
          <p>Home</p>
          <p>For Creators</p>
          <p>For Brands</p>
        </div>

        <div className='bt ' style={{paddingLeft:"150px"}} >
        <p>B47 block 13A, 3rd Floor Trade Centre, KARACHI.</p>
        <p>+92 335 0333493 <br /> +92 304 2179411</p>
        </div>
    </div>

  <div className=' bt uk-flex uk-flex-between ' style={{paddingTop:"50px"}} >
    
    <div  ><p>© 2022 Eifers. All rights reserved.</p></div>
    <div style={{paddingLeft:"70px"}} ><p>Terms and Conditions</p></div>    
    <div style={{paddingRight:"145px"}}  ><p>Privacy Policy</p></div>
    <div><p>apps@Eifers.com</p></div>
    
  </div>    

</div>
</div>
</section>

    </div>
  )
}

export default Footer
