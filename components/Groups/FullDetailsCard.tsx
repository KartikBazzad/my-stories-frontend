import Image from "next/image";
import Link from "next/link";
import React from "react";
import DisplayStoryCard from "../StoryComponents/cards/DisplayStoryCard";

function FullDetailsCard({ story }: any) {
  return (
    <div className="p-2 flex flex-col gap-2 shadow">
      <div className="w-96 mx-auto">
        <Link passHref href={`/profile/${story.user.userId}`}>
          <div className="flex cursor-pointer items-end font-roboto">
            <Image
              src={story.user.photo}
              className="rounded-full"
              width="35px"
              height="35px"
              alt={story.user.username}
            />
            <p>{story.user.username}</p>
          </div>
        </Link>
      </div>
      <Link passHref href={`/story/${story.storyId}`}>
        <div className="p-2 cursor-pointer">
          <DisplayStoryCard details={story} />
        </div>
      </Link>
    </div>
  );
}

export default FullDetailsCard;
