import React from "react";

// import components
import Hero from "../components/homepage/hero";
import GallerySection from "../components/homepage/gallerySection";
import Interview from "../components/homepage/interview";
import Vision from "../components/homepage/vision";
import Contact from "../components/homepage/contact";
import Mission from "../components/homepage/mission";
import Priority from "../components/homepage/priority";
import MoreIntro from "../components/homepage/moreIntro";
import Stats from "../components/homepage/stats";
import Aim from "../components/homepage/aim";
import Exist from "../components/homepage/exist";
import More from "../components/homepage/more";

export default function HomePage() {
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
      <Hero />
      {/* <Vision /> */}
      <Mission />
      <Aim />
    
      {/* <GallerySection /> */}
      {/* <Priority /> */}
      <Stats />
      <MoreIntro />
      <Exist/>
      {/* <Interview /> */}
      {/* <More/> */}
      {/* <Contact /> */}
    </div>
  );
}
