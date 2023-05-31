import React from "react";
import WhoGrids from "../components/whoweare/whoGrids.js";
import { WhoHero2 } from "../components/whoweare/whoHero2.js";
import { WhoIcons } from "../components/whoweare/whoIcons.js";
import WhoMore from "../components/whoweare/whoMore.js";

export default function WhoWeAre() {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <WhoHero2 />
      {/* <WhoHero /> */}
      <WhoIcons/>
      <WhoMore />
   
      <WhoGrids />
    </div>
  );
}
