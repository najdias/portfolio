import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import EducationDetail from "./EducationDetail";

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl
                  md:mb-16"
      >
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
          dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <EducationDetail
            type="Spryker Certified Foundations Developer"
            time="2023"
            place="Spryker"
            info="Recognized as Spryker Certified Foundations Developer."
          />
          <EducationDetail
            type="Certified Remote Individual"
            time="2021"
            place="Remote-how, Inc."
            info="Assess current remote skills
                  Teach how to improve them."
          />
          <EducationDetail
            type="Certified Scrum Master"
            time="2018"
            place="Scrum Alliance"
            info="Foster an effective and productive working environment and guiding
                  others to understand scrum values, principles and practices."
          />
          <EducationDetail
            type="Bachelor in Computer Engineering"
            time="2003-2011"
            place="School of Technology and Management of Bragança (ESTiG)"
            info="Relevant courses included Data Structures and Algorithms, Computer
                  Systems Engineering and development languages."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
