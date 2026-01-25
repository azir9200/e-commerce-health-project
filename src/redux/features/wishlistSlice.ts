import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../lib/product";

interface WishlistState {
  items: Product[];
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlistItem: (state, action: PayloadAction<Product>) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (exists) {
        // Remove from wishlist
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        // Add to wishlist
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleWishlistItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
