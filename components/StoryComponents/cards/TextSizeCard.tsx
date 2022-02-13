import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/myHooks";
import { setTextSize } from "../../../app/myReducers/storyReducer";

function TextSizeCard({ font }: any) {
  const story = useAppSelector((state) => state.storyReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {}, []);
  function changeSize() {
    dispatch(
      setTextSize({
        ...story,
        headingSize: font.headingSize,
        contentSize: font.contentSize,
      })
    );
  }
  return (
    <div>
      <div
        onClick={changeSize}
        className={`border cursor-pointer shadow w-56 h-36 text-center flex flex-col items-center justify-center`}
      >
        <p className={`${font.headingSize}`}>{font.heading}</p>
        <p className={`${font.contentSize}`}>{font.content}</p>
      </div>
    </div>
  );
}

export default TextSizeCard;
