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
        className={`w-40 flex items-center justify-center cursor-pointer h-40 ${color.color}`}
      >
        <div className="">
          <div className="w-8 m-1 h-3"></div>
          <div className="w-8 m-1 h-3"></div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundCard;
