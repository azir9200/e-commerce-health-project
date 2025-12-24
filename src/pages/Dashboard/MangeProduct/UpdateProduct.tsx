import { useParams } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import { useGetProductDetailsQuery } from "../../../redux/api/productApi/ProductApi";

const UpdateProduct = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetProductDetailsQuery(id ?? "", { skip: !id });
  return (
    <div>
      <CreateProduct initialData={data?.data} />
    </div>
  );
};

export default UpdateProduct;
