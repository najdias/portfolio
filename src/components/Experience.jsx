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
            position="Senior Software Developer"
            company="Turbine Kreuzberg"
            companyLink="https://turbinekreuzberg.com/"
            time="2022 - actual"
            address="Lisbon, Portugal"
            work="&bull; Work as a Spryker Senior Software Developer<br />
                  &bull; Design and implement software architectures for high-quality e-commerce solutions<br />
                  &bull; Collaborate with cross-functional teams to ensure the successful delivery of projects on time and within budget<br />
                  &bull; Mentor and train junior developers to develop leadership skills<br />
                  &bull; Gain extensive experience in developing e-commerce solutions for clients"
          />
          <ExperienceDetail
            position="Senior Software Developer"
            company="Dept Agency"
            companyLink="https://www.deptagency.com/"
            time="2021 - 2022"
            address="Lisbon, Portugal"
            work="&bull; Worked as a Spryker Senior Software Developer for Dept Agency<br />
                  &bull; Designed and implemented software architectures for high-quality e-commerce solutions<br />
                  &bull; Collaborated with cross-functional teams to ensure the successful delivery of projects on time and within budget<br />
                  &bull; Mentored and trained junior developers to develop leadership skills<br />
                  &bull; Gained extensive experience in developing e-commerce solutions for clients"
          />
          <ExperienceDetail
            position="Lead Engineer"
            company="OLX Group"
            companyLink="https://www.olxgroup.com/"
            time="2015 - 2021"
            address="Lisbon, Portugal"
            work="&bull; Worked as a PHP developer at OLX Group, contributing to the development of the company's online marketplace platform<br />
                  &bull; Progressed to become a Senior Software Engineer, taking on more complex projects and working with larger teams<br />
                  &bull; Promoted to Engineering Manager, responsible for overseeing multiple projects and leading a team of software engineers<br />
                  &bull; Later worked as a Lead Engineer, playing a key role in designing and implementing the architecture for OLX Group's platform<br />
                  &bull; Gained extensive experience in software development, project management, and team leadership<br />
                  &bull; Contributed to the development of OLX Group's platform, helping to make it one of the most successful online marketplaces in the world<br />
                  &bull; Development of new features and maintenance of classifieds sites.<br />
                  &bull; Proprietary PHP framework development.<br />
                  &bull; Support for newcomers developers.<br />
                  &bull; Launch of new classifieds sites around the world.<br />
                  &bull; Change of monolith architecture to microservices architecture.<br />
                  &bull; AWS Infrastructure.<br />
                  &bull; Golang microservices development and support.<br />
                  &bull; Team management.<br />
                  &bull; Scrum master.<br />
                  &bull; Architecture design"
          />
          <ExperienceDetail
            position="Software Developer"
            company="Gatewit"
            companyLink="https://www.linkedin.com/company/gatewit"
            time="2015 - 2015"
            address="Lisbon, Portugal"
            work="&bull; Web applications development.<br />
                  &bull; Development and maintenance of public procurement website.<br />
                  &bull; Support for configuration and use of version control structures (Git)<br />
                  &bull; Support for new comers developers.<br />
                  &bull; Technologies: PHP, HTML, CSS, jQuery, Javascript, MySQL, Symfony"
          />
          <ExperienceDetail
            position="Software Developer"
            company="Softconcept"
            companyLink="https://www.softconcept.pt/"
            time="2014 - 2015"
            address="Lisbon, Portugal"
            work="&bull; HelpDesk support<br />
                  &bull; Development and maintenance of ERP.<br />
                  &bull; Development and maintenance of web services.<br />
                  &bull; Tecnologies: PHP, jQuery, Oracle, MySQL, C#, Yii Framework, AngularJS"
          />
          <ExperienceDetail
            position="Software Developer"
            company="IrRADIARE LDA"
            companyLink="https://www.irradiare.com/"
            time="2012 - 2014"
            address="Lisbon, Portugal"
            work="&bull; Model-View-Controller Development.<br />
                  &bull; Data base development (MySQL, PostgreSQL).<br />
                  &bull; Front-End (HTML, XML, CSS).<br />
                  &bull; PHP Development.<br />
                  &bull; Development of Java Web Services.<br />
                  &bull; Development of components/modules/plug-ins for CMS integration (Joomla).<br />
                  &bull; Test and verification of security elements and data protection.<br />
                  &bull; Development of Java Web Services for remote functionality."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
