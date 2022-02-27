import React, { useEffect, useState } from "react";

function DisplayStoryCard({ details }: any) {
  return (
    <div>
      <>
        <div className="w-full cursor-pointer flex flex-col items-center justify-center">
          <div
            className={`border w-96 ${details.background} p-1 text-center h-96`}
          >
            <p className="w-full opacity-50 text-xs font-poppins text-right">
              {details.user.username}
            </p>
            <div className={`flex h-94 w-full ${details.placement} `}>
              <div className=" flex flex-col overflow-hidden">
                <h1
                  className={`${details.headingSize} font-poppins font-semibold`}
                >
                  {details.title}
                </h1>
                <p className={`${details.contentSize} font-roboto`}>
                  {details.content}
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

export default DisplayStoryCard;
