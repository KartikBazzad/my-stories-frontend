import axios from "axios";
import { setPriority } from "os";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useAppSelector } from "../../../app/myHooks";
import { storyApi } from "../../../app/queries/storyQuery";
import { getStoryLike } from "../../../utils/api";
import UnlikeButton from "./DislikeButton";
import LikeButton from "./LikeButton";

function StoryButtons({ story }: any) {
  const [likes, setLikes] = useState(story._count.storyLike);
  const user = useAppSelector((state) => state.userReducer);
  const { storyId } = story;
  const [likeStory] = storyApi.endpoints.likeStory.useMutation({
    fixedCacheKey: "Like",
  });
  const [dislikeStory] = storyApi.endpoints.dislikeStory.useMutation({
    fixedCacheKey: "Like",
  });
  const storyApiResult = storyApi.endpoints.storyLikes.useQuery(storyId!, {
    skip: !user.token,
  });
  const storyLikeResult = storyApi.endpoints.getLikes.useQuery(storyId!, {
    skip: !storyId,
  });
  const { data, isSuccess } = storyApiResult;
  useEffect(() => {
    if (storyLikeResult.isSuccess) setLikes(storyLikeResult.data?.storyLike);
  }, [user.token, storyId, storyLikeResult.data]);
  async function likeFunction() {
    await likeStory(storyId);
    console.log("Liked");
    return;
  }
  async function dislikeFunction() {
    await dislikeStory(storyId);
    return console.log("disliked");
  }
  function promptLogin() {
    return alert("Login First");
  }
  return (
    <div className="flex cursor-pointer">
      {!user.isLoggedIn ? (
        <div onClick={promptLogin}>
          <UnlikeButton likes={likes} />
        </div>
      ) : !data?.liked ? (
        <div onClick={likeFunction}>
          <UnlikeButton likes={likes} />
        </div>
      ) : (
        <div onClick={dislikeFunction}>
          <LikeButton likes={likes} />
        </div>
      )}
    </div>
  );
}

export default StoryButtons;
