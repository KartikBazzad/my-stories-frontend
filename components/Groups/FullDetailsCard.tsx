import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAppSelector } from "../../app/myHooks";
import FollowButtonGroup from "../Buttons/FollowButtons.tsx";
import StoryButtons from "../Buttons/StoryButtons";
import DisplayStoryCard from "../StoryComponents/cards/DisplayStoryCard";

function FullDetailsCard({ story }: any) {
  const user = useAppSelector((state) => state.userReducer);
  return (
    <div className="p-2 flex flex-col gap-2 shadow">
      <div className="w-96 mx-auto flex items-center justify-between">
        <Link passHref href={`/profile/${story.user.userId}`}>
          <div className="flex cursor-pointer items-center font-roboto">
            <Image
              src={story.user.photo}
              className="rounded-full drop-shadow-sm"
              width="35px"
              height="35px"
              alt={story.user.username}
            />
            <p className="p-2 font-roboto font-medium text-gray-700">
              {story.user.username}
            </p>
          </div>
        </Link>
        {user.isLoggedIn && (
          <>
            {user.userId !== story.user.userId && (
              <div>
                <FollowButtonGroup author={story.user} />
              </div>
            )}
          </>
        )}
      </div>
      <Link passHref href={`/story/${story.storyId}`}>
        <div className="p-2 cursor-pointer">
          <DisplayStoryCard details={story} />
        </div>
      </Link>
      <div className="flex">
        <StoryButtons story={story} />
      </div>
    </div>
  );
}

export default FullDetailsCard;
