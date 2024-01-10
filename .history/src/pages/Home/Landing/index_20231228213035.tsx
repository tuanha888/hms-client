import React from "react";
import "./Landing.scss";
const Landing = () => {
  return (
    <div id="home-page">
      <div className="container">
        <div className="overlay"></div>
        <div className="landing">
          <h1 className="landing-heading">
            Bệnh viện dda khoa 20 xin kính chào quý khách
          </h1>
          <p className="landing-content"></p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
