import React, { useEffect } from "react";
import { useAppSelector } from "../../../app/myHooks";
import { userApi } from "../../../app/queries/userQuery";
import FollowButton from "./FollowButton";
import UnfollowButton from "./UnfollowButton";
function FollowButtonGroup({ author }: any) {
  const user = useAppSelector((state) => state.userReducer);
  const checkFollow = userApi.endpoints.checkFollowedUser.useQuery(
    author.userId!,
    {
      skip: !user.token,
    }
  );
  const [followUser] = userApi.endpoints.followNewUser.useMutation();
  const [unfollowUser] = userApi.endpoints.unfollowUser.useMutation();
  useEffect(() => {
    console.log(checkFollow.data);
  }, [checkFollow.data]);

  const userFollowHandler = async () => {
    await followUser(author.userId);
    return console.log("Followed");
  };
  const userUnfollowHandler = async () => {
    await unfollowUser(author.userId);
    return console.log("Unfollowed");
  };

  return (
    <>
      {!checkFollow.data ? (
        <div onClick={userFollowHandler}>
          <FollowButton />
        </div>
      ) : (
        <div onClick={userUnfollowHandler}>
          <UnfollowButton />
        </div>
      )}
    </>
  );
}

export default FollowButtonGroup;
