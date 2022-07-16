import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from ".";

interface uiState {
  modalStatus: boolean;
  choiceStatus: boolean;
  cpuStatus: boolean;
}

const initialState: uiState = {
  modalStatus: false,
  choiceStatus: false,
  cpuStatus: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showModal(state) {
      state.modalStatus = !state.modalStatus;
    },
    showChoice(state, action: PayloadAction<boolean>) {
      state.choiceStatus = action.payload;
    },
    showCPU(state, action: PayloadAction<boolean>) {
      state.cpuStatus = action.payload;
    },
    reset(state) {
      state.choiceStatus = false;
      state.cpuStatus = false;
    },
  },
});

const uiReducer = uiSlice.reducer;

export const uiActions = uiSlice.actions;

export default uiReducer;
