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

