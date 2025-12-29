import React, { useState } from "react";

const EditProduct: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    category: "",
    price: 0,
    stock: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container mx-auto p-16">
      <div className="container mx-auto p-8  bg-slate-600 ">
        <h1 className="text-2xl font-bold mb-4 text-stone-100 ">
          Edit Product
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formState.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formState.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              value={formState.stock}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-slate-900 hover:bg-slate-500 rounded-md text-xl text-stone-50 p-2"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
