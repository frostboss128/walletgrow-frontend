import { apiSlice } from "./apiSlice";
import { USER_URL } from "../services/constants";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),

    register: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}`,
        method: "POST",
        body: data,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: "POST",
      }),
    }),

    profile: builder.query({
      query: () => ({
        url: `${USER_URL}/profile`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),

    updateProfile: builder.query({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PUT",
        body: data,
      }),
      keepUnusedDataFor: 5,
    }),

    getUsers: builder.query({
      query: (query) => ({
        url: USER_URL,
        method: "GET",
        params: query,
      }),
      providesTags: ["User"],
      keepUnusedDataFor: 5,
    }),

    getUser: builder.query({
      query: (userId) => ({
        url: `${USER_URL}/${userId}`,
        method: "GET",
      }),
    }),
    updateUser: builder.mutation({
      query: (userId) => ({
        url: `${USER_URL}/${userId}`,
        method: "PUT",
      }),
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `${USER_URL}/${userId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileQuery,
  useUpdateProfileQuery,
  useGetUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApiSlice;
