import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import gameReducer from "./game-slice";

const store = configureStore({ reducer: { ui: uiReducer, game: gameReducer } });

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
