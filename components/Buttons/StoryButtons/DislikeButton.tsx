import React from "react";

function DislikeButton({ likes }: any) {
  return (
    <div className="flex">
      <p className="px-2 font-roboto">{likes}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 "
        viewBox="0 0 20 20"
        fill="#C5C5C5"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default DislikeButton;
