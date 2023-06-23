import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import ExperienceDetail from "./ExperienceDetail";

const Experience = () => {
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
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
                  dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <ExperienceDetail
            position="PHP Developer -> Senior Software Engineer -> Engineering Manager -> Lead Engineer"
            company="OLX Group"
            companyLink="https://www.olxgroup.com/"
            time="2015 - 2021"
            address="Lisbon, Portugal"
            work="During my time at OLX Group, I progressed from a PHP developer to a Senior Software Engineer,
                then to Engineering Manager, and eventually became a Lead Engineer, playing a key role in the
                design and implementation of the architecture for OLX Group's platform. In these roles, I gained
                extensive experience in software development, project management, and team leadership, contributing
                to the development of OLX Group's platform and helping to make it one of the most successful online
                marketplaces in the world. I was responsible for overseeing multiple projects, leading a team of
                software engineers, and managing the change of the monolith architecture to microservices architecture.
                I also provided support for newcomers developers, launched new classifieds sites around the world,
                and developed proprietary PHP frameworks and Golang microservices. As a Scrum Master, I successfully
                led cross-functional teams to complete complex projects on time and within budget.
                Throughout my time at OLX Group, I was proud to be part of a talented and dedicated team."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
