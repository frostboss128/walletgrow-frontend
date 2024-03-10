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
  }),
});

export const { useGetWalletInfoQuery, useOutWalletMutation } = walletApiSlice;
