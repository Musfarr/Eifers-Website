import React from 'react';

const HelpFAQ = () => {
  return (
    <div className="uk-padding uk-padding-large-top uk-light uk-padding-large-bottom" style={{ backgroundColor: "#011936" }}>
      <h1 className="uk-heading-line uk-text-center"><span>Help & FAQ</span></h1>
      
      <p>Welcome to the Eifers Help & FAQ page. Here, you will find answers to common questions about our services, policies, and more. If you can't find the information you're looking for, please feel free to contact us.</p>

      <ul uk-accordion="true" className="uk-accordion">

        <li>
          <a className="uk-accordion-title" href="#">What is Eifers?</a>
          <div className="uk-accordion-content">
            <p>Eifers is a cybersecurity firm providing comprehensive solutions, including penetration testing, security audits, and consulting services to help protect businesses from cyber threats.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">How can I contact Eifers?</a>
          <div className="uk-accordion-content">
            <p>You can reach us via email at <a href="mailto:privacy@eifers.io">privacy@eifers.io</a>, phone at +447598320511 (this number is active on WhatsApp), or through our contact form on the Contact Us page.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">What services does Eifers offer?</a>
          <div className="uk-accordion-content">
            <p>We offer a range of cybersecurity services, including:</p>
            <ul className="uk-list uk-list-disc">
              <li>Penetration Testing</li>
              <li>Security Audits</li>
              <li>Malware Protection</li>
              <li>Vulnerability Assessments</li>
              <li>Consulting Services</li>
              <li>Data Security</li>
              <li>Network Security</li>
            </ul>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">How can I request a service?</a>
          <div className="uk-accordion-content">
            <p>You can request a service by visiting our Services page and filling out the service request form, or by contacting us directly.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">What is penetration testing?</a>
          <div className="uk-accordion-content">
            <p>Penetration testing, or pen testing, is a simulated cyberattack against your system to identify vulnerabilities that could be exploited by attackers.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">How often should penetration testing be done?</a>
          <div className="uk-accordion-content">
            <p>It is recommended to conduct penetration testing at least once a year or whenever there are significant changes to your systems or applications.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">How long does a penetration test take?</a>
          <div className="uk-accordion-content">
            <p>The duration of a penetration test varies based on the scope and complexity of the project. Typically, a pen test can take anywhere from a few days to several weeks.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">What payment methods does Eifers accept?</a>
          <div className="uk-accordion-content">
            <p>We accept various payment methods, Wise, bank transfers, and PayPal.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">Can I get a refund?</a>
          <div className="uk-accordion-content">
            <p>Refunds are handled on a case-by-case basis. Please refer to our Refund Policy for more information or contact our support team.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">How does Eifers protect my data?</a>
          <div className="uk-accordion-content">
            <p>We use advanced security measures, including encryption, access controls, and regular security audits, to protect your data. For more details, please read our Privacy Policy.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">What should I do if I suspect a security issue with Eifers services?</a>
          <div className="uk-accordion-content">
            <p>If you suspect any security issues, please contact our support team immediately at <a href="mailto:privacy@eifers.io">privacy@eifers.io</a>.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">Is Eifers compliant with GDPR?</a>
          <div className="uk-accordion-content">
            <p>Yes, Eifers is compliant with the General Data Protection Regulation (GDPR). For more information, please read our Privacy Policy.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">How can I get technical support?</a>
          <div className="uk-accordion-content">
            <p>You can get technical support by contacting our support team via email at <a href="mailto:privacy@eifers.io">privacy@eifers.io</a> or phone at +447598320511.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">What are your support hours?</a>
          <div className="uk-accordion-content">
            <p>Our support team is available from 9am - 5pm (GMT +00) on weekdays. For urgent issues outside these hours, please contact us, and we will respond as soon as possible.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">How can I provide feedback about Eifers services?</a>
          <div className="uk-accordion-content">
            <p>We value your feedback! Please send your comments and suggestions to <a href="mailto:privacy@eifers.io">privacy@eifers.io</a> or fill out the feedback form on our Contact Us page.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">Where can I find the latest news and updates from Eifers?</a>
          <div className="uk-accordion-content">
            <p>You can find the latest news and updates on our Blog page or by following us on our LinkedIn or Instagram.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">Can Eifers help with compliance audits?</a>
          <div className="uk-accordion-content">
            <p>Yes, Eifers can assist with compliance audits for various regulations and standards such as GDPR, HIPAA, PCI-DSS, and more. Our experts will help ensure that your organization meets all necessary compliance requirements.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">What is a security audit?</a>
          <div className="uk-accordion-content">
            <p>A security audit is a comprehensive assessment of your organization's security policies, practices, and infrastructure. It identifies vulnerabilities and recommends improvements to enhance your security posture.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">What is a vulnerability assessment?</a>
          <div className="uk-accordion-content">
            <p>A vulnerability assessment is a systematic review of security weaknesses in your information system. It involves identifying, quantifying, and prioritizing vulnerabilities to improve your security defenses.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">What industries does Eifers serve?</a>
          <div className="uk-accordion-content">
            <p>Eifers serves a wide range of industries, including finance, healthcare, education, retail, and more. Our expertise allows us to design our services to meet the unique needs of each industry.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">How do I schedule a consultation with Eifers?</a>
          <div className="uk-accordion-content">
            <p>You can schedule a consultation by visiting our Contact Us page and filling out the consultation request form or by calling us directly at +447598320511.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">What happens during a security breach?</a>
          <div className="uk-accordion-content">
            <p>In the event of a security breach, Eifers can provide immediate incident response services. Our team will help contain the breach, mitigate the damage, and investigate the root cause to prevent future incidents.</p>
          </div>
        </li>

        <li>
          <a className="uk-accordion-title" href="#">Do you offer managed security services?</a>
          <div className="uk-accordion-content">
            <p>Yes, Eifers offers managed security services, including continuous monitoring, threat detection, and incident response. Our team of experts will manage your security operations to ensure your systems are always protected.</p>
          </div>
        </li>

      </ul>
    </div>
  );
};

export default HelpFAQ;
