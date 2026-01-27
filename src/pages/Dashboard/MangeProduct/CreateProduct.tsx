/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from "../../../redux/api/productApi/ProductApi";
import { motion } from "framer-motion";
import { Package, ArrowLeft } from "lucide-react";

interface ProductFormProps {
  initialData?: any;
  onSubmit?: (data: any) => void;
}

const CreateProduct: React.FC<ProductFormProps> = ({ initialData }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
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
      setValue("stock", initialData.stock || initialData.quantity);
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
          ...payload,
        }).unwrap();
        toast.success(response.message || "Product updated successfully!", {
          id: toastId,
        });
        setTimeout(() => {
          navigate("/dashboard/manageProduct");
        }, 500);
      } else {
        const response = await createProduct(payload).unwrap();
        toast.success(response.message || "Product added successfully!", {
          id: toastId,
        });
        reset();
        setTimeout(() => {
          navigate("/dashboard/manageProduct");
        }, 500);
      }
    } catch (error: any) {
      toast.error(
        error?.data?.message || error?.message || "Failed to submit product.",
        { id: toastId }
      );
    }
  };

  const formFields = [
    {
      name: "name",
      label: "Product Name",
      placeholder: "Enter product name",
      type: "text",
      validation: { required: "Product name is required" },
    },
    {
      name: "category",
      label: "Category",
      placeholder: "Enter category (e.g., Dumbbell, Barbell)",
      type: "text",
      validation: { required: "Category is required" },
    },
    {
      name: "price",
      label: "Price",
      placeholder: "Enter price",
      type: "number",
      validation: {
        required: "Price is required",
        min: { value: 0, message: "Price must be positive" },
      },
    },
    {
      name: "stock",
      label: "Stock Quantity",
      placeholder: "Enter stock quantity",
      type: "number",
      validation: {
        required: "Stock quantity is required",
        min: { value: 0, message: "Stock must be positive" },
      },
    },
    {
      name: "description",
      label: "Description",
      placeholder: "Enter detailed description",
      type: "text",
      validation: { required: "Description is required" },
    },
    {
      name: "image",
      label: "Image URL",
      placeholder: "Enter product image URL",
      type: "text",
      validation: { required: "Image URL is required" },
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="m-6 max-w-4xl"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-6 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Package className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {initialData ? "Update Product" : "Create New Product"}
            </h1>
            <p className="text-gray-600 text-sm">
              {initialData
                ? "Modify product details and save changes"
                : "Add a new product to your inventory"}
            </p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/dashboard/manageProduct")}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>
      </motion.div>

      {/* Form Card */}
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
          <CardTitle className="text-xl text-gray-800">
            Product Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formFields.map((field) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={field.name === "description" ? "md:col-span-2" : ""}
                >
                  <Label htmlFor={field.name} className="block mb-2 font-semibold text-gray-700">
                    {field.label}
                    <span className="text-red-500 ml-1">*</span>
                  </Label>
                  <motion.div
                    whileFocus={{ scale: 1.01 }}
                    className="relative"
                  >
                    <Input
                      id={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      {...register(field.name, field.validation)}
                      className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                        errors[field.name]
                          ? "border-red-500 bg-red-50"
                          : "border-gray-300"
                      }`}
                    />
                  </motion.div>
                  {errors[field.name] && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 text-red-500 text-sm font-medium"
                    >
                      {errors[field.name]?.message as string}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 pt-6 border-t"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => navigate("/dashboard/manageProduct")}
                className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading || updateLoading}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading || updateLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : initialData ? (
                  "Update Product"
                ) : (
                  "Create Product"
                )}
              </motion.button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CreateProduct;
