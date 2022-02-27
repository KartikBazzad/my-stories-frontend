import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export type UserProfileResponse = {
  userId: string | undefined;
  photo: string | undefined;
  username: string | undefined;
};

export const USER_API_REDUCER_KEY = "userApi";
export const userApi = createApi({
  reducerPath: USER_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).userReducer.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Follow", "User"],
  endpoints: (builder) => ({
    getUserProfile: builder.query<UserProfileResponse, any>({
      query: (token) => {
        return {
          url: "/auth/profile",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    followNewUser: builder.mutation<void, any>({
      query: (profileId) => ({
        url: `/profile/${profileId}/follow`,
        method: "POST",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "User", id: arg }],
    }),
    unfollowUser: builder.mutation<void, any>({
      query: (profileId) => ({
        url: `/profile/${profileId}/unfollow`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "User", id: arg }],
    }),
    checkFollowedUser: builder.query<any, any>({
      query: (profileId) => {
        return {
          url: `/profile/${profileId}/isfollowed`,
          method: "GET",
        };
      },
      providesTags: (result, error, arg) => [{ type: "User", id: arg }],
    }),
  }),
});
