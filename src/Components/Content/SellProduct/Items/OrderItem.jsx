import React from "react";

export default function OrderItem({ details }) {
  return (
    <div className="w-full flex items-center mt-5">
      <div
        style={{
          backgroundImage: `url(${details.Image})`,
        }}
        className="w-36 h-36 rounded-xl border-green-700 border-[0.1em] bg-cover bg-center"
      ></div>
      <div className="font-serif ml-6">
        <div className="text uppercase">{details.ProductName}</div>
        <div className="">Size: {details.CustomizedSize}</div>
        <div className="">Material: Diamond</div>
        <div className="">Quantity: {details.Quantity}</div>
      </div>
    </div>
  );
}
