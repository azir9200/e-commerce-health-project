import { useEffect,  } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  useGetSingleUserQuery,
  useUpdateRoleUserMutation,
} from "../../../redux/api/authApi/authApi";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

const UpdateUserRole = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: user, isLoading, error } = useGetSingleUserQuery(id!);
  const [
    updateRole,
    {
      isLoading: updating,
      isSuccess,
      data: updateData,
      isError,
      error: updateError,
    },
  ] = useUpdateRoleUserMutation();

  const handleUpdateRole = async () => {
    if (id) {
      await updateRole(id);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(updateData?.message || "Role updated successfully");
      navigate("/dashboard/user");
    }
    if (isError) {
      toast.error(JSON.stringify(updateError));
    }
  }, [isSuccess, isError, updateData, updateError, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading user</div>;
  }

  const currentRole = user?.data?.role;
  const newRole = currentRole === "admin" ? "user" : "admin";

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Update User Role</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <p className="mt-1 text-sm text-gray-900">{user?.data?.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <p className="mt-1 text-sm text-gray-900">{user?.data?.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Current Role
              </label>
              <p className="mt-1 text-sm text-gray-900">{currentRole}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Clicking the button will change the role to:{" "}
                <strong>{newRole}</strong>
              </p>
            </div>
            <div className="flex gap-4">
              <Button onClick={handleUpdateRole} disabled={updating}>
                {updating ? "Updating..." : "Confirm Update Role"}
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/dashboard/user")}
              >
                Cancel
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateUserRole;
