import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import { useEffect } from "react";
import FullDetailsCard from "../components/Groups/FullDetailsCard";
import Header from "../components/Header/Header";
import DisplayStoryCard from "../components/StoryComponents/cards/DisplayStoryCard";

const Home: NextPage = ({ stories }: any) => {
  useEffect(() => {}, []);
  return (
    <div>
      <Head>
        <title>My Stories</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header />

        <div className="w-full">
          <div className="mx-auto flex items-center justify-center p-8 gap-3 flex-wrap">
            {stories.map((story: any) => {
              return (
                <div key={story.storyId}>
                  <FullDetailsCard story={story} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const stories = await fetch(`${process.env.BASE_URL}/story/all`);
  const data = await stories.json();
  console.log(data);
  return {
    props: { stories: data },
  };
};
