import { CreditCard, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { clearCart } from "../redux/features/cartSlice";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { tax, taxRate, grandTotal, totalPrice, selectedItems } =
    useAppSelector((store) => store.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className=" lg:w-80 w-full h-full bg-slate-600  rounded">
      <div className="px-6 py-4 space-y-10">
        <h1 className="text-3xl font-bold text-white">Order Summary</h1>
        <p className="text-white mt-2">Selected Items :{selectedItems} </p>
        <p className=" text-white mt-2">
          Total Price : ${totalPrice.toFixed(2)}{" "}
        </p>
        <p className=" text-white mt-2">
          Tax ({taxRate * 100}): ${tax.toFixed(3)}
        </p>
        <h3 className="text-xl font-semibold text-white mt-4">
          Grand Total ${grandTotal.toFixed(3)}
        </h3>
      </div>
      <div className="px-4 pb-6">
        {" "}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClearCart();
          }}
          className="hover:bg-emerald-500 hover:text-slate-800 px-3 py-2 bg-white  mt-2 rounded-md w-full text-md flex justify-between items-center mb-4"
        >
          <span>Clear Cart</span>
          <Trash2 className="inline" width={15} height={15} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate("/checkout");
          }}
          className="hover:bg-emerald-500 hover:text-slate-800 px-3 py-2 bg-white  mt-2 rounded-md w-full text-md flex justify-between items-center"
        >
          <span>Proceed Checkout</span>
          <CreditCard className="inline" width={15} height={15} />
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
