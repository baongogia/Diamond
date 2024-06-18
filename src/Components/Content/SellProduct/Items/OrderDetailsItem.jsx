import React, { useContext, useEffect } from "react";
import AOS from "aos";
import OrderItem from "../Items/OrderItem";
import { OrderContext } from "../Order/OrderContext";

export default function OrderDetailsItem() {
  const { order } = useContext(OrderContext);
  const product = order.products;
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1500"
      className="w-1/3 h-[50vh] flex justify-center items-center rounded-2xl border-[0.1em]"
    >
      <div className="w-[90%] h-[90%] flex flex-col justify-between">
        <div className="text text-[1.4em] text-green-800 uppercase">
          Order Details
        </div>
        <div className="h-1/2 overflow-auto">
          {product.length > 0 ? (
            product.map((item) => <OrderItem id={item.id} details={item} />)
          ) : (
            <div className=""></div>
          )}
        </div>
        <div className="font-serif flex flex-col justify-between h-1/3">
          <div className="">Customer Name: Ngo Gia Bao</div>
          <div className="">Phone: 0934102678</div>
          <div className="">
            Address: 104 Truong Thanh, 9 district, Ho Chi Minh City
          </div>
          <div className="">Expected Delivery Date: 8/6/2024</div>
        </div>
      </div>
    </div>
  );
}
