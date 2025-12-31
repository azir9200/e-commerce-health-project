import { useEffect } from "react";
import { toast } from "sonner";
import SupplementTable from "./supplementTable";
import {
  useDeleteSupplementMutation,
  useGetAllSupplementQuery,
} from "../../../redux/api/supplementApi/SupplementApi";

const ManageSupplement = () => {
  const { data, isLoading } = useGetAllSupplementQuery();
  
  const [
    deleteSupplement,
    { isLoading: deletedLoading, isSuccess, data: deletedData, isError, error },
  ] = useDeleteSupplementMutation();
  const handleDelete = async (id: string) => {
    await deleteSupplement(id);
  };
  const toastId = "deletedSupplement";
  useEffect(() => {
    if (deletedLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      toast.success(deletedData?.message, { id: toastId });
    }

    if (isError) toast.error(JSON.stringify(error), { id: toastId });
  }, [
    deletedData?.data,
    deletedData?.message,
    error,
    isError,
    deletedLoading,
    isSuccess,
  ]);

  // Handle Update
  const columns = [
    { label: "Name", value: "name" },
    { label: "description", value: "description" },
    { label: "brand", value: "brand" },
    { label: "flavor", value: "flavor" },
    { label: "Price", value: "price" },
    { label: "Stock", value: "stock" },
  ];
  return (
    <div className=" m-6">
    
      <SupplementTable
        isvalue={"product"}
        data={data?.data ?? []}
        columns={columns}
        loading={isLoading}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ManageSupplement;
