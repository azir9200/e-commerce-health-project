import { useEffect } from "react";
import ManageTable from "../ManageOrder/ManageTable";
import { toast } from "sonner";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "../../../redux/api/authApi/authApi";

const ManageUser = () => {
  const { data, isLoading, refetch } = useGetAllUserQuery(undefined);
  console.log("manage data", data);
  const [
    deleteUser,
    { isLoading: deletedLoading, isSuccess, data: deletedData, isError, error },
  ] = useDeleteUserMutation();
  const handleDelete = async (id: string) => {
    await deleteUser(id);
  };
  // const handleRefresh = () => {
  //   refetch();
  //   toast.success("Users refreshed!");
  // };
  const toastId = "deleteduser";
  useEffect(() => {
    if (deletedLoading) toast.loading("Processing ...", { id: toastId });

    if (isSuccess) {
      toast.success(deletedData?.message || "User deleted successfully!", {
        id: toastId,
      });
      refetch();
    }
    if (isError) {
      toast.error(
        typeof error === "string"
          ? error
          : JSON.stringify(error || "Error deleting user"),
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
  ]);
  const columns = [
    { label: "Name", value: "name" },
    { label: "Email", value: "email" },
    { label: "Role", value: "role" },
  ];
  return (
    <div className="m-6">
      <ManageTable
        data={data?.data}
        columns={columns}
        isvalue={"user"}
        loading={isLoading}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ManageUser;
