import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialUserState = {
  isLoggedIn: boolean;
  userId: string;
  username: string;
  photo: string;
  token: string;
};

const initialState: InitialUserState = {
  isLoggedIn: false,
  userId: "",
  username: "",
  photo: "",
  token: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<InitialUserState>) => ({
      ...state,
      ...action.payload,
    }),
    logout: (state) => ({
      ...state,
      isLoggedIn: false,
      userId: "",
      username: "",
      token: "",
      photo: "",
    }),
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
