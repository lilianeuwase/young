// import "./Team.css";
import "../homepage/aim.css";
// import "./priority.css";
import React from "react";

const data = [
  {
    icon: "fa fa-book",
    title: "Research",
    text: "Conduct and disseminate research that informs evidence-based policies and practices in the health sector.",
  },
  {
    icon: "fa fa-notes-medical",
    title: "Health",
    text: "Promote sustainable livelihoods and climate-resilient communities through integrated health and livelihood intervention.",
  },
  {
    icon: "fa fa-magic",
    title: "Improve",
    text: "Improve access to quality education, particularly in early childhood education and STEM education, to promote lifelong learning.",
  },
  {
    icon: "fa fa-chart-line",
    title: "Promote",
    text: "Promote innovative approaches to addressing health challenges in Rwanda, with a focus on non-communicable diseases.",
  },
];

const Aim = () => {
  return (
    <div id="how" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>We aim to</h2>
        </div>
        <div className="">
          {data.map((d, i) => (
            <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
              {" "}
              <i className={d.icon}></i>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aim;
