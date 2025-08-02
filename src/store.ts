import { configureStore } from "@reduxjs/toolkit";
import workspaceReducer from "./screens/workspace/workspaceSlice";

export const store = configureStore({
  reducer: {
    workspace: workspaceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
