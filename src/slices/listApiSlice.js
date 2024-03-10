import { PRODUCT_URL, MEMBER_URL, LIST_URL } from "../services/constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => ({
        url: LIST_URL,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["List"],
    }),
    getDetail: builder.query({
      query: (listId) => ({
        url: `${LIST_URL}/${listId}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["List"],
    }),
    createList: builder.mutation({
      query: (data) => ({
        url: LIST_URL,
        method: "POST",
        body: data,
      }),
      providesTags: ["List"],
    }),
    updateList: builder.mutation({
      query: ({ listId, status }) => ({
        url: `${LIST_URL}/${listId}`,
        method: "PUT",
        body: { status },
      }),
      providesTags: ["List"],
    }),
    deleteList: builder.mutation({
      query: (listId) => ({
        url: `${LIST_URL}/${listId}`,
        method: "DELETE",
      }),
      providesTags: ["List"],
    }),
    addProduct: builder.mutation({
      query: ({ listId, data }) => ({
        url: `${PRODUCT_URL}/${listId}`,
        method: "POST",
        body: data,
      }),
      providesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: ({ listId, productId, status }) => ({
        url: `${PRODUCT_URL}/${listId}`,
        method: "PUT",
        body: { status },
        params: { productId },
      }),
      providesTags: ["Products"],
    }),
    removeProduct: builder.mutation({
      query: ({ listId, productId }) => ({
        url: `${PRODUCT_URL}/${listId}`,
        method: "DELETE",
        params: { productId },
      }),
      providesTags: ["Product"],
    }),
    addMember: builder.mutation({
      query: ({ listId, userId }) => ({
        url: `${MEMBER_URL}/${listId}`,
        method: "POST",
        params: { userId },
      }),
      providesTags: ["Member"],
    }),
    removeMember: builder.mutation({
      query: ({ listId, userId }) => ({
        url: `${MEMBER_URL}/${listId}`,
        method: "DELETE",
        params: { userId },
      }),
      providesTags: ["Member"],
    }),
  }),
});

export const {} = productsApiSlice;
