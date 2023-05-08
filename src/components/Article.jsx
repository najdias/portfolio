import { motion } from "framer-motion";
import React from "react";
import MovingImage from "./MovingImage";

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
                justify-between bg-light text-dark first:mt-0 border
                border-solid border-dark border-r-4 border-b-4 dark:bg-dark
                dark:text-light dark:border-light sm:flex-col"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <MovingImage title={title} img={img} link={link} />
      <span
        className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start
                  sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

export default Article;
