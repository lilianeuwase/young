import React from "react";
import { PriorityIntro } from "../components/ourprograms/priorityIntro";
import Prog2 from "../components/ourprograms/prog2";
import  Prog3  from "../components/ourprograms/prog3";
import { Prog4 } from "../components/ourprograms/prog4";
import { ProgHero } from "../components/ourprograms/progHero";

export default function OurPrograms() {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <PriorityIntro/>
      <ProgHero />
      <Prog2/>
      <Prog3/>
      <Prog4/>
    </div>
  );
}
