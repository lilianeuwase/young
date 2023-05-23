import React, { useState } from "react";
// import data
import { galleryData } from "../data";
// import photo album & lightbox
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../variants";

const slides = galleryData.images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const GalleryPage = () => {
  const [index, setIndex] = useState(-1);
  // destructure gallery data
  const { title, btnText, btnIcon, moreimages } = galleryData;
  return (
    <section className="bg-[#F9F9F9] section relative mt-[40px] lg:mt-0">
      <div className="container mx-auto">

      </div>
      {/* photo album */}
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8 lg:mb-20"
      >
        <PhotoAlbum
          layout="rows"
          photos={moreimages}
          onClick={(event, photo, index) => setIndex(index)}
        />
        <Lightbox
          slides={slides}
          styles={{ container: { backgroundColor: "rgba(0,0,0,.9)" } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </motion.div>
      {/* btn */}
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center"
      >
        <a href="/">
          <button className="btn btn-lg btn-dark">
            HOME
            <div className="text-xl">{btnIcon}</div>
          </button>
        </a>
      </motion.div>
    </section>
  );
};

export default GalleryPage;
