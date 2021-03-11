import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: false,
  token: null,
  user_id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginAction(state, action) {
      const { token, user_id } = action.payload;
      state.logged = true;
      state.token = token;
      state.user_id = user_id
    },
    logoutAction(state, action) {
      state.logged = false;
      state.token = null
      state.user_id = null
    }
  }
});

export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;
