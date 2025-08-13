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
        url: `auth/alluser`,
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),

    getSingleUser: builder.query({
      query: () => ({
        url: `auth/sigleuser`,
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),
    updateRoleUser: builder.mutation({
      query: (id) => ({
        url: `auth/updateRole/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Auth"],
    }),
    updateUser: builder.mutation({
      query: (body) => ({
        url: `auth/upateuser`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Auth"],
    }),
    changePassword: builder.mutation({
      query: (body) => ({
        url: `auth/changePassword`,
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["Auth"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `auth/deletedUser/${id}`,
        method: "DELETE",
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
