/* eslint-disable @typescript-eslint/no-explicit-any */
import CartDetails from "../../components/CartDetails";
import OrderSummary from "../../components/OrderSummary";
import { useGetAllCartQuery } from "../../redux/api/Cart/CartApi";

const Cart = () => {
  const res = useGetAllCartQuery();
  const products = res.data.data;
  return (
    <div className=" max-w-7xl mx-auto min-h-[70vh] mt-20">
      <div className="flex lg:flex-row flex-col-reverse justify-center gap-6">
        <div className="space-y-5 lg:mt-0 mt-5 w-full lg:w-2/3 mb-6 md:mb-0">
          {products.length ? (
            products.map((product: any) => (
              <CartDetails key={product.id} product={product} />
            ))
          ) : (
            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <p className="text-2xl text-slate-600">Your cart is empty</p>
              <p className="text-slate-500 mt-2">
                Add some products to your cart to continue shopping
              </p>
            </div>
          )}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Cart;
