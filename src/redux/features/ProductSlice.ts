import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  description: "",
  price: "",
  image: "",
  ratings: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setPrice: (state, action: PayloadAction<string>) => {
      state.price = action.payload;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    setRatings: (state, action: PayloadAction<string>) => {
      state.ratings = action.payload;
    },
  },
});
export const { setName, setDescription, setPrice, setImage, setRatings } =
  productSlice.actions;
export default productSlice.reducer;
