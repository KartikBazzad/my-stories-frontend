import Head from "next/head";
import React, { useEffect } from "react";
import { useAppSelector } from "../../../app/myHooks";
import Header from "../../../components/Header/Header";
import BackgroundCard from "../../../components/StoryComponents/cards/BackgroundCard";
import TextPlacementCard from "../../../components/StoryComponents/cards/textPlacementCard";
import TextSizeCard from "../../../components/StoryComponents/cards/TextSizeCard";
import FinalStory from "../../../components/StoryComponents/FinalStory";
import { colors, textPlacement, textSize } from "../../../utils/settings";

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
