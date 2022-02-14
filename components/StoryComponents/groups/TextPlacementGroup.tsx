import React from "react";
import TextPlacementCard from "../cards/textPlacementCard";

function TextPlacementGroup() {
  return (
    <div className="w-full">
      <h1 className="font-poppins text-xl font-semibold p-2 text-center hidden md:block">
        Select Text Position
      </h1>
      <div className="flex w-full   items-center justify-center">
        <div className="flex w-full max-h-90vh   max-w-full md:max-w-xl items-start justify-start flex-row p-2  md:flex-wrap gap-2">
          {textPlacement.map((x) => {
            return <TextPlacementCard key={x.id} textPlacement={x.position} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TextPlacementGroup;

const textPlacement = [
  {
    id: 1,
    position: "items-center justify-center",
  },
  {
    id: 2,
    position: "items-start justify-start",
  },
  {
    id: 3,
    position: "items-start justify-center",
  },
  {
    id: 4,
    position: "items-start justify-end",
  },
  {
    id: 5,
    position: "items-center justify-start",
  },
  {
    id: 6,
    position: "items-center justify-end",
  },
  {
    id: 7,
    position: "items-end justify-start",
  },
  {
    id: 8,
    position: "items-end justify-end",
  },
  {
    id: 9,
    position: "items-end justify-center",
  },
];
