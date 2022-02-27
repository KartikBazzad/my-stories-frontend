import Router from "next/router";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/myHooks";

function FinalStory() {
  const story = useAppSelector((state) => state.storyReducer);
  const user = useAppSelector((state) => state.userReducer);
  useEffect(() => {
    if (!story.content && !story.caption && !story.title) {
      Router.push("/stories/create");
    }
  }, [story]);

  useEffect(() => {
    if (!user.token) {
      console.log(`user not logged in`);
      Router.push("/");
    } else {
      console.log("User logged in");
    }
  }, [user.token]);

  return (
    <div>
      <>
        <div>
          <div
            className={`border w-96 ${story.background} p-1 text-center h-96`}
          >
            <p className="w-full opacity-50 text-xs font-poppins text-right">
              {user.username}
            </p>
            <div className={`flex h-94 w-full ${story.placement} `}>
              <div className=" flex flex-col overflow-hidden">
                <h1
                  className={`${story.headingSize} font-poppins font-semibold`}
                >
                  {story.title}
                </h1>
                <p className={`${story.contentSize} font-roboto`}>
                  {story.content}
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs opacity-50  w-full text-left">my-stories</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default FinalStory;
