import { useForm } from "react-hook-form";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Switch } from "../../../components/ui/switch";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import {
  useAddSupplementMutation,
  useUpdateSupplementMutation,
} from "../../../redux/api/supplementApi/SupplementApi";

interface SupplementFormData {
  name: string;
  brand: string;
  category: string;
  description: string;
  flavor: string;
  weight: string;
  price: number;
  stock: number;
  images: string;
  isAvailable: boolean;
}

interface Props {
  initialData?: any;
}

const CreateSupplement = ({ initialData }: Props) => {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<SupplementFormData>({
    defaultValues: initialData
      ? {
          ...initialData,
          images: initialData.images?.join(", "),
        }
      : {
          isAvailable: true,
        },
  });

  const [createSupplement, { isLoading }] = useAddSupplementMutation();
  const [updateSupplement, { isLoading: updating }] =
    useUpdateSupplementMutation();

  const onSubmit = async (data: SupplementFormData) => {
    const toastId = toast.loading("Processing...");

    const payload = {
      ...data,
      price: Number(data.price),
      stock: Number(data.stock),
      images: data.images.split(",").map((url) => url.trim()),
    };

    try {
      if (initialData?._id) {
        await updateSupplement({
          id: initialData._id,
          updatedData: payload,
        }).unwrap();
        toast.success("Supplement updated successfully", { id: toastId });
        navigate("/dashboard/manageProduct");
      } else {
        const createSup = await createSupplement(payload).unwrap();
        console.log("crwate sup", createSup);
        toast.success("Supplement created successfully", { id: toastId });
        reset();
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong", {
        id: toastId,
      });
    }
  };

  return (
    <Card className="max-w-4xl mx-auto shadow-lg rounded-2xl">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">
          {initialData ? "Update Supplement" : "Create Supplement"}
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Basic Info */}
          <div>
            <Label>Name</Label>
            <Input {...register("name", { required: true })} />
          </div>

          <div>
            <Label>Brand</Label>
            <Input {...register("brand", { required: true })} />
          </div>

          <div>
            <Label>Category</Label>
            <Input {...register("category", { required: true })} />
          </div>

          <div>
            <Label>Flavor</Label>
            <Input {...register("flavor")} />
          </div>

          <div>
            <Label>Weight</Label>
            <Input placeholder="120 tablets" {...register("weight")} />
          </div>

          <div>
            <Label>Price ($)</Label>
            <Input type="number" {...register("price", { required: true })} />
          </div>

          <div>
            <Label>Stock</Label>
            <Input type="number" {...register("stock", { required: true })} />
          </div>

          <div className="md:col-span-2">
            <Label>Description</Label>
            <Input {...register("description")} />
          </div>

          {/* Images */}
          <div className="md:col-span-2">
            <Label>Image URLs</Label>
            <Input
              placeholder="Comma separated image URLs"
              {...register("images")}
            />
          </div>

          {/* Availability */}
          <div className="flex items-center gap-3 md:col-span-2">
            <Switch {...register("isAvailable")} />
            <Label>Available for sale</Label>
          </div>

          <Button
            type="submit"
            disabled={isLoading || updating}
            className="md:col-span-2 mt-4"
          >
            {isLoading || updating
              ? "Processing..."
              : initialData
              ? "Update Supplement"
              : "Create Supplement"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateSupplement;
