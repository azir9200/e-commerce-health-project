import { baseApi } from "../baseApi/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all products
    getAllCategory: builder.query({
      query: () => ({
        url: "api/category",
        method: "GET",
      }),
    }),

    // Add a new product
    addCategory: builder.mutation({
      query: (newProduct) => ({
        url: "api/category/create",
        method: "POST",
        body: newProduct,
      }),
    }),
  }),
});

export const { useGetAllCategoryQuery, useAddCategoryMutation } = productApi;
