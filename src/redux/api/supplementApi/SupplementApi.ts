import { ISupplement } from "../../../pages/Supplements/type.supplemrnt";
import { baseApi } from "../baseApi/baseApi";
type SupplementResponse = {
  data: ISupplement[];
};

const supplementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all Supplement
    getAllSupplement: builder.query<SupplementResponse, void>({
      query: () => ({
        url: "api/supplement",
        method: "GET",
      }),
    }),
    // Fetch a single Supplement by ID
    getSupplementDetails: builder.query({
      query: (id: string) => ({
        url: `api/supplement/${id}`,
        method: "GET",
      }),
    }),
    // Add a new Supplement
    addSupplement: builder.mutation({
      query: (newProduct) => ({
        url: "api/supplement/create",
        method: "POST",
        body: newProduct,
      }),
    }),

    // Update an existing Supplement
    updateSupplement: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `api/supplement/update/${id}`,
        method: "PUT",
        body: updates,
      }),
    }),

    // Delete a product by ID (optional, but useful)
    deleteSupplement: builder.mutation({
      query: (id: string) => ({
        url: `api/supplement/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllSupplementQuery,
  useGetSupplementDetailsQuery,
  useAddSupplementMutation,
  useUpdateSupplementMutation,
  useDeleteSupplementMutation,
} = supplementApi;
