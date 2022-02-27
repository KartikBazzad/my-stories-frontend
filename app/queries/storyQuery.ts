import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AnyPtrRecord } from "dns";
import build from "next/dist/build";
import { RootState } from "../store";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const STORY_API_REDUCER_KEY = "storyApi";
export const storyApi = createApi({
  reducerPath: STORY_API_REDUCER_KEY,
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
  tagTypes: ["Like", "Story"],
  endpoints: (builder) => ({
    getLikes: builder.query<any, any>({
      query: (storyId) => {
        return { url: `story/${storyId}/likes`, method: "GET" };
      },
      providesTags: (result, error, arg) => {
        return result ? [{ type: "Story" as const, id: arg }] : ["Story"];
      },
    }),
    storyLikes: builder.query<any, any>({
      query: (storyId) => {
        return { url: `story/${storyId}/isliked`, method: "GET" };
      },
      providesTags: (result, error, arg) => {
        console.log(result, arg);
        return result ? [{ type: "Story" as const, id: arg }] : ["Story"];
      },
    }),
    likeStory: builder.mutation<void, any>({
      query: (storyId) => {
        return { url: `story/${storyId}/like`, method: "POST" };
      },
      invalidatesTags: (result, error, arg) => [{ type: "Story", id: arg }],
    }),
    dislikeStory: builder.mutation<void, string>({
      query: (storyId) => ({
        url: `story/${storyId}/dislike`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Story", id: arg }],
    }),
  }),
});

export type LikeStoryType = {
  id: number;
  storyId: string;
  userId: string;
};
