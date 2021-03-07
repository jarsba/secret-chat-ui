import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: false,
  token: null
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginAction(state, action) {
      const { token } = action.payload;
      state.logged = true;
      state.token = token;
    },
    logoutAction(state, action) {
      state.logged = false;
      state.token = null
    }
  }
});

export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;
