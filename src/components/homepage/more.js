import React from "react";
import CardItem from "../cards/cardItem";
import CardItem2 from "../cards/cardItem2";
import CardItem3 from "../cards/cardItem3";
import "./exist.css";
import "./aim.css";
import CardItem4 from "../cards/cardItem4";

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

function More() {
  return (
    <div id="card" class="card">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile">
            <div class="tile is-vertical">
              <div class="tile mt-16 mb-16">
                <div class="tile is-parent is-8">
                  <article class="tile is-child">
                    <p className="text-xl tracking-[1.4px] text-center">
                      Despite the Rwandan government's efforts to improve access
                      to education, the country still faces challenges in
                      achieving high levels of literacy and numeracy among its
                      population. Nearly all-Rwandan children are enrolled in
                      primary school, however many leave without functional
                      literacy and numeracy skills they need. Many schools lack
                      adequate resources, including qualified teachers,
                      textbooks, and teaching materials. Additionally, poverty
                      and social factors can limit students' access to education
                      and negatively impact their performance. The government
                      has identified improving literacy and numeracy skills as a
                      priority, and various initiatives have been implemented to
                      address these issues, including teacher training programs
                      and investments in educational infrastructure. However,
                      significant progress is still needed to ensure that all
                      Rwandans have access to quality education and can acquire
                      the necessary skills to participate fully in society and
                      the economy.
                      <br /> <br />
                      According to the World Health Organization (WHO), mental
                      health disorders are a significant public health concern
                      in Rwanda. The prevalence of mental health disorders in
                      the country is estimated to be around 25%, with depression
                      and anxiety being the most common conditions. The impact
                      of the 1994 genocide against Tutsi has contributed to a
                      high prevalence of post-traumatic stress disorder (PTSD)
                      among survivors, with an estimated 20% of the population
                      affected. The mental health system in Rwanda is still
                      developing, and there is a shortage of mental health
                      professionals.
                    </p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child">
                    <CardItem4
                      image={require("../../img/background/bw1.png")}
                      // overline="Health"
                      title="Transforming lives through health, education, and innovation"
                      body="Our motto"
                      color="#75E6DA"
                    />
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

export default More;
