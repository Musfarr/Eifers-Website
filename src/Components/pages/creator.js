import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import { Link } from 'react-router-dom'






const Creator = () => {
  return (
<div  >
<Header/>

<div class="uk-position-relative uk-position-z-index-zero">
    <div class="uk-background-cover uk-padding uk-flex uk-flex-center uk-flex-middle uk-text-center uk-light uk-height-medium uk-position-z-index-negative" data-src = "https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80" uk-img = "loading : eager" uk-sticky="overflow-flip: true; end: 100%; offset: 80">
    <div className='anid'>
<p className='anip' >
  
  <span className='anis'>
    Our Services
  </span>
  &mdash; Protective Security Solutions &mdash;
</p>
</div> 
</div>


    <div style={{height:"130vh" , backgroundColor:'#333'}} class=" neon uk-padding uk-flex uk-flex-center uk-flex-middle uk-text-center " >
    <div className=' uk-container uk-padding    ' > 
    <div className=' uk-grid' uk-grid="">
  <div className='card uk-light  ' >
        <div class="neonbg crdimg uk-card uk-card-default">
            <div class="cardtext uk-card-body">
                <h3 class=" wfont">Threat Assessment</h3>
                <p >Our experienced team of security analysts will identify potential security threats to your company and provide you with a comprehensive report outlining areas of concern.</p>
            </div>
        </div>
    </div>

    <div className='card uk-light  ' >
        <div class="neonbg crdimg uk-card uk-card-default">
            <div class="cardtext uk-card-body">
                <h3 class=" wfont">Penetration Testing</h3>
                <p >Identify vulnerabilities in your organization’s cybersecurity defenses from a hacker’s perspective. Our team of experts will simulate a cyber attack to identify potential risks and provide you with recommendations to address them.</p>
            </div>
        </div>
    </div>
    <div className='card uk-light  ' >
        <div class="neonbg crdimg uk-card uk-card-default">
            <div class="cardtext uk-card-body">
                <h3 class=" wfont">Risk Mitigation</h3>
                <p >Our team of experts will work with your organization to address any vulnerabilities identified through our threat assessment and penetration testing services. We will provide you with a comprehensive plan to mitigate risks and protect your sensitive information.</p>
            </div>
        </div>
    </div>

    <div className='card uk-light  ' >
        <div class="neonbg crdimg uk-card uk-card-default">
            <div class="cardtext uk-card-body">
                <h3 class=" wfont">Cybersecurity Training</h3>
                <p >We offer comprehensive cybersecurity training for your employees to reduce the risk of human error and ensure that your organization is equipped to handle potential cyber threats.</p>
            </div>
        </div>
    </div>
    <div className='card uk-light  ' >
        <div class="neonbg crdimg uk-card uk-card-default">
            <div class="cardtext uk-card-body">
                <h3 class=" wfont">Incident Response</h3>
                <p >In the event of a cyber attack, our team of experts is available 24/7 to respond to the incident and minimize the impact on your organization. We will work with your team to address the issue and prevent it from happening again in the future.</p>
            </div>
        </div>
    </div>

    <div className='card uk-light  ' >
        <div class="neonbg crdimg uk-card uk-card-default">
            <div class="cardtext uk-card-body">
                <h3 class=" wfont">Compliance Consulting</h3>
                <p >We offer compliance consulting services to ensure that your organization is meeting the necessary regulatory requirements and industry standards for cybersecurity. Our team of experts will work with you to identify any gaps in your current compliance program and provide recommendations to address them.</p>
            </div>
        </div>
    </div>
    </div>
  </div>
</div>
    
    
<div class="hbg3 uk-flex-column uk-background-cover uk-padding uk-flex uk-flex-center uk-flex-middle uk-text-center uk-light uk-height-large uk-position-z-index-negative" uk-sticky="position: bottom; overflow-flip: true; start: -100%; end: 0">
        <h1  uk-parallax="opacity: 0,1; y: -0,0; scale: 2,1; end: 50vh + 50%;">Reach out to us anytime</h1> 
        <Link to={"/contact"}>

        <button className='fbutton' style={{marginLeft:"55vh"}} >Get in Touch</button>
        </Link>
    </div>
</div>


<Footer/>


    </div>
  )
}

export default Creator
