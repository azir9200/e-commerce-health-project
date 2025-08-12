import { useParams } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import { useGetProductDetailsQuery } from "../../../redux/api/productApi/ProductApi";

const UpdateProduct = () => {
  const { id } = useParams();
  const { data } = useGetProductDetailsQuery(id);
  return (
    <div>
      <CreateProduct initialData={data?.data} />
    </div>
  );
};

export default UpdateProduct;
