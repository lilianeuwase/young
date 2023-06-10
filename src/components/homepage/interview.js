import React, { useState } from "react";
// import data
import { interviewData } from "../../data";
// import modal video
import ModalVideo from "react-modal-video";
import "../../modalVideo.scss";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../../variants";

const Interview = () => {
  // destructure interview data
  const { title, subtitle, btnText, btnIcon } = interviewData;
  const [isOpen, setOpen] = useState(false);
  return (
    <motion.section
      variants={fadeIn("up")}
      // initial='hidden'
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="section bg-dark bg-interview bg-no-repeat bg-cover bg-center lg:h-[250px]"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center h-full text-center">
          <motion.h3
            variants={fadeIn("down")}
            className="text-white text-[40px] lg:text-[40px] leading-[1.1] font-tertiary -tracking-[1.5px] capitalize mb-8"
          >
            {title}
            <br />
            {subtitle}
          </motion.h3>
        </div>
      </div>
    </motion.section>
  );
};

export default Interview;
