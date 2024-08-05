import React, { useEffect } from 'react'
import Header from '../common/header'
import Footer from '../common/footer'
import { Link } from 'react-router-dom'
import c1 from "../../Assets/images/security-1.png";
import c2 from "../../Assets/images/net.png";
import c3 from "../../Assets/images/asser2x-150x150.png";
import c4 from "../../Assets/images/cloud.png";
import c5 from "../../Assets/images/data-security.png";




import Aos from 'aos';





const Creator = () => {


  useEffect(() => {
    Aos.init({
      duration: 1200,
    })
  })


  return (
    <div  >
      <Header />



      <section className=" service_sec" style={{ marginTop: '-100px' }} >

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
                Eifers' Malware Protection service is designed to safeguard your systems from malicious software, including viruses, trojans, ransomware, and spyware. Our advanced detection and prevention solutions ensure that your digital environment remains secure from both known and emerging threats. Utilizing state-of-the-art technologies, we continuously monitor for suspicious activities and provide timely updates and patches to protect your systems. Our proactive approach minimizes the risk of infections and ensures that your business operations are not disrupted by malware attacks
              </p>
              {/* <Link to="/creator"> Learn More </Link> */}
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-body uk-card-primary">
              <img style={{ width: "20%" }} src={c5} />
              <h2>Data Security</h2>
              <p>
                {" "}
                Our Data Security service focuses on protecting your sensitive information from unauthorized access, breaches, and theft. We implement robust encryption techniques, secure data storage solutions, and comprehensive access controls to safeguard your data at all stages - in transit, at rest, and during processing. Eifers' data security solutions also include regular audits, compliance checks, and data loss prevention strategies, ensuring that your organization meets all regulatory requirements and maintains the highest standards of data integrity and confidentiality.

              </p>
              {/* <Link to="/creator"> Learn More </Link> */}
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-body uk-card-primary">
              <img style={{ width: "20%" }} src={c3} />
              <h2>Web Security</h2>
              <p>
                {" "}
                Eifers' Web Security service is dedicated to protecting your online presence from a wide range of cyber threats, including SQL injection, cross-site scripting (XSS), and DDoS attacks. We provide a multi-layered defense strategy that includes web application firewalls (WAF), secure coding practices, and regular vulnerability assessments. Our team works tirelessly to ensure that your websites and web applications are resilient against cyber attacks, safeguarding your business's reputation and ensuring a seamless user experience for your customers.

              </p>
              {/* <Link to="/creator"> Learn More </Link> */}
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
                Our Network Security service aims to secure your organization's network infrastructure from unauthorized access, intrusions, and other cyber threats. Eifers employs a combination of firewalls, intrusion detection and prevention systems (IDPS), and secure network architecture to protect your internal and external networks. We continuously monitor network traffic, identify potential vulnerabilities, and implement robust security measures to ensure that your network remains secure, reliable, and efficient.
              </p>
              {/* <Link to="/creator"> Learn More </Link> */}
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-body uk-card-primary">
              <img style={{ width: "20%" }} src={c1} />
              <h2>Computer Security</h2>
              <p>
                {" "}
                Eifers' Computer Security service is focused on protecting individual workstations, servers, and mobile devices within your organization. We provide comprehensive endpoint security solutions that include antivirus software, endpoint detection and response (EDR), and device management policies. Our approach ensures that all devices connected to your network are secure and compliant with your organization's security policies, reducing the risk of cyber attacks and ensuring that your critical assets are protected.


              </p>
              {/* <Link to="/creator"> Learn More </Link> */}
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-body uk-card-primary">
              <img style={{ width: "20%" }} src={c4} />
              <h2>Locker Security</h2>
              <p>
                {" "}
                Our Locker Security service offers physical and digital solutions for securing your most valuable assets. Eifers provides state-of-the-art physical security measures, such as biometric access controls and secure storage facilities, as well as digital solutions like encrypted storage and secure access management. Whether you need to protect physical documents, sensitive digital files, or both, our Locker Security service ensures that your assets are safe from theft, loss, and unauthorized access
              </p>
              {/* <Link to="/creator"> Learn More </Link> */}
            </div>
          </div>
        </div>
      </section>


      <Footer />


    </div>
  )
}

export default Creator
