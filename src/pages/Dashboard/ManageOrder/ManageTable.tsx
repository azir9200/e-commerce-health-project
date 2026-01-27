/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import TableSkeleton from "../../../AllSkeleton/DashbordTableSkeleton";
import { Link } from "react-router-dom";
import { useUpdateRoleUserMutation } from "../../../redux/api/authApi/authApi";
import { motion, AnimatePresence } from "framer-motion";
import { Edit2, Trash2, Search } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface Column {
  label: string;
  value: string;
}

interface DataItem {
  _id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface ManageTableProps {
  data: DataItem[];
  loading: boolean;
  columns: Column[];
  isvalue: string;
  onDelete: (id: string) => void;
}

const ManageTable: React.FC<ManageTableProps> = ({
  data,
  loading,
  columns,
  onDelete,
  isvalue,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  // Filtered data based on search
  const filteredData = data?.filter((item) =>
    columns.some((column) =>
      column.value
        .split(".")

        .reduce((o: any, k: string) => (o?.[k] ? o[k] : ""), item)
        ?.toString()
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()),
    ),
  );

  // Pagination Logic
  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
  const paginatedData = filteredData?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const [UpdateRoleUser] = useUpdateRoleUserMutation();
  const UpdateRole = async (id: string) => {
    await UpdateRoleUser(id);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handleDelete = (id: string) => {
    setDeletingId(id);
    setTimeout(() => {
      onDelete(id);
      setDeletingId(null);
    }, 300);
  };

  if (loading) {
    return <TableSkeleton />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white border rounded-lg shadow-sm overflow-hidden"
    >
      {/* Search and Header Controls */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 border-b bg-gradient-to-r from-gray-50 to-gray-100"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, category, brand..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <Link to="/dashboard/createProduct" className="flex-1 md:flex-none">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                + Create Product
              </motion.button>
            </Link>
            <div className="px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600">
                Total:{" "}
                <span className="font-bold text-blue-600">
                  {filteredData?.length || 0}
                </span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Table Section */}
      {filteredData?.length > 0 ? (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-100 hover:bg-gray-100">
                {columns?.map((column, idx) => (
                  <TableHead key={idx} className="text-gray-700 font-semibold">
                    {column.label}
                  </TableHead>
                ))}
                {isvalue != "userOrder" && (
                  <TableHead className="text-gray-700 font-semibold text-center">
                    Actions
                  </TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence mode="popLayout">
                {paginatedData?.map((item) => (
                  <motion.tr
                    key={item._id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className={`border-b hover:bg-blue-50 transition ${
                      deletingId === item._id ? "opacity-50" : ""
                    }`}
                  >
                    {columns?.map((column, idx) => (
                      <TableCell key={idx} className="text-gray-700">
                        <span className="font-medium">
                          {column.value
                            .split(".")
                            .reduce(
                              (o: any, k: string) => (o?.[k] ? o[k] : ""),
                              item,
                            )}
                        </span>
                      </TableCell>
                    ))}
                    {isvalue != "userOrder" && (
                      <TableCell className="text-center">
                        <div className="flex gap-2 justify-center">
                          {isvalue == "product" && (
                            <Link to={`/dashboard/updateProduct/${item._id}`}>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-3 py-1.5 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition font-medium"
                              >
                                <Edit2 className="w-4 h-4" />
                                Edit
                              </motion.button>
                            </Link>
                          )}
                          {isvalue == "user" && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => UpdateRole(item._id)}
                              className="px-3 py-1.5 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition font-medium"
                            >
                              Update Role
                            </motion.button>
                          )}
                          {/* //delete button */}

                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                              navigate(
                                `/dashboard/delete/${isvalue}/${item._id}`,
                              )
                            }
                            className="flex items-center gap-2 px-3 py-1.5 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition font-medium"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </motion.button>

                          {/* //delete button  end*/}

                          {isvalue != "userOrder" && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => {
                                const toastId = toast(
                                  <div className="flex gap-2">
                                    <span>Delete this {isvalue}?</span>
                                    <button
                                      onClick={() => {
                                        handleDelete(item._id);
                                        toast.dismiss(toastId);
                                      }}
                                      className="px-3 py-1 bg-red-500 text-white rounded text-sm font-bold hover:bg-red-600"
                                    >
                                      Confirm
                                    </button>
                                    <button
                                      onClick={() => toast.dismiss(toastId)}
                                      className="px-3 py-1 bg-gray-400 text-white rounded text-sm font-bold hover:bg-gray-500"
                                    >
                                      Cancel
                                    </button>
                                  </div>,
                                  { duration: 5000 },
                                );
                              }}
                              disabled={deletingId === item._id}
                              className="flex items-center gap-2 px-3 py-1.5 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition font-medium disabled:opacity-50"
                            >
                              <Trash2 className="w-4 h-4" />
                              Delete
                            </motion.button>
                          )}
                        </div>
                      </TableCell>
                    )}
                  </motion.tr>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-8 text-center"
        >
          <p className="text-gray-500 text-lg">No Data Available</p>
        </motion.div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end items-center gap-2 p-6 border-t bg-gray-50"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-100 transition font-medium"
          >
            Previous
          </motion.button>
          <span className="px-4 py-2 bg-blue-50 rounded-lg border border-blue-200 font-semibold text-blue-600">
            Page {currentPage} of {totalPages}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-100 transition font-medium"
          >
            Next
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ManageTable;
