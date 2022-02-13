import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStoryState = {
  title: string;
  content: string;
  caption: string;
  headingSize: string;
  contentSize: string;
  placement: string;
  background: string;
};

const initialState: InitialStoryState = {
  title: "",
  caption: "",
  content: "",
  headingSize: "text-base",
  contentSize: "text-sm",
  placement: "items-center justify-center",
  background: "bg-gray-900 text-white",
};

const storySlice = createSlice({
  name: "storySlice",
  initialState,
  reducers: {
    createStory: (state, action: PayloadAction<any>) => ({
      ...state,
      ...action.payload,
    }),
    setTextSize: (state, action: PayloadAction<any>) => ({
      ...state,
      ...action.payload,
    }),
    placement: (state, action: PayloadAction<any>) => ({
      ...state,
      ...action.payload,
    }),
    background: (state, action: PayloadAction<any>) => ({
      ...state,
      ...action.payload,
    }),
    defaultState: (state) => ({
      ...state,
      title: "",
      caption: "",
      content: "",
      headingSize: "",
      contentSize: "",
      placement: "items-center justify-center",
      background: "bg-gray-900 text-white",
    }),
  },
});

export const { createStory, setTextSize, defaultState, placement, background } =
  storySlice.actions;
export default storySlice.reducer;
