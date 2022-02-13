import React, { useEffect } from "react";
import { useAppSelector } from "../../app/myHooks";

function FinalStory() {
  const story = useAppSelector((state) => state.storyReducer);
  useEffect(() => {
    console.log(story);
  }, [story]);
  return (
    <div>
      <div
        className={`border w-96 ${story.background} flex ${story.placement} text-white text-center h-96`}
      >
        <div>
          <h1 className={`${story.headingSize} font-poppins font-semibold`}>
            {story.title}
          </h1>
          <p className={`${story.contentSize} font-roboto`}>{story.content}</p>
        </div>
      </div>
    </div>
  );
}

export default FinalStory;
