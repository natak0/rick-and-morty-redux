import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setpage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setpage } = pageSlice.actions;

export default pageSlice.reducer;
