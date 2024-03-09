import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [],
  detail: {},
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    getLists: (state, { payload }) => {
      state.lists = payload;
    },
    getDetail: (state, { payload }) => {
      state.detail = payload;
    },
  },
});

export const { getLists, getDetail } = listSlice.actions;

export default listSlice.reducer;
