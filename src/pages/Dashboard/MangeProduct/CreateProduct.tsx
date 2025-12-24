/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/ui/button";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Card, CardContent } from "../../../components/ui/card";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from "../../../redux/api/productApi/ProductApi";

interface ProductFormProps {
  initialData?: any;
  onSubmit?: (data: any) => void;
}

const CreateProduct: React.FC<ProductFormProps> = ({ initialData }) => {
  const navigate = useNavigate();

  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues: initialData || {
      name: "",
      description: "",
      price: "",
      category: "",
      stock: "",
      image: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      setValue("name", initialData.name);
      setValue("description", initialData.description);
      setValue("price", initialData.price);
      setValue("category", initialData.category);
      setValue("stock", initialData.stock);
      setValue("image", initialData.image);
    }
  }, [initialData, setValue]);

  const [createProduct, { isLoading }] = useAddProductMutation();
  const [updateProduct, { isLoading: updateLoading }] =
    useUpdateProductMutation();

  const onSubmit = async (data: any) => {
    const toastId = "createProduct";
    toast.loading("Processing ...", { id: toastId });

    const payload = {
      name: data.name,
      description: data.description,
      price: Number(data.price),
      category: data.category,
      stock: Number(data.stock),
      image: data.image,
    };

    try {
      if (initialData?._id) {
        const response = await updateProduct({
          id: initialData._id,
          updatedData: payload,
        }).unwrap();
        toast.success(response.message || "Product updated successfully!", {
          id: toastId,
        });
        navigate("/dashboard/manageProduct");
      } else {
        const response = await createProduct(payload).unwrap();
        toast.success(response.message || "Product added successfully!", {
          id: toastId,
        });
      }
      reset();
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to submit product.", {
        id: toastId,
      });
    }
  };

  return (
    <div className="m-6">
      <Card className="md:p-4 px-0 py-4">
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:grid grid-cols-2 gap-4 md:space-y-0 space-y-3"
          >
            <div>
              <Label>Product Name</Label>
              <Input
                placeholder="Enter product name"
                {...register("name", { required: "Enter product name" })}
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                placeholder="Enter description"
                {...register("description", { required: "Enter description" })}
              />
            </div>
            <div>
              <Label>Price</Label>
              <Input
                type="number"
                placeholder="Enter price"
                {...register("price", { required: "Enter price" })}
              />
            </div>
            <div>
              <Label>Category</Label>
              <Input
                placeholder="Enter category"
                {...register("category", { required: "Enter category" })}
              />
            </div>
            <div>
              <Label>Stock Quantity</Label>
              <Input
                type="number"
                placeholder="Enter stock quantity"
                {...register("stock", { required: "Enter stock quantity" })}
              />
            </div>
            <div>
              <Label>Image URL</Label>
              <Input
                placeholder="Enter image URL"
                {...register("image", { required: "Enter image URL" })}
              />
            </div>
            <div className="col-span-2">
              <Button
                type="submit"
                className="w-full bg-blue-600 cursor-pointer"
                disabled={isLoading || updateLoading}
              >
                {isLoading || updateLoading
                  ? "Processing..."
                  : initialData
                  ? "Update Product"
                  : "Add Product"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateProduct;
