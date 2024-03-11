import { WALLET_URL } from "../services/constants";
import { apiSlice } from "./apiSlice";

export const walletApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWalletInfo: builder.query({
      query: () => ({
        url: WALLET_URL,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
    outWallet: builder.mutation({
      query: (data) => ({
        url: `${WALLET_URL}/out`,
        method: "POST",
        body: data,
      }),
    }),
    withdrawWallet: builder.mutation({
      query: (data) => ({
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
  }),
});

export const { useGetWalletInfoQuery, useOutWalletMutation, useWithdrawWalletMutation, useGetWithdrawsQuery } =
  walletApiSlice;
