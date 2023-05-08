import AnimatedText from "@/components/AnimatedText";
import FeaturedProject from "@/components/FeaturedProject";
import Layout from "@/components/Layout";
import Project from "@/components/Project";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React from "react";
import featuredProject1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const projects = () => {
  return (
    <>
      <Head>
        <title>NDays | Projects</title>
        <meta name="description" content="Description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm-mb-8"
          />
          <div
            className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24
                      sm:gap-x-0"
          >
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project 1"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS,
                        Context API, React Router and Recharts. It shows detail
                        regarding almost all the cryptocurrency. You can easily
                        convert the price in your local currency."
                img={featuredProject1}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project 1"
                title="Crypto Screener Application"
                img={featuredProject1}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project 2"
                title="Crypto Screener Application"
                img={featuredProject1}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project 2"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS,
                        Context API, React Router and Recharts. It shows detail
                        regarding almost all the cryptocurrency. You can easily
                        convert the price in your local currency."
                img={featuredProject1}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project 3"
                title="Crypto Screener Application"
                img={featuredProject1}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project 4"
                title="Crypto Screener Application"
                img={featuredProject1}
                link="/"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
