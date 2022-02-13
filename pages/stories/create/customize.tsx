import Head from "next/head";
import React, { useEffect } from "react";
import { useAppSelector } from "../../../app/myHooks";
import Header from "../../../components/Header/Header";
import BackgroundCard from "../../../components/StoryComponents/cards/BackgroundCard";
import TextPlacementCard from "../../../components/StoryComponents/cards/textPlacementCard";
import TextSizeCard from "../../../components/StoryComponents/cards/TextSizeCard";
import FinalStory from "../../../components/StoryComponents/FinalStory";
const colors = [
  "bg-gray-900 text-white",
  "bg-blue-400 text-black",
  "bg-pink-500 text-black",
  "bg-green-700 text-white",
  "bg-red-700 text-white",
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

function Index() {
  const story = useAppSelector((state) => state.storyReducer);
  useEffect(() => {
    console.log(story);
  }, []);
  return (
    <div>
      <Head>
        <title>Create Story</title>
        <meta name="description" content="Create a new story" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div>
          <FinalStory />
          <div>
            Select Position
            <div className="flex flex-wrap gap-2">
              {textPlacement.map((x) => {
                return (
                  <TextPlacementCard key={x.id} textPlacement={x.position} />
                );
              })}
            </div>
          </div>
          <div>Select Text Size</div>
          <div className="flex flex-wrap gap-2">
            {textSize.map((x) => {
              return <TextSizeCard key={x.headingSize} font={x} />;
            })}
          </div>
          <div>Select Background</div>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => {
              return <BackgroundCard key={color} color={color} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Index;
