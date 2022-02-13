import Head from "next/head";
import React, { useEffect } from "react";
import { useAppSelector } from "../../../app/myHooks";
import Header from "../../../components/Header/Header";
import BackgroundCard from "../../../components/StoryComponents/cards/BackgroundCard";
import TextPlacementCard from "../../../components/StoryComponents/cards/textPlacementCard";
import TextSizeCard from "../../../components/StoryComponents/cards/TextSizeCard";
import FinalStory from "../../../components/StoryComponents/FinalStory";
import BackgroundColorGroup from "../../../components/StoryComponents/groups/BackgroundColorGroup";
import TextPlacementGroup from "../../../components/StoryComponents/groups/TextPlacementGroup";
import TextSizeGroup from "../../../components/StoryComponents/groups/TextSizeGroup";

function Index() {
  useEffect(() => {}, []);
  return (
    <div>
      <Head>
        <title>Create Story</title>
        <meta name="description" content="Create a new story" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="flex flex-col-reverse md:flex-row ">
          <div className="flex md:max-w-sm overflow-auto flex-col">
            <TextPlacementGroup />
            <BackgroundColorGroup />
            <TextSizeGroup />
          </div>
          <div className="flex">
            <FinalStory />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Index;

const colors = [
  {
    id: 1,
    color: "bg-gray-900 text-white",
  },
  {
    id: 2,
    color: "bg-blue-400 text-black",
  },
  {
    id: 3,
    color: "bg-pink-500 text-black",
  },
  {
    id: 4,
    color: "bg-green-700 text-white",
  },
  {
    id: 5,
    color: "bg-red-700 text-white",
  },
];
const textSize = [
  {
    heading: "Heading 1",
    content: "this is content",
    headingSize: "text-5xl",
    contentSize: "text-2xl",
  },
  {
    heading: "Heading 2",
    content: "this is content",
    headingSize: "text-4xl",
    contentSize: "text-2xl",
  },
  {
    heading: "Heading 3",
    content: "this is content",
    headingSize: "text-3xl",
    contentSize: "text-lg",
  },
  {
    heading: "Heading 4",
    content: "this is content",
    headingSize: "text-2xl",
    contentSize: "text-lg",
  },
  {
    heading: "Heading 5",
    content: "this is content",
    headingSize: "text-xl",
    contentSize: "text-base",
  },
  {
    heading: "Heading 6",
    content: "this is content",
    headingSize: "text-lg",
    contentSize: "text-base",
  },
  {
    heading: "Default",
    content: "this is content",
    headingSize: "text-base",
    contentSize: "text-sm",
  },
];

const textPlacement = [
  {
    id: 1,
    position: "items-start justify-start",
  },
  {
    id: 2,
    position: "items-center justify-start",
  },
  {
    id: 3,
    position: "items-start justify-center",
  },
  {
    id: 4,
    position: "items-end justify-start",
  },
  {
    id: 5,
    position: "items-end justify-center",
  },
  {
    id: 6,
    position: "items-end justify-end",
  },
  {
    id: 7,
    position: "items-center justify-center",
  },
  {
    id: 8,
    position: "items-center justify-end",
  },
  {
    id: 9,
    position: "items-start justify-end",
  },
];
