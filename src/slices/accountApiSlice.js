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
    inWallet: builder.mutation({
      query: (data) => ({
        url: `${ACCOUNT_URL}/in`,
        method: "POST",
        body: data,
      }),
      providesTags: ["Account"],
    }),
    getAllRecharges: builder.query({
      query: (query) => ({
        url: `${ACCOUNT_URL}/recharges`,
        method: "GET",
        params: query,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Account"],
    }),
    getRecharge: builder.query({
      query: (rechargeId) => ({
        url: `${ACCOUNT_URL}/${rechargeId}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Account"],
    }),
    updateRecharge: builder.mutation({
      query: ({ rechargeId, data }) => ({
        url: `${ACCOUNT_URL}/${rechargeId}`,
        method: "PUT",
        body: data,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Account"],
    }),
    deleteRecharge: builder.mutation({
      query: (rechargeId) => ({
        url: `${ACCOUNT_URL}/${rechargeId}`,
        method: "DELETE",
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Account"],
    }),
  }),
});

export const {
  useRechargeToAccountMutation,
  useGetRechargeRecordQuery,
  useInWalletMutation,
  useGetAllRechargesQuery,
  useGetRechargeQuery,
  useUpdateRechargeMutation,
  useDeleteRechargeMutation,
} = accountApiSlice;
