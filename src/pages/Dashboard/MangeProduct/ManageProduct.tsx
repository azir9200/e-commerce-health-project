import { useEffect } from "react";
import ManageTable from "../ManageOrder/ManageTable";
import { toast } from "sonner";
import {
  useDeleteProductMutation,
  useGetAllProductQuery,
} from "../../../redux/api/productApi/ProductApi";
import { motion } from "framer-motion";
import { RefreshCw, Package } from "lucide-react";

const ManageProduct = () => {
  const { data, isLoading, refetch } = useGetAllProductQuery({});

  const [
    deleteProduct,
    { isLoading: deletedLoading, isSuccess, data: deletedData, isError, error },
  ] = useDeleteProductMutation();

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
  };

  const handleRefresh = () => {
    refetch();
    toast.success("Products refreshed!");
  };

  const toastId = "deletedProduct";
  useEffect(() => {
    if (deletedLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      toast.success(deletedData?.message || "Product deleted successfully!", {
        id: toastId,
      });
      refetch(); // Refresh the list after deletion
    }

    if (isError) {
      toast.error(
        typeof error === "string"
          ? error
          : JSON.stringify(error || "Error deleting product"),
        { id: toastId },
      );
    }
  }, [
    deletedData?.data,
    deletedData?.message,
    error,
    isError,
    deletedLoading,
    isSuccess,
    refetch,
  ]);

  // Handle Update
  const columns = [
    { label: "Name", value: "name" },
    { label: "Brand", value: "brand" },
    { label: "Model", value: "model" },
    { label: "Category", value: "category" },
    { label: "Price", value: "price" },
    { label: "Quantity", value: "quantity" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="m-6"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="p-3 bg-blue-100 rounded-lg">
            <Package className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Manage Products
            </h1>
            <p className="text-gray-600">
              Total Products: {data?.data?.length || 0}
            </p>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRefresh}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          <RefreshCw className={`w-5 h-5 ${isLoading ? "animate-spin" : ""}`} />
          {isLoading ? "Loading..." : "Refresh"}
        </motion.button>
      </div>

      {/* Table Section */}
      <ManageTable
        isvalue={"product"}
        data={data?.data || []}
        columns={columns}
        loading={isLoading}
        onDelete={handleDelete}
      />
    </motion.div>
  );
};

export default ManageProduct;
