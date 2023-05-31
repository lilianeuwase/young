import React from "react";
// import about data
import { aboutData } from "../../data";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../../variants";

const Mission = () => {
  // destructure about data
  const { title1, title2, subtitle1, subtitle2, btnText, btnIcon } = aboutData;
  return (
    <section className="lg:py-0 xl:pb-[40px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-[60px] items-center">
          {/* numbers */}
          <motion.div
            variants={fadeIn("right")}
            // initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col lg:flex-row flex-1"
          >
            <div className="text-[360px] xl:text-[700px] leading-none font-tertiary lg:-tracking-[0.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent">
              01
            </div>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left")}
            // initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 h-full xl:mt-28"
          >
            <h2 className="h2">{title1}</h2>
            <div className="flex flex-col items-end">
              <div className="max-w-[530px] text-grey">
                <p className="mb-6">{subtitle1}</p>

                {/* <button className='btn btn-lg btn-link'>
                  {btnText}
                  <div className='text-xl'>{btnIcon}</div>
                </button> */}
              </div>
            </div>
            <h2 className="h2">{title2}</h2>
            <div className="flex flex-col items-end">
              <div className="max-w-[530px] text-grey">
                <p className="mb-6">{subtitle2}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
