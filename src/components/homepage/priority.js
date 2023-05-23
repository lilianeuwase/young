// import "./Team.css";
// import "./How.css";
import "./priority.css";
import React from "react";

import famphoto from "../../img/background/bw1.png";

const Priority = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
        {/* <div className="col-xs-12 col-md-6">
            {" "}
            <img src={famphoto} className="img-responsive" alt="" />{" "}
          </div> */}
        <div className="col-xs-12 col-md-6">
          <div className="about-text">
            <h2>PRIORITY</h2>
            <p>
              We prioritize understanding and addressing their needs and
              concerns and ensuring that our programs are tailored to their
              specific contexts and circumstances. By incorporating these
              principles into our design, we are confident that our programs
              will be effective, sustainable, and impactful, and will contribute
              to the wellbeing and empowerment of our target groups.
            </p>
            <p>
              Through our work, we strive to empower young people to take
              ownership of their health and wellbeing, while also contributing
              to a more prosperous and sustainable Rwanda.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Priority;
