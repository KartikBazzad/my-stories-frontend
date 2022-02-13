import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/myHooks";
import { background } from "../../../app/myReducers/storyReducer";

function BackgroundCard({ color }: any) {
  const story = useAppSelector((state) => state.storyReducer);
  useEffect(() => {}, []);
  const dispatch = useAppDispatch();
  const setBackground = () => {
    console.log(color);
    dispatch(background({ ...story, background: color.color }));
    return;
  };
  return (
    <div>
      <div
        onClick={setBackground}
        className={`w-40 cursor-pointer h-40 ${color.color}`}
      >
        <div>
          {story.title}
          {story.content}
        </div>
      </div>
    </div>
  );
}

export default BackgroundCard;
