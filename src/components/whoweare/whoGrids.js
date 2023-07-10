// import "./Team.css";
import "./whoGrids.css";
// import "./priority.css";
import React from "react";
import CardItem5 from "../cards/cardItem5";
import "../homepage/exist.css";
import "../homepage/aim.css";

const Aim = () => {
  return (
    <div className="bg-white" id="card">
      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-24">
        <div className=" text-center section-title">
          <h2> Our Values</h2>
        </div>
        <ul className="cards_items">
          <li className="cards_item">
            <CardItem5
              photo={require("../../img/background/include.png")}
              title1="INCLUSIVITY"
              subtitle1="All individuals, regardless of their background, should have equal access to mental health services and resources. The organization should create a safe and welcoming space for all individuals, including those who may have been marginalized or excluded in the past."
              blue="Get included"
              icon1="All individuals"
              icon2="Timely"
              icon3="Connected"
            />
          </li>
          <li className="cards_item">
            <CardItem5
              photo={require("../../img/background/empanthy.png")}
              title1="EMPATHY"
              subtitle1="The organization should prioritize understanding and respecting the experiences, emotions, and needs of individuals living with mental health issues. This includes recognizing the unique challenges that different communities face and responding to them with compassion."
              blue="share the feelings"
              icon1="Understand"
              icon2="Respect"
              icon3="Mental strength"
            />
          </li>
          <li className="cards_item">
            <CardItem5
              photo={require("../../img/background/responsible.png")}
              title1="ADVOCACY"
              subtitle1="The organization should speak up for the rights and needs of the community, amplify their voices, and advocate for social justice, equality, and positive systemic change."
              blue="Express Your Views"
              icon1="Speak "
              icon2="Justice"
              icon3="Equality"
            />
          </li>
        </ul>
        <ul className="cards_items">
          <li className="cards_item">
            <CardItem5
              photo={require("../../img/background/Innovation.png")}
              title1="INNOVATION"
              subtitle1="The organization should be open to new ideas, technologies, and approaches that can improve mental health services and outcomes. They should encourage creativity and experimentation, while also being mindful of evidence-based practices and guidelines."
              blue="Revolution"
              icon1="Open mind"
              icon2="Evidence based"
              icon3="Technologies"
            />{" "}
          </li>
          <li className="cards_item">
            <CardItem5
              photo={require("../../img/background/responsible.png")}
              title1="ACCOUNTABILITY"
              subtitle1="The organization should be transparent and accountable to the community it serves. This includes reporting on the impact of services and resources, seeking feedback from stakeholders, and using this information to continuously improve the quality of care. By upholding these values, community organizations can foster a culture of trust, respect, and collaboration that can help to address mental health issues more effectively and support the wellbeing of individuals and communities."
              blue="Responsibility"
              icon1="Transparent "
              icon2="Accountable"
              icon3="Feedback"
            />
          </li>
          <li className="cards_item">
            <CardItem5
              photo={require("../../img/background/collaborate.png")}
              title1="COLLABORATION"
              subtitle1="The organization should work closely with other stakeholders, including healthcare providers, community leaders, and mental health professionals, to ensure that services are comprehensive, coordinated, and effective. Collaboration builds strong partnerships and networks that can promote mental health awareness and access."
              blue="Work together"
              icon1="Stakeholders"
              icon2="Networks"
              icon3="Communication"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Aim;
