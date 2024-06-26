import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import PaymentDetails from "../Payment/PaymentDetails";
import PaymentMethod from "../Payment/PaymentMethod";
import ShoppingFooter from "../../../Footer/ShoppingFooter";
export default function ReviewOrder() {
  const totalBillRef = useRef(null);
  const itemsRef = useRef(null);
  const [isSticky, setIsSticky] = useState(true);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (totalBillRef.current && itemsRef.current) {
        const totalBillRect = totalBillRef.current.getBoundingClientRect();
        const itemsRect = itemsRef.current.getBoundingClientRect();
        const stopPosition = itemsRect.height - totalBillRect.height - 28;
        if (window.scrollY >= stopPosition) {
          setIsSticky(false);
        } else {
          setIsSticky(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Scroll to top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <div className="flex justify-center items-center bg-white">
        <Link to={"/"} className="w-[70%] h-[70%] mt-5 flex justify-around">
          <div className="w-[20%] text-[2.8em] logo">EterniTy</div>
        </Link>
      </div>
      <div className="">
        <div ref={itemsRef} className="relative w-full ml-16 mt-8">
          <div className="w-[50%] ml-2 mb-8">
            <div className="text text-[1.5em] mb-10">
              PROCEED WITH YOUR ORDER
            </div>
            {/* User address */}
            <div className="w-full h-[45vh] flex justify-center items-center bg-black bg-opacity-5">
              <div className="w-[90%] h-[90%] font-serif flex flex-col justify-around">
                <div className="w-full h-[60%] flex flex-col justify-between">
                  <div className="text uppercase underline mb-4">
                    shipping details
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <div className="flex flex-col justify-between h-14">
                      <div className="text uppercase">shipping address</div>
                      <div className="">Mr Gia Bao</div>
                    </div>
                    <div className="h-10 title-link">Modify</div>
                  </div>
                  <div className="">Truong Thanh</div>
                  <div className="">104/50/4 Duong So 8</div>
                  <div className="">Ho Chi Minh city | Viet Nam</div>
                  <div className="">+84 934102678</div>
                </div>
                <div className="w-full h-[25%] flex flex-col justify-between font-serif">
                  <div className="text uppercase">shipping method</div>
                  <div className="">Standard Delivery</div>
                  <div className="">Estimated Delivery: 05/30/2024</div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center mt-6">
              <div className="w-[90%] h-[90%] font-serif">
                <div className="text uppercase underline">payment details</div>
                <div className="mt-8 text uppercase">billing details</div>
                <div className="w-[80%] pointer-events-none mt-5">
                  <div className="opacity-60">Billing Address</div>
                  <Select
                    placeholder="Mr.Gia Bao Truong Thanh, Ho Chi Minh city"
                    className="text"
                  />
                </div>
                <div className="flex font-serif mt-4 mb-3">
                  <div className="title-link h-10">Update Address</div>
                  <div className="title-link h-10 ml-8">Add New</div>
                </div>
                <div className="">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className="ml-3 underline">
                    I acknowledge that I have read and accepted Eternity’s
                    Conditions of Sale and Privacy Policy
                  </label>
                </div>
                <PaymentMethod />
              </div>
            </div>
          </div>
          <div
            ref={totalBillRef}
            className={`${
              isSticky
                ? "fixed top-[18vh] right-24"
                : "absolute bottom-0 right-40"
            }`}
          >
            <PaymentDetails
              title={"place your order"}
              linkto={"/OrderSuccess"}
            />
          </div>
        </div>
        <ShoppingFooter />
        <div className="w-screen h-[9vh] bg-green-800 flex items-center">
          <div className="text-white text uppercase ml-24">
            Copyright @ GiaBao
          </div>
        </div>
      </div>
    </div>
  );
}
