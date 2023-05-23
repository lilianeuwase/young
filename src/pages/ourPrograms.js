import React from "react";
import Prog2 from "../components/ourprograms/prog2";
import { ProgHero } from "../components/ourprograms/progHero";

export default function OurPrograms() {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <ProgHero />
      <Prog2/>
    </div>
  );
}
