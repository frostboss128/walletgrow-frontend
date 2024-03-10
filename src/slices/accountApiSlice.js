import { ACCOUNT_URL } from "../services/constants";
import { apiSlice } from "./apiSlice";

export const accountApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    rechargeToAccount: builder.mutation({
      query: (data) => ({
        url: ACCOUNT_URL,
        method: "POST",
        body: data,
      }),
      providesTags: ["Account"],
    }),

    getRechargeRecord: builder.query({
      query: () => ({
        url: `${ACCOUNT_URL}`,
        method: "GET",
      }),
      providesTags: ["Account"],
      keepUnusedDataFor: 5,
    }),

    getAll: builder.query({
      query: () => ({
        url: ACCOUNT_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["List"],
    }),
    getDetail: builder.query({
      query: (listId) => ({
        url: `${ACCOUNT_URL}/${listId}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["List"],
    }),
    updateList: builder.mutation({
      query: ({ listId, status }) => ({
        url: `${ACCOUNT_URL}/${listId}`,
        method: "PUT",
        body: { status },
      }),
      providesTags: ["List"],
    }),
    deleteList: builder.mutation({
      query: (listId) => ({
        url: `${ACCOUNT_URL}/${listId}`,
        method: "DELETE",
      }),
      providesTags: ["List"],
    }),
    addProduct: builder.mutation({
      query: ({ listId, data }) => ({
        url: `${ACCOUNT_URL}/${listId}`,
        method: "POST",
        body: data,
      }),
      providesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: ({ listId, productId, status }) => ({
        url: `${ACCOUNT_URL}/${listId}`,
        method: "PUT",
        body: { status },
        params: { productId },
      }),
      providesTags: ["Products"],
    }),
    removeProduct: builder.mutation({
      query: ({ listId, productId }) => ({
        url: `${ACCOUNT_URL}/${listId}`,
        method: "DELETE",
        params: { productId },
      }),
      providesTags: ["Product"],
    }),
    addMember: builder.mutation({
      query: ({ listId, userId }) => ({
        url: `${ACCOUNT_URL}/${listId}`,
        method: "POST",
        params: { userId },
      }),
      providesTags: ["Member"],
    }),
    removeMember: builder.mutation({
      query: ({ listId, userId }) => ({
        url: `${ACCOUNT_URL}/${listId}`,
        method: "DELETE",
        params: { userId },
      }),
      providesTags: ["Member"],
    }),
  }),
});

export const { useRechargeToAccountMutation, useGetRechargeRecordQuery } = accountApiSlice;
