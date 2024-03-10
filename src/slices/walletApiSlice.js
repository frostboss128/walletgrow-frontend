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
  }),
});

export const { useGetWalletInfoQuery } = walletApiSlice;
