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
    allOrderAndStatus: builder.query({
      query: () => ({
        url: `orders/allOrderAndStatus`,
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
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useOrderCreateMutation,
  useGetVerifyOrderQuery,
  useGetAllOrderQuery,
  useAllOrderAndStatusQuery,
  useGetSingleOrderQuery,
  useDeleteOrderMutation,
} = OderApi;
