// import "./Team.css";
import "./prog3.css";
// import "./priority.css";
import React from "react";

const data = [
  {
    icon: "fa fa-pen-nib",
    title: "This program aims to promote equitable and inclusive access to quality education, with a focus on early childhood education and STEM education.",
    text: "Conduct and disseminate research that informs evidence-based policies and practices in the health sector.",
  },
  {
    icon: "fa fa-print",
    title: "Our early childhood education program will provide comprehensive and developmentally appropriate education for children aged 3-6 years.",
    text: "Promote sustainable livelihoods and climate-resilient communities through integrated health and livelihood intervention.",
  },
  {
    icon: "fa fa-barcode",
    title: "Our STEM education program will provide innovative and engaging learning experiences in science, technology, engineering, and mathematics.",
    text: "Improve access to quality education, particularly in early childhood education and STEM education, to promote lifelong learning.",
  },
  {
    icon: "fa fa-folder-open",
    title: "Through our Education program, we aim to contribute to SDG 4 - Quality Education by improving access to and the quality of education.",
    text: "Promote innovative approaches to addressing health challenges in Rwanda, with a focus on non-communicable diseases.",
  },
];

const Prog3 = () => {
  return (
    <div id="prog3" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-prog3">
          <h2>The Education program </h2>
        </div>
        <div className="">
          {data.map((d, i) => (
            <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
              {" "}
              <i className={d.icon}></i>
              <h3>{d.title}</h3>
              {/* <p>{d.text}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prog3;
