import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialUserState = {
  isLoggedIn: boolean;
  userId: string | null;
  username: string | null;
  photo: string | null;
  token: string | null;
};

const initialState: InitialUserState = {
  isLoggedIn: false,
  userId: null,
  username: null,
  photo: null,
  token: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<InitialUserState>) => ({
      ...state,
      ...action.payload,
    }),
    logout: () => ({
      isLoggedIn: false,
      userId: "",
      username: "",
      token: "",
      photo: "",
    }),
    setToken: (state, action: PayloadAction<string>) => ({
      ...state,
      token: action.payload,
    }),
  },
});

export const { login, logout, setToken } = userSlice.actions;
export default userSlice.reducer;
