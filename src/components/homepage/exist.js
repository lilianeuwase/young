import React from "react";
import CardItem from "../cards/cardItem";
import CardItem2 from "../cards/cardItem2";
import CardItem3 from "../cards/cardItem3";
import "./exist.css";
import "./aim.css";
import CardItem4 from "../cards/cardItem4";
import CardItem5 from "../cards/cardItem5";
import { CardItem6 } from "../cards/cardItem6";

// import tharci from '../../img/';
// import patri from '../../images/Patricia.jpeg';
// import nico from '../../images/Nicole.jpeg';
// import dani from '../../images/Daniel.jpeg';
// import jean from '../../images/Jean.webp';
// import simon from '../../images/Simon.jpeg';
// import nat from '../../images/Nat.jpeg';
// import orne from '../../images/Ornella.jpeg';
// import arle from '../../images/Arlene.jpeg';
// import andre from '../../images/Andre.jpeg';
// import noella from '../../images/Noella.webp';

function Exist() {
  return (
    <div id="card" class="card">
      <div className="mx-auto max-w-4xl lg:text-center">
        <div className=" section-title">
          <h2> Why do we exist</h2>
        </div>
        <p className="mt-6 mb-16 text-lg text-gray-600 uppercase font-bold tracking-[1.2px] text-center">
          One significant problem facing many young people around the world is
          the lack of access to education, to quality and friendly healthcare
          services. This can be due to a range of factors, including inadequate
          infrastructure, shortage of healthcare workers, limited financial
          resources, and cultural or social barriers that prevent young people
          from seeking care.
        </p>
      </div>
      <div class="tile is-ancestor ">
        <div class="tile is-vertical">
          <div class="tile">
            <div class="tile is-vertical">
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      image={require("../../img/icons/Motherhood-rafiki.png")}
                      overline="Pregnancies"
                      title="Teen pregnancies"
                      body="Teenage pregnancies remain a significant challenge in Rwanda. According to the 2014/2015 Rwanda Demographic and Health Survey, 7% of adolescent girls aged 15-19 in Rwanda had begun childbearing, and 22% of girls in this age group reported being sexually active."
                      color="#75E6DA"
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      image={require("../../img/icons/Anxiety-bro.png")}
                      overline="Health"
                      title="Mental Health"
                      body="Mental health issues among youth and women in Rwanda are a growing concern. According to the Ministry of Health, depression is the leading cause of disability among women in Rwanda, and rates of depression and anxiety are particularly high among women who have experienced gender-based violence."
                      color="#75E6DA"
                    />
                  </article>
                </div>
              </div>
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      image={require("../../img/icons/Tiredness-rafiki.png")}
                      overline="NCD"
                      title="NCDs in Rwanda"
                      body="15% adults aged 15-64 years have hypertension and 3.1% adults aged 15-64 years have diabetes. NCDs are a significant health burden in Rwanda. According to the Rwanda NCDs Risk Factors Report of 2018, NCDs account for approximately 29% of all deaths in the country."
                      color="#48bcb1"
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      image={require("../../img/icons/World AIDS Day-pana.png")}
                      overline="HIV"
                      title="HIV Prevalence"
                      body="In Rwanda, the prevalence of HIV has declined significantly in recent years. According to the latest available data from 2019, the overall prevalence of HIV among adults (ages 15-49) is 2.9%, down from 3.1% in 2015. Among women, the prevalence is higher at 3.6%, compared to 2.1% among men."
                      color="#62bcb2"
                    />
                  </article>
                </div>
              </div>
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      image={require("../../img/icons/Tiredness-rafiki.png")}
                      overline="Education"
                      title="Education"
                      body="Despite the Rwandan government's efforts to improve access to education, the country still faces challenges in achieving high levels of literacy and numeracy among its population. Nearly all-Rwandan children are enrolled in primary school, however many leave without functional literacy and numeracy skills they need."
                      color="#48bcb1"
                    />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem6 />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exist;
