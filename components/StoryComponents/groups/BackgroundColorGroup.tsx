import React from "react";
import BackgroundCard from "../cards/BackgroundCard";

function BackgroundColorGroup() {
  return (
    <div className="w-full md:max-w-sm">
      <h1 className="font-poppins text-xl font-semibold p-2 text-center hidden md:block">
        Select Background Color
      </h1>
      <div className="flex flex-row max-h-90vh overflow-auto md:flex-wrap gap-2">
        {colors.map((color) => {
          return <BackgroundCard key={color.id} color={color} />;
        })}
      </div>
    </div>
  );
}

export default BackgroundColorGroup;

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
