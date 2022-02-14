import React from "react";
import TextSizeCard from "../cards/TextSizeCard";

function TextSizeGroup() {
  return (
    <div className="w-full md:max-w-sm">
      <h1 className="font-poppins text-xl font-semibold p-2 text-center hidden md:block">
        Select Text Size
      </h1>
      <div>
        <div className="flex max-h-90vh flex-row items-center justify-center  overflow-auto md:flex-wrap gap-2">
          {textSize.map((x) => {
            return <TextSizeCard key={x.headingSize} font={x} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TextSizeGroup;

const textSize = [
  {
    heading: "Heading 1",
    content: "this is content",
    headingSize: "text-5xl",
    contentSize: "text-2xl",
  },
  {
    heading: "Heading 2",
    content: "this is content",
    headingSize: "text-4xl",
    contentSize: "text-2xl",
  },
  {
    heading: "Heading 3",
    content: "this is content",
    headingSize: "text-3xl",
    contentSize: "text-lg",
  },
  {
    heading: "Heading 4",
    content: "this is content",
    headingSize: "text-2xl",
    contentSize: "text-lg",
  },
  {
    heading: "Heading 5",
    content: "this is content",
    headingSize: "text-xl",
    contentSize: "text-base",
  },
  {
    heading: "Heading 6",
    content: "this is content",
    headingSize: "text-lg",
    contentSize: "text-base",
  },
  {
    heading: "Default",
    content: "this is content",
    headingSize: "text-base",
    contentSize: "text-sm",
  },
];
