import ManageTable from "../ManageOrder/ManageTable";
import {
  useGetAllProductQuery,
} from "../../../redux/api/productApi/ProductApi";
import { motion } from "framer-motion";
import { RefreshCw, Package } from "lucide-react";

const ManageProduct = () => {
  const { data, isLoading, refetch } = useGetAllProductQuery({});

  const columns = [
    { label: "Name", value: "name" },
    { label: "Brand", value: "brand" },
    { label: "Model", value: "model" },
    { label: "Category", value: "category" },
    { label: "Price", value: "price" },
    { label: "Quantity", value: "quantity" },
  ];

  return (
    <motion.div className="m-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Package className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Manage Products</h1>
            <p>Total Products: {data?.data?.length || 0}</p>
          </div>
        </div>

        <button
          onClick={refetch}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          <RefreshCw className="w-5 h-5" />
          Refresh
        </button>
      </div>

      <ManageTable
        isvalue="product"
        data={data?.data || []}
        columns={columns}
        loading={isLoading}
      />
    </motion.div>
  );
};

export default ManageProduct;
