import React from "react";
// import about data
import { aboutData } from "../../data";
// import motion
import { motion } from "framer-motion";
// import variants
import { fadeIn } from "../../variants";

const MoreIntro = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, btnText, btnIcon } = aboutData;
  return (
    <section className="lg:py-0 xl:pb-[80px] bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-[70px] items-center">
        {/* text */}
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex-1 h-full xl:mt-20"
          >
            <h2 className='h2 text-white'>The Principal</h2>
            <div className="flex flex-col items-end">
              <div className="max-w-[530px] text-white">
                <p className="mb-6">
                  The principal philosophy behind RYVC’s mission is the belief
                  that a better life is possible. The power of our holistic
                  approach lies in our partnerships, our sustainable programs
                  and facility integration, meaningful engagement of our
                  beneficiaries and our passion to serve. We always strive to be
                  a catalyst for positive change. Every action we take is
                  intended to inspire meaningful service and deliver results
                  that will improve economic and social conditions and make life
                  better for Rwandese young generation and marginalized groups
                  in the communities we serve for years to come. We seek
                  grassroots solutions to local challenges in an effort to help
                  people help themselves.{" "}
                  
                </p>

                {/* <button className='btn btn-lg btn-link'>
                  {btnText}
                  <div className='text-xl'>{btnIcon}</div>
                </button> */}
              </div>
            </div>
          </motion.div>
          {/* numbers */}
          <motion.div
            variants={fadeIn('right')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex flex-col lg:flex-row flex-1'
          >
          <div className="text-[360px] xl:text-[720px] leading-none font-tertiary lg:-tracking-[0.055em] bg-moreIntro bg-no-repeat bg-right bg-clip-text text-transparent">
            02
          </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default MoreIntro;