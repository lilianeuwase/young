import React from "react";
import WhoGrids from "../components/whoweare/whoGrids.js";

import WhoHero from "../components/whoweare/whoHero.js";
import { WhoIcons } from "../components/whoweare/whoIcons.js";
import WhoMore from "../components/whoweare/whoMore.js";

export default function WhoWeAre() {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <WhoHero />
       <WhoMore />
       <WhoIcons/>
      <WhoGrids />
    </div>
  );
}
