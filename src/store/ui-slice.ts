import { createSlice } from "@reduxjs/toolkit";
// import type { RootState } from ".";

interface uiState {
  modalStatus: boolean;
}

const initialState: uiState = {
  modalStatus: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showModal(state) {
      state.modalStatus = !state.modalStatus;
    },
  },
});

const uiReducer = uiSlice.reducer;

export const uiActions = uiSlice.actions;

export default uiReducer;
