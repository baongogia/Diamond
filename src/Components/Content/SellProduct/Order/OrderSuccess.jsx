import React from "react";
import { Link, NavLink } from "react-router-dom";
import Confetti from "react-confetti";
export default function OrderSuccess() {
  return (
    <div className="">
      <div className="flex justify-center items-center bg-white">
        {/* Logo */}
        <Link to={"/"} className="w-[70%] h-[70%] mt-5 flex justify-around">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cartier_logo.svg/1200px-Cartier_logo.svg.png"
            alt=""
            className="w-[16%] mt-4"
          />
        </Link>
      </div>

      <div className="w-screen h-[90vh] flex flex-col justify-center items-center">
        <div className="text uppercase text-[2em]">Order Successfull !!!</div>
        <div className="font-serif text-[1.6em]">
          Thanks you for shopping with us
        </div>
        <div className="flex flex-col">
          <NavLink
            to={"/OrderDetails"}
            className="text mt-5 p-4 text-yellow-500 hover:bg-yellow-500 hover:text-white border-[0.1em] flex justify-center items-center uppercase"
          >
            <div className="">View your order details</div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </NavLink>
          <NavLink
            to={"/"}
            className="text mt-2 p-4 border-[0.1em] text-green-500 hover:bg-green-500 hover:text-white flex justify-center items-center uppercase"
          >
            <div className="">continue shopping</div>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </NavLink>
        </div>
      </div>
      {/* Animation */}
      <Confetti
        drawShape={(ctx) => {
          ctx.beginPath();
          for (let i = 0; i < 22; i++) {
            const angle = 0.35 * i;
            const x = (0.2 + 1.5 * angle) * Math.cos(angle);
            const y = (0.2 + 1.5 * angle) * Math.sin(angle);
            ctx.lineTo(x, y);
          }
          ctx.stroke();
          ctx.closePath();
        }}
      />
    </div>
  );
}
