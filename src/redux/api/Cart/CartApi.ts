import { baseApi } from "../baseApi/baseApi";

const CartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all Carts
    getAllCart: builder.query({
      query: () => ({
        url: "api/cart/get",
        method: "GET",
      }),
      providesTags: ["cart"],
    }),

    // Add a new Cart
    Cartcreate: builder.mutation({
      query: (data) => ({
        url: "api/cart/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const { useGetAllCartQuery, useCartcreateMutation } = CartApi;
