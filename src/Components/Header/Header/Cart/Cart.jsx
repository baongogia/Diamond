import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartItems from "./CartItems";

export default function Cart({ setShowCart, setOverlay }) {
  const { cartItems } = useContext(CartContext);
  const subtotal = cartItems
    .reduce((total, item) => total + 123.456 * item.quantity, 0)
    .toFixed(2);

  const handleShow = () => {
    setShowCart(false);
    setOverlay(false);
  };
  return (
    <div
      className={`relative w-[33vw] h-screen flex flex-col justify-center items-center`}
    >
      {/* Title */}
      <div className="w-full h-[5em] border-b-[0.1em] border-t-black border-opacity-30 flex justify-around items-center">
        <div className="uppercase font-semibold text-[2em]">Shopping cart</div>
        <div
          onClick={handleShow}
          className={`absolute right-5 top-0 text-[2.5em] cursor-pointer hover:opacity-50`}
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </div>
      {/* Items */}
      <div className="w-[90%] h-[70vh] mt-8">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItems id={item.id} />)
        ) : (
          <div className=""></div>
        )}
      </div>
      {/* Check out */}
      {cartItems.length > 0 ? (
        <div className=" mb-8 w-[90%] h-[20vh] flex flex-col justify-around border-t-[0.1em] border-t-black border-opacity-10">
          <div className="text text-[1.4em] uppercase flex w-full justify-between">
            <div className="">subtotal</div>
            <div className="">${subtotal}</div>
          </div>
          <div className="font-serif">
            Shipping and taxes calculated at checkout.
          </div>
          <Link
            to={`/ShoppingBag`}
            onClick={handleShow}
            className="bg-black text uppercase text-center text-white w-full font-semibold px-4 py-2 border-black border-[0.1em] cursor-pointer transition-colors duration-500 hover:bg-white hover:text-black"
          >
            View my shopping bag
          </Link>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          Your shopping cart is empty
        </div>
      )}
    </div>
  );
}
