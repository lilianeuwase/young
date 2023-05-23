import React from "react";
import CardItem from "../cards/cardItem";
import CardItem2 from "../cards/cardItem2";
import CardItem3 from "../cards/cardItem3";
import "./exist.css";
import "./aim.css";

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
                      body="Teenage pregnancies remain a significant challenge in Rwanda. According to the 2014/2015 Rwanda Demographic and Health Survey, 7% of adolescent girls aged 15-19 in Rwanda had begun childbearing, and 22% of girls in this age group reported being sexually active. Some of the factors contributing to teenage pregnancies in Rwanda include Limited access to sexual and reproductive health information and services. Many young people in Rwanda lack access to comprehensive SRH information and services."
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
                      body="Mental health issues among youth and women in Rwanda are a growing concern. According to the Ministry of Health, depression is the leading cause of disability among women in Rwanda, and rates of depression and anxiety are particularly high among women who have experienced gender-based violence. Stigma and lack of resources: Mental health issues are often stigmatized in Rwanda, and many people lack access to quality mental health care and support."
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
                      body="15% adults aged 15-64 years have hypertension and 3.1% adults aged 15-64 years have diabetes. NCDs are a significant health burden in Rwanda. According to the Rwanda NCDs Risk Factors Report of 2018, NCDs account for approximately 29% of all deaths in the country. The risk factors for NCDs in Rwanda include unhealthy diets, physical inactivity, tobacco use, and harmful alcohol consumption. These risk factors are often associated with lifestyle changes that have occurred as a result of urbanization and changing social and economic conditions making young people more vulnerable to NCDs."
                      color="#48bcb1" />
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem2
                      image={require("../../img/icons/World AIDS Day-pana.png")}
                      overline="HIV"
                      title="HIV Prevalence"
                      body="In Rwanda, the prevalence of HIV has declined significantly in recent years. According to the latest available data from 2019, the overall prevalence of HIV among adults (ages 15-49) is 2.9%, down from 3.1% in 2015. Among women, the prevalence is higher at 3.6%, compared to 2.1% among men. However some particular groups are affected more than others. According to a study conducted in 2015 by the Rwandan Ministry of Health and other partners, the HIV prevalence among female sex workers in Kigali was estimated to be 45.7%, while that among male sex workers was estimated to be 18.5%."
                      color="#62bcb2" />
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
