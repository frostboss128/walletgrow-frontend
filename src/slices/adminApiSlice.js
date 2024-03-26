import { INVESTMENT_URL } from "../services/constants";
import { apiSlice } from "./apiSlice";

export const configApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createInvestmentType: builder.mutation({
      query: data => ({
        url: INVESTMENT_URL,
        method: "POST",
        body: data
      }),
      providesTags: ["Investment"]
    }),
    getAllInvestmentType: builder.query({
      query: () => ({
        url: INVESTMENT_URL,
        method: "GET"
      }),
      providesTags: ["Investment"],
      keepUnusedDataFor: 5
    }),
    getInvestmentType: builder.query({
      query: typeId => ({
        url: `${INVESTMENT_URL}/${typeId}`,
        method: "GET"
      }),
      providesTags: ["Investment"],
      keepUnusedDataFor: 5
    }),
    updateInvestmentType: builder.mutation({
      query: ({ typeId, data }) => ({
        url: `${INVESTMENT_URL}/${typeId}`,
        method: "PUT",
        body: data
      }),
      providesTags: ["Investment"]
    }),
    deleteInvestmentType: builder.mutation({
      query: typeId => ({
        url: `${INVESTMENT_URL}/${typeId}`,
        method: "DELETE"
      }),
      providesTags: ["Investment"]
    }),
    startInvestment: builder.mutation({
      query: ({ typeId, data }) => ({
        url: `${INVESTMENT_URL}/${typeId}`,
        method: "POST",
        body: data
      }),
      providesTags: ["Investment"]
    }),
    getInvestments: builder.query({
      query: () => ({
        url: `${INVESTMENT_URL}/user`,
        method: "GET"
      }),
      providesTags: ["Investment"],
      keepUnusedDataFor: 5
    }),
    getInvestment: builder.query({
      query: typeId => ({
        url: `${INVESTMENT_URL}/user/${typeId}`,
        method: "GET"
      }),
      providesTags: ["Investment"],
      keepUnusedDataFor: 5
    }),
    getInvestmentRecord: builder.query({
      query: () => ({
        url: `${INVESTMENT_URL}/record`,
        method: "GET"
      }),
      providesTags: ["Investment"],
      keepUnusedDataFor: 5
    }),
    getInvestmentHistoryByType: builder.query({
      query: investTypeId => ({
        url: `${INVESTMENT_URL}/invhis/${investTypeId}`,
        method: "GET"
      }),
      providesTags: ["Investment"],
      keepUnusedDataFor: 5
    }),
    reinvest: builder.mutation({
      query: data => ({
        url: `${INVESTMENT_URL}/reinvest`,
        method: "PUT",
        body: data
      }),
      providesTags: ["Investment"]
    })
  })
});

export const {
  useCreateInvestmentTypeMutation,
  useGetAllInvestmentTypeQuery,
  useGetInvestmentTypeQuery,
  useUpdateInvestmentTypeMutation,
  useDeleteInvestmentTypeMutation,
  useStartInvestmentMutation,
  useGetInvestmentsQuery,
  useGetInvestmentQuery,
  useGetInvestmentRecordQuery,
  useGetInvestmentHistoryByTypeQuery,
  useReinvestMutation
} = configApiSlice;
