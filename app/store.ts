import { configureStore } from "@reduxjs/toolkit";
import storyReducer from "./myReducers/storyReducer";
import userSlice from "./myReducers/userSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    storyReducer: storyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
