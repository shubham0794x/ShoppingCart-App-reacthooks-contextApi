import React from "react";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="options">
          <div className="heading">About</div>
          <About />
        </div>
        <div className="options">
          <div className="heading">Quick Links</div>
          <QuickLinks />
        </div>

        <div className="options">
          <div className="heading">Contact Developer</div>
          <DeveloperContact />
        </div>
      </div>
      <div className="cp-signature">
        <span>&#9400; OPENSOURCE PROJECT</span>
      </div>
    </div>
  );
};

const QuickLinks = () => (
  <React.Fragment>
    <Link className="option" to="/">
      Shop
    </Link>
    <Link className="option" to="/checkout">
      Cart
    </Link>
  </React.Fragment>
);

const About = () => (
  <div className="about">
    React E-Store is a web app developed with React Hooks and the Context API 
  </div>
);

const DeveloperContact = () => (
  <React.Fragment>
    <span className="option">Shubham Bhadani</span>
    <address className="option">
      <a href="mailto:"></a>
    </address>
    <div className="contact-icons">
      
    </div>
  </React.Fragment>
);

export default Footer;
