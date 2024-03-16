import { WALLET_URL } from "../services/constants";
import { apiSlice } from "./apiSlice";

export const walletApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getWalletInfo: builder.query({
      query: () => ({
        url: WALLET_URL,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
    outWallet: builder.mutation({
      query: data => ({
        url: `${WALLET_URL}/out`,
        method: "POST",
        body: data,
      }),
    }),
    withdrawWallet: builder.mutation({
      query: data => ({
        url: `${WALLET_URL}/withdraw`,
        method: "POST",
        body: data,
      }),
    }),
    getWithdraws: builder.query({
      query: () => ({
        url: `${WALLET_URL}/withdraw`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
    getAllWithdraws: builder.query({
      query: () => ({
        url: `${WALLET_URL}/withdraws`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
    getWithdraw: builder.query({
      query: withdrawId => ({
        url: `${WALLET_URL}/${withdrawId}`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
    updateWithdraw: builder.mutation({
      query: ({ withdrawId, data }) => ({
        url: `${WALLET_URL}/${withdrawId}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteWithdraw: builder.mutation({
      query: withdrawId => ({
        url: `${WALLET_URL}/${withdrawId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetWalletInfoQuery,
  useOutWalletMutation,
  useWithdrawWalletMutation,
  useGetWithdrawsQuery,
  useGetAllWithdrawsQuery,
  useGetWithdrawQuery,
  useUpdateWithdrawMutation,
  useDeleteWithdrawMutation,
} = walletApiSlice;
