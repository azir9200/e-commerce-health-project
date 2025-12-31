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

interface ManageTableProps<T extends { id?: string; _id?: string }> {
  data: T[];
  columns: { label: string; value: keyof T | string }[];
  loading?: boolean;
  isvalue?: string;
  onDelete?: (id: string) => void;
}

function SupplementTable<T extends { id?: string; _id?: string }>({
  data,
  loading,
  columns,
  onDelete,
  isvalue,
}: ManageTableProps<T>) {
  const getId = (item: T) => item._id ?? item.id ?? "";

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredData = data?.filter((item) =>
    columns.some((column) =>
      column.value
        .toString()
        .split(".")
        .reduce((o: any, k: string) => o?.[k], item)
        ?.toString()
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [updateRoleUser] = useUpdateRoleUserMutation();

  const updateRole = async (id: string) => {
    await updateRoleUser(id);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  if (loading) return <TableSkeleton />;

  return (
    <div className="bg-white border rounded-md p-4">
      {/* Search */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-2 border rounded-md w-1/3"
        />

        <Link to="/dashboard/createSupplement">
          <span className="text-gray-600 font-semibold">Create Supplement</span>
        </Link>

        <p className="text-gray-600 font-semibold">
          Total Data: {filteredData.length}
        </p>
      </div>

      {filteredData.length ? (
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              {columns.map((column, idx) => (
                <TableHead key={idx}>{column.label}</TableHead>
              ))}
              {isvalue !== "userOrder" && <TableHead>Actions</TableHead>}
            </TableRow>
          </TableHeader>

          <TableBody>
            {paginatedData.map((item, index) => {
              const id = getId(item);

              return (
                <TableRow key={id || index}>
                  {columns.map((column, idx) => (
                    <TableCell key={idx}>
                      {column.value
                        .toString()
                        .split(".")
                        .reduce((o: any, k: string) => o?.[k], item)}
                    </TableCell>
                  ))}

                  {isvalue !== "userOrder" && (
                    <TableCell className="flex gap-2">
                      {isvalue === "product" && (
                        <Link to={`/dashboard/updateProduct/${id}`}>
                          <button className="btn-blue">Update</button>
                        </Link>
                      )}

                      {isvalue === "user" && (
                        <button
                          onClick={() => updateRole(id)}
                          className="btn-blue"
                        >
                          Update Role
                        </button>
                      )}

                      <button
                        onClick={() => onDelete?.(id)}
                        className="btn-red"
                      >
                        Delete
                      </button>
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <p className="text-center p-4">No Data Available</p>
      )}

      {totalPages > 1 && (
        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default SupplementTable;
