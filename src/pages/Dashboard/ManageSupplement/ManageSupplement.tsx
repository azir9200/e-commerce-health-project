import { useEffect } from "react";
import { toast } from "sonner";
import { useDeleteProductMutation } from "../../../redux/api/productApi/ProductApi";
import SupplementTable from "./supplementTable";
import { useDeleteSupplementMutation, useGetAllSupplementQuery } from "../../../redux/api/supplementApi/SupplementApi";

const ManageSupplement = () => {
  const { data, isLoading } = useGetAllSupplementQuery({});
  console.log("use SUP", data);
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
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit id tempora
        vero recusandae. Velit, qui? Beatae ut perferendis voluptate et, dolorum
        est vitae libero, minima omnis voluptatem a reprehenderit praesentium?
      </p>
      <SupplementTable
        isvalue={"product"}
        data={data?.data}
        columns={columns}
        loading={isLoading}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ManageSupplement;
