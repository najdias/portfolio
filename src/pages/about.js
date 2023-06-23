import AnimatedNumber from "@/components/AnimatedNumber";
import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import ProfilePic from "../../public/images/profile/developer-pic-2.jpg";

const about = () => {
  return (
    <>
      <Head>
        <title>NDays | About</title>
        <meta name="description" content="Description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm-mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4
                        md:order-2 md:col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I&apos;m Nuno Dias, a highly experienced senior software
                developer with a strong focus on e-commerce solutions. I have
                extensive expertise in various technologies, including PHP,
                HTML, CSS, Tailwind CSS, React, Next.js, and Spryker. Currently,
                I&apos;m a Spryker senior software developer, leading the
                development of customized e-commerce solutions for clients.
                I&apos;m passionate about leveraging technology to enhance user
                experiences and deliver high-quality results that exceed client
                expectations.
              </p>
              <p className="my-4 font-medium">
                Aside from my technical expertise, I&apos;m a natural leader
                with exceptional management skills. I&apos;ve previously held
                roles as an engineering manager and lead engineer, where I
                successfully managed and mentored teams of developers to deliver
                outstanding results. My leadership style is characterized by my
                ability to inspire and motivate team members to work
                collaboratively and deliver quality results within tight
                deadlines.
              </p>
              <p className="font-medium">
                I&apos;m committed to staying up-to-date with the latest
                technologies and trends in my field. I regularly attend industry
                events and training programs to expand my knowledge and skills.
                With my technical expertise, leadership skills, and passion for
                innovation, I&apos;m confident that I&apos;m a valuable asset to
                any organization seeking to deliver high-quality software
                solutions that meet client needs and exceed expectations.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid
                      border-dark bg-light p-8 dark:bg-dark dark:border-light
                      xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]
                        bg-dark dark:bg-light "
              />
              <Image
                src={ProfilePic}
                alt="NDays"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8
                        xl:flex-row xl:items-center md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={50} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                            xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={40} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                            xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={4} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                            xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
