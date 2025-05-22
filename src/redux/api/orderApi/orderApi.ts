import { baseApi } from "../baseApi/baseApi";

export const OderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    OrderCreate: builder.mutation({
      query: (payload) => ({
        url: `api/order/create`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Orders"],
    }),
    getVerifyOrder: builder.query({
      query: (order_id) => ({
        url: `api/order/verify`,
        params: { order_id },
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),
    getAllOrder: builder.query({
      query: () => ({
        url: `api/order`,
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),
    getSingleOrder: builder.query({
      query: () => ({
        url: `api/order/personal`,
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),
    getAllProduct: builder.query({
      query: () => ({
        url: "api/product",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetVerifyOrderQuery,
  useOrderCreateMutation,
  useGetAllOrderQuery,
  useGetSingleOrderQuery,
  useGetAllProductQuery,
} = OderApi;
