import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storyReducer from "./myReducers/storyReducer";
import userSlice from "./myReducers/userSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { RESET_STATE_ACTION_TYPE } from "./myActions/resetState";
import { userApi, USER_API_REDUCER_KEY } from "./queries/userQuery";
import { storyApi, STORY_API_REDUCER_KEY } from "./queries/storyQuery";

const reducers = {
  userReducer: userSlice,
  storyReducer: storyReducer,
  [USER_API_REDUCER_KEY]: userApi.reducer,
  [STORY_API_REDUCER_KEY]: storyApi.reducer,
};

const combinedReducers = combineReducers<typeof reducers>(reducers);

export const rootReducer = (state: any, action: any) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }
  return combinedReducers(state, action);
};
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([userApi.middleware, storyApi.middleware]),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof combinedReducers>;

export type AppDispatch = typeof store.dispatch;
