import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import FinalStory from "../../../components/StoryComponents/FinalStory";
import BackgroundColorGroup from "../../../components/StoryComponents/groups/BackgroundColorGroup";
import TextPlacementGroup from "../../../components/StoryComponents/groups/TextPlacementGroup";
import TextSizeGroup from "../../../components/StoryComponents/groups/TextSizeGroup";
import { Dialog, Tab } from "@headlessui/react";
import { publishUserStory } from "../../../utils/api";
import { useAppSelector } from "../../../app/myHooks";
import DisplayStoryCard from "../../../components/StoryComponents/cards/DisplayStoryCard";
import Link from "next/link";
import Router from "next/router";
function Index() {
  const user = useAppSelector((state) => state.userReducer);
  const story = useAppSelector((state) => state.storyReducer);
  const [details, setDetails]: any = useState();
  const [isPublished, setIsPublished] = useState(false);
  useEffect(() => {}, [isPublished]);
  function publishStory() {
    publishUserStory(user.token, story).then(({ data }) => {
      setDetails(data.story);
      setIsPublished(true);
      return;
    });
  }
  function closeModal() {}
  return (
    <div>
      <Head>
        <title>Create Story</title>
        <meta name="description" content="Create a new story" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        {isPublished && (
          <div className="p-8">
            <Dialog open={isPublished} onClose={closeModal}>
              <Dialog.Overlay />
              <div className="flex  p-4 flex-col drop-shadow mx-auto max-w-fit">
                <Dialog.Title>
                  <h1 className="text-center antialiased font-roboto font-semibold text-2xl text-green-600">
                    Story Published
                  </h1>
                </Dialog.Title>
                <Dialog.Description>
                  <DisplayStoryCard details={details} />
                  <div className="w-full flex justify-around p-4">
                    <Link passHref href={"/"}>
                      <button className="button button-ghost">HomePage</button>
                    </Link>
                    <Link passHref href={`/story/${details.storyId}`}>
                      <button className="button button-active">
                        View Story
                      </button>
                    </Link>
                  </div>
                </Dialog.Description>
              </div>
            </Dialog>
          </div>
        )}
        {!isPublished && (
          <div className="flex flex-col-reverse md:flex-row ">
            <div className="flex w-screen flex-col md:flex-row md:max-w-lg">
              <Tab.Group>
                <div className="flex w-screen md:w-40">
                  <Tab.List className="md:h-56 w-full items-center justify-around flex flex-row md:flex-col">
                    <Tab className="tab-button">Colors</Tab>
                    <Tab className="tab-button">Size</Tab>
                    <Tab className="tab-button">Placement</Tab>
                  </Tab.List>
                </div>
                <div className="flex flex-col overflow-y-auto md:flex-row items-start h-full">
                  <Tab.Panels className="p-4">
                    <Tab.Panel className="">
                      <BackgroundColorGroup />
                    </Tab.Panel>
                    <Tab.Panel className="">
                      <TextSizeGroup />
                    </Tab.Panel>
                    <Tab.Panel>
                      <TextPlacementGroup />
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </Tab.Group>
            </div>
            <div className="flex flex-col flex-1 justify-center h-fit max-w-xl border p-4 items-center">
              <FinalStory />
              <div className="p-2 max-auto w-96 flex justify-end">
                <button
                  onClick={publishStory}
                  className="button button-primary"
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        )}
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
