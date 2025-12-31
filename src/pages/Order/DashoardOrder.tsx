import { useGetSingleOrderQuery } from "../../redux/api/orderApi/orderApi";
import ManageTable from "../Dashboard/ManageOrder/ManageTable";

const ManageOrder = () => {
  const { data, isLoading } = useGetSingleOrderQuery(undefined);
  const handleDelete = () => {
    console.log(handleDelete);
  };

  const columns = [
    { label: "Order ID", value: "_id" },
    { label: "User Email", value: "email" },
    { label: "Phone", value: "phone" },
    { label: "Price", value: "totalPrice" },
    { label: "Status", value: "status" },
    { label: "OrderDate", value: "createdAt" },
    { label: "Transaction ID", value: "transaction.id" },
  ];

  return (
    <div className=" m-6">
      <ManageTable
        data={data?.data}
        isvalue={"order"}
        columns={columns}
        loading={isLoading}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ManageOrder;
