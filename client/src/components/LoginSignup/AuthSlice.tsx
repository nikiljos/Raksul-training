import { createSlice } from "@reduxjs/toolkit";

const authInitial = {
  token: null,
  user: {
    id: null,
    name: null,
    image: null,
    email: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitial,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    unsetUser: (state) => {
      localStorage.removeItem("access_token")
      state.token = null;
      state.user = authInitial.user;
    },
  },
});

export const { setToken, setUser, unsetUser } = authSlice.actions;

export default authSlice.reducer;
