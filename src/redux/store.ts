import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "../redux/features/ProductSlice";
import { baseApi } from "./api/baseApi/baseApi";
import cartReducer from "./features/cartSlice";
import loginReducer from "./features/loginSlice";
import registerReducer from "./features/RegisterSlice";
import userReducer from "./features/userSlice";
import wishlistReducer from "./features/wishlistSlice";

const persistUserConfig = {
  key: "user",
  storage,
};
const persistWishlistConfig = {
  key: "wishlist",
  storage,
};
const persistedWishlistReducer = persistReducer(
  persistWishlistConfig,
  wishlistReducer
);
const persistedUserReducer = persistReducer(persistUserConfig, userReducer);
const persistCartConfig = {
  key: "cart",
  storage,
};

const persistedCartReducer = persistReducer(persistCartConfig, cartReducer);
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: persistedCartReducer,
    login: loginReducer,
    register: registerReducer,
    user: persistedUserReducer,
    product: productReducer,
    wishlist: persistedWishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>; // Infers the state structure
export type AppDispatch = typeof store.dispatch; // Type for dispatch
export type AppStore = typeof store; // Type for the store

// Persistor to manage rehydration of state
export const persistor = persistStore(store);
