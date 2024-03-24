import { CONFIG_URL } from "../services/constants";
import { apiSlice } from "./apiSlice";

export const configApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    createInvestmentType: builder.mutation({
      query: data => ({
        url: CONFIG_URL,
        method: "POST",
        body: data,
      }),
      providesTags: ["Config"],
    }),
    getAllInvestmentType: builder.query({
      query: () => ({
        url: CONFIG_URL,
        method: "GET",
      }),
      providesTags: ["Config"],
      keepUnusedDataFor: 5,
    }),
    getInvestmentType: builder.query({
      query: typeId => ({
        url: `${CONFIG_URL}/${typeId}`,
        method: "GET",
      }),
      providesTags: ["Config"],
      keepUnusedDataFor: 5,
    }),
    updateInvestmentType: builder.mutation({
      query: ({ typeId, data }) => ({
        url: `${CONFIG_URL}/${typeId}`,
        method: "PUT",
        body: data,
      }),
      providesTags: ["Config"],
    }),
    deleteInvestmentType: builder.mutation({
      query: typeId => ({
        url: `${CONFIG_URL}/${typeId}`,
        method: "DELETE",
      }),
      providesTags: ["Config"],
    }),
    startInvestment: builder.mutation({
      query: ({ typeId, data }) => ({
        url: `${CONFIG_URL}/${typeId}`,
        method: "POST",
        body: data,
      }),
      providesTags: ["Config"],
    }),
    getInvestments: builder.query({
      query: () => ({
        url: `${CONFIG_URL}/user`,
        method: "GET",
      }),
      providesTags: ["Config"],
      keepUnusedDataFor: 5,
    }),
    getInvestment: builder.query({
      query: typeId => ({
        url: `${CONFIG_URL}/user/${typeId}`,
        method: "GET",
      }),
      providesTags: ["Config"],
      keepUnusedDataFor: 5,
    }),
    getInvestmentRecord: builder.query({
      query: () => ({
        url: `${CONFIG_URL}/record`,
        method: "GET",
      }),
      providesTags: ["Config"],
      keepUnusedDataFor: 5,
    }),
  }),
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
} = configApiSlice;
