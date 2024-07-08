import React from "react";
import "./ChooseUs.css";
import chooseBackgroundImg from "../Images/why-choose-us.png";

const ChooseUs = ({id}) => {
  return (
    <div id={id}>
    <div className="container">
      <div className="choose-container">
        <div className="choose__content">
          <h5>
            Join us on this educational journey, where curiosity meets expertise. Together, we unlock endless possibilities and make education accessible to anyone, anywhere, transforming lives and breaking down barriers.  
          </h5>
        </div>
        <div className="choose__background">
          <img src={chooseBackgroundImg} alt="Choose Us Background" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ChooseUs;
