import { useNavigate } from "react-router-dom";
import { useAddProductMutation } from "../../../redux/api/productApi/ProductApi";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import toast from "react-hot-toast";
import {
  setDescription,
  setName,
  setPrice,
  setRatings,
} from "../../../redux/features/ProductSlice";

const AddProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { name, description, price, image, ratings } = useAppSelector(
    (state) => state.product
  );
  const [product] = useAddProductMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await product({ name, description, price, image, ratings });
    
      toast.success("You are logged in successfully!");
      navigate("/products");
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("An error occurred while logging in.");
    }
  };

  return (
    <div className="container mx-auto p-16">
      <div className="container mx-auto p-8  bg-slate-600 ">
        <h1 className="text-2xl text-stone-100 font-bold text-center mb-4">
          Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Product Name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
            required
            className="border p-2 w-full bg-slate-200 rounded-md "
          />
          <textarea
            placeholder="Product Description"
            value={name}
            onChange={(e) => dispatch(setDescription(e.target.value))}
            required
            className="border p-2 w-full bg-slate-200 rounded-md "
          />
          <input
            placeholder=" Price Price"
            type="text"
            value={name}
            onChange={(e) => dispatch(setPrice(e.target.value))}
            required
            className="border p-2 w-full bg-slate-200 rounded-md "
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="border p-2 w-full bg-slate-200 rounded-md "
          />

          <input
            placeholder=" Ratings"
            type="text"
            value={ratings}
            onChange={(e) => dispatch(setRatings(e.target.value))}
            required
            className="border p-2 w-full bg-slate-200 rounded-md "
          />
          <button
            type="submit"
            className="bg-slate-900 rounded-md text- text-stone-50 p-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
