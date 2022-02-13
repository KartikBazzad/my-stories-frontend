import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/myHooks";
import { placement } from "../../../app/myReducers/storyReducer";

function TextPlacementCard({ textPlacement }: any) {
  const story = useAppSelector((state) => state.storyReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {}, []);
  function changePosition() {
    return dispatch(placement({ ...story, placement: textPlacement }));
  }
  return (
    <div
      onClick={changePosition}
      className={`flex ${textPlacement} bg-gray-800 w-40 h-40 shadow`}
    >
      <div className="">
        <div className="bg-white w-8 m-1 h-3"></div>
        <div className="bg-white w-8 m-1 h-3"></div>
      </div>
    </div>
  );
}

export default TextPlacementCard;
