import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface WorkspaceState {
  recordingFolder: string;
}

const initialState: WorkspaceState = {
  recordingFolder: "",
};

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    setRecordingFolder(state, action: PayloadAction<string>) {
      state.recordingFolder = action.payload;
    },
  },
});

export const { setRecordingFolder } = workspaceSlice.actions;
export default workspaceSlice.reducer;
