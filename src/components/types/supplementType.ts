export type ISupplement = {
  _id?: string;
  name: string;
  brand?: string;
  description?: string;
  price: number;
  category: "Gym Equipment" | "Supplement" | "Accessory";
  flavor?: string;
  stock?: number;
  weight?: string;
  images?: string[];
  isAvailable?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
