import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userinfo: localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")) : null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userinfo = action.payload;
      localStorage.setItem("userinfo", JSON.stringify(action.payload));

      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days
      localStorage.setItem("expirationTime", expirationTime);
    },
    logout: (state, action) => {
      state.userinfo = null;
      localStorage.removeItem("userinfo");
      localStorage.removeItem("expirationTime");
      // window.location.href = "/";
    }
  }
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
