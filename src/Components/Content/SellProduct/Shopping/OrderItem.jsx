import React from "react";

export default function OrderItem() {
  return (
    <div className="w-full flex items-center mt-5">
      <div
        style={{
          backgroundImage: `url('https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw790eb6aa/images/large/c694697eb0fe59438264df232a5bb04c.png?sw=750&sh=750&sm=fit&sfrm=png')`,
        }}
        className="w-36 h-36 rounded-xl border-green-700 border-[0.1em] bg-cover bg-center"
      ></div>
      <div className="font-serif ml-6">
        <div className="text uppercase">LOVE bracelet</div>
        <div className="">Size: 17.5</div>
        <div className="">Material: Gold</div>
        <div className="">Quantity: 1</div>
      </div>
    </div>
  );
}
