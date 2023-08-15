import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import HeaderLink from "./HeaderLink";
import HeaderMobileLink from "./HeaderMobileLink";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import Logo from "./Logo";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const MotionLink = motion(Link);

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
              dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8"
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300
                    ease-out block h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300
                    ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300
                    ease-out block h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <HeaderLink href="/" title="Home" className="mr-4" />
          <HeaderLink href="/about" title="About" className="mx-4" />
          {/* <HeaderLink href="/projects" title="Projects" className="ml-4" /> */}
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <MotionLink
            href="https://twitter.com/Days85"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </MotionLink>
          <MotionLink
            href="https://github.com/days85"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </MotionLink>
          <MotionLink
            href="https://www.linkedin.com/in/nunojdias/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </MotionLink>
          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center
                  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md
                  py-32"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex items-center flex-col justify-center">
            <HeaderMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <HeaderMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <HeaderMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <MotionLink
              href="https://twitter.com/Days85"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mr-1"
            >
              <TwitterIcon />
            </MotionLink>
            <MotionLink
              href="https://github.com/days85"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1"
            >
              <GithubIcon />
            </MotionLink>
            <MotionLink
              href="https://www.linkedin.com/in/nunojdias/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </MotionLink>
            <button
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
