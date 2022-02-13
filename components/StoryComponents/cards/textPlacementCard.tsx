import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/myHooks";
import { placement } from "../../../app/myReducers/storyReducer";

function TextPlacementCard({ textPlacement }: any) {
  const story = useAppSelector((state) => state.storyReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {}, []);
  function changePosition() {
    console.log(textPlacement);
    return dispatch(placement({ ...story, placement: textPlacement }));
  }
  return (
    <div className="w-36 h-36 cursor-pointer  shadow hover:scale-105">
      <div
        onClick={changePosition}
        className={`flex ${textPlacement} p-1 w-36 h-36 ${story.background}  shadow`}
      >
        <div className="">
          <div className="bg-white w-8 m-1 h-2"></div>
          <div className="bg-white w-8 m-1 h-2"></div>
        </div>
      </div>
    </div>
  );
}

export default TextPlacementCard;
