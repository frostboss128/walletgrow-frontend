import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accountInfo: {},
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccountInfo: (state, action) => {
      state.accountInfo = action.payload;
    },
  },
});

export const { setAccountInfo } = accountSlice.actions;

export default accountSlice.reducer;
