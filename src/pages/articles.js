import AnimatedText from "@/components/AnimatedText";
import Article from "@/components/Article";
import FeaturedArticle from "@/components/FeaturedArticle";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React from "react";
import Article2 from "../../public/images/articles/create loading screen in react js.jpg";
import Article1 from "../../public/images/articles/pagination component in reactjs.jpg";

const articles = () => {
  return (
    <>
      <Head>
        <title>NDays | Articles</title>
        <meta name="description" content="Description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm-mb-8"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                      Follow this step-by-step guide to integrate Pagination component in your
                      ReactJS project."
              time="9 min read"
              img={Article1}
              link="/"
            />
            <FeaturedArticle
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              summary="Learn how to create stunning loading screens in React with
                      3 different methods. Discover how to use React-Loading,
                      React-Lottie & build a custom loading screen. Improve the user experience."
              time="10 min read"
              img={Article2}
              link="/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              img={Article1}
              link="/"
              date="March 15, 2015"
            />
            <Article
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              img={Article1}
              link="/"
              date="March 15, 2015"
            />
            <Article
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              img={Article1}
              link="/"
              date="March 15, 2015"
            />
            <Article
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              img={Article1}
              link="/"
              date="March 15, 2015"
            />
            <Article
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              img={Article1}
              link="/"
              date="March 15, 2015"
            />
            <Article
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              img={Article1}
              link="/"
              date="March 15, 2015"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
