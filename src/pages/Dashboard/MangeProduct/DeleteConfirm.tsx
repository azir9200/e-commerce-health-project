/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  useDeleteProductMutation,
  useGetProductDetailsQuery,
} from "../../../redux/api/productApi/ProductApi";

const DeleteConfirm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // 🟢 fetch product info
  const { data, isLoading: productLoading } = useGetProductDetailsQuery(id!, {
    skip: !id,
  });
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const handleConfirm = async () => {
    if (!id) return;

    try {
      await deleteProduct(id).unwrap();
      toast.success("Product deleted successfully");
      navigate(-1);
    } catch (err: any) {
      toast.error(err?.data?.message || "Delete failed");
    }
  };
  if (productLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading product info...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Delete product?</h2>

        {/* 🔥 Product Info */}
        <div className="mb-6 border rounded-lg p-4 bg-gray-50">
          <p className="text-lg font-semibold">{data?.data?.name}</p>
          <p className="text-gray-600">Price: ${data?.data?.price}</p>
        </div>

        <p className="mb-6 text-gray-700">
          This action <strong>cannot be undone</strong>.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 bg-gray-300 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            disabled={isLoading}
            className="px-5 py-2 bg-red-600 text-white rounded"
          >
            {isLoading ? "Deleting..." : "Yes, Delete"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DeleteConfirm;
