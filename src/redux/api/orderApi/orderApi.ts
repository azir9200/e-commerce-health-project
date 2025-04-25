import { baseApi } from "../baseApi/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all products
    getAllProduct: builder.query({
      query: () => ({
        url: "api/product",
        method: "GET",
      }),
    }),

    // Add a new product
    createOrder: builder.mutation({
      query: (data) => {
        return {
          url: "api/order/create",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useGetAllProductQuery, useCreateOrderMutation } = productApi;
