import { baseApi } from "../baseApi/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/api/user/create",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/api/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    getAllUser: builder.query({
      query: () => ({
        url: `api/user/alluser`,
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),

    getSingleUser: builder.query({
      query: (id) => ({
        url: `api/user/singleuser/${id}`,
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),
    updateRoleUser: builder.mutation({
      query: (id) => ({
        url: `api/user/updateRole/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Auth"],
    }),
    updateUser: builder.mutation({
      query: (body) => ({
        url: `api/user/upateuser`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Auth"],
    }),
    changePassword: builder.mutation({
      query: (body) => ({
        url: `api/user/changePassword`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Auth"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `api/user/deletedUser/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});
export const {
  useSignUpMutation,
  useLoginMutation,
  useGetAllUserQuery,
  useGetSingleUserQuery,
  useUpdateRoleUserMutation,
  useUpdateUserMutation,
  useChangePasswordMutation,
  useDeleteUserMutation,
} = authApi;
