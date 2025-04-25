import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: " ",
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});
export const { setName, setEmail, setPassword } = loginSlice.actions;
export default loginSlice.reducer;
