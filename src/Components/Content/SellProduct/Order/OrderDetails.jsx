import React, { useContext, useEffect, useState } from "react";
import OrderDetailsItem from "../Items/OrderDetailsItem";
import ProductCard from "../../Product/ProductCard";
import Slider from "react-slick";
import AOS from "aos";
import { OrderContext } from "../Order/OrderContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PaymentContext } from "../Payment/PaymentContext";

export default function OrderDetails() {
  const date = localStorage.getItem("OrderDate");
  const [similar, setSimilar] = useState([]);
  const { order, setOrder } = useContext(OrderContext);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const { paymentMethod } = useContext(PaymentContext);
  const Cancel = () => {
    setIsFlipped(!isFlipped);
    setShowCancel(!showCancel);
  };
  // Fetch Data
  useEffect(() => {
    fetch("https://localhost:7292/api/Products/Category/Necklaces")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSimilar(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);
  // AOS effect
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  // Cancel Product
  const naviagte = useNavigate();
  const cancelProduct = async () => {
    try {
      const response = await axios.put(
        `https://localhost:7292/api/Order/CancelOrder?id=${order.OrderID}`
      );
      console.log("Cancel successful!");
      if (response) {
        naviagte("/");
        setOrder(null);
      }
    } catch (error) {
      console.error("Cancel failed:", error);
    }
  };
  //
  const getCurrentStep = (status) => {
    switch (status) {
      case "Cancelled":
        return 0;
      case "Processing":
        return 1;
      case "Accepted":
        return 2;
      case "Deliverying":
        return 3;
      case "Complete":
        return 4;
      default:
        return 0;
    }
  };

  const currentStep = getCurrentStep(order?.OrderStatus);
  return (
    <div className="mt-12">
      <div className="w-screen flex justify-around">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="relative w-1/2 h-[50vh] flex justify-center items-center rounded-2xl border-[0.1em]"
        >
          <div className="w-[90%] h-[90%] flex flex-col justify-between">
            {/* Order Number */}
            <div className="text text-[1.4em] flex justify-between uppercase">
              <div className="text-green-800">
                {" "}
                {`Order Number: #${order.OrderID}`}
              </div>
              <div
                onClick={Cancel}
                className="text-[2em] h-0 -translate-y-3 translate-x-3 cursor-pointer hover:text-red-400"
              >
                <ion-icon name="close-outline"></ion-icon>
              </div>
            </div>
            {/* Cancel */}
            <div
              style={{ backdropFilter: "blur(1em)" }}
              className={`absolute z-[999] rounded-2xl left-0 bottom-0 w-full h-full transform-style-preserve-3d ${
                isFlipped ? "" : "rotate-y-180"
              } ${
                showCancel
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } transition-all duration-1000 drop-shadow-xl bg-black bg-opacity-35`}
            >
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="text-center flex flex-col items-center">
                  <div className="text text-[1.2em] mb-2 uppercase">
                    Cancel process?
                  </div>
                  <div className="font-serif w-[70%] mb-2">
                    Are you sure you want to cancel the following product from
                    the cart?
                  </div>
                </div>
                <div className="flex justify-around items-center w-[80%] mt-2">
                  <div
                    onClick={Cancel}
                    className="bg-white text-center text-black w-[40%] font-semibold px-4 py-2 text uppercase
                 hover:bg-red-400 hover:text-white border-black border-solid border-[0.08em] cursor-pointer transition-colors duration-500"
                  >
                    cancel
                  </div>
                  <div
                    onClick={cancelProduct}
                    className="bg-black text-center text-white w-[40%] font-semibold px-6 py-2 text uppercase
                 hover:bg-green-700 hover:text-black border-black border-solid border-[0.08em] cursor-pointer transition-colors duration-500"
                  >
                    yes
                  </div>
                </div>
              </div>
            </div>
            {/* Process */}
            <div className="w-full flex items-center">
              <div
                className={`w-24 h-24 flex flex-col justify-center items-center rounded-full border-green-700 border-[0.1em] ${
                  currentStep > 1
                    ? "bg-green-400"
                    : currentStep === 1
                    ? "bg-yellow-400"
                    : currentStep === 0
                    ? "bg-red-400"
                    : ""
                }`}
              >
                <div className={`${currentStep > 1 ? "hidden" : ""}`}>
                  <ion-icon name="bag-handle-outline"></ion-icon>
                </div>
                <div
                  className={`${currentStep > 1 ? "hidden" : ""} font-serif`}
                >
                  Processing
                </div>
                {currentStep > 1 && (
                  <ion-icon
                    name="checkmark-circle-outline"
                    className="text-green-700"
                  />
                )}
              </div>
              <div className="border-t-2 border-green-800 w-20"></div>
              <div
                className={`w-24 h-24 flex flex-col justify-center items-center rounded-full border-green-700 border-[0.1em] ${
                  currentStep > 2
                    ? "bg-green-400"
                    : currentStep === 2
                    ? "bg-yellow-400"
                    : ""
                }`}
              >
                <div className={`${currentStep > 2 ? "hidden" : ""}`}>
                  <ion-icon name="bag-check-outline"></ion-icon>
                </div>
                <div
                  className={`${currentStep > 2 ? "hidden" : ""} font-serif`}
                >
                  Accepted
                </div>
                {currentStep > 2 && (
                  <ion-icon
                    name="checkmark-circle-outline"
                    className="text-green-700"
                  />
                )}
              </div>
              <div className="border-t-2 border-green-800 w-20"></div>
              <div
                className={`w-24 h-24 flex flex-col justify-center items-center rounded-full border-green-700 border-[0.1em] ${
                  currentStep > 3
                    ? "bg-green-400"
                    : currentStep === 3
                    ? "bg-yellow-400"
                    : ""
                }`}
              >
                <div className={`${currentStep > 3 ? "hidden" : ""}`}>
                  <ion-icon name="car-sport-outline"></ion-icon>
                </div>
                <div
                  className={`${currentStep > 3 ? "hidden" : ""} font-serif`}
                >
                  Deliverying
                </div>

                {currentStep > 3 && (
                  <ion-icon
                    name="checkmark-circle-outline"
                    className="text-green-700"
                  />
                )}
              </div>
              <div className="border-t-2 border-green-800 w-20"></div>
              <div
                className={`w-24 h-24 flex flex-col justify-center items-center rounded-full border-green-700 border-[0.1em] ${
                  currentStep >= 4 ? "bg-green-400" : ""
                }`}
              >
                <div className={`${currentStep > 4 ? "hidden" : ""}`}>
                  <ion-icon name="star-outline"></ion-icon>
                </div>
                <div
                  className={`${currentStep > 4 ? "hidden" : ""} font-serif`}
                >
                  Complete
                </div>
              </div>
            </div>
            {/* Order Details */}
            <div className="w-full flex flex-col justify-between h-1/2 font-serif">
              <div className="">Create at: {date}</div>
              <div className="flex">
                <div className="">Status:</div>
                <div className="ml-2 text-white bg-green-800 rounded-md px-2">
                  {order.OrderStatus}
                </div>
              </div>
              <div className="">Price: {order.TotalPrice.toFixed(2)}$</div>
              <div className="">Discount: {order.DiscountRate * 100}%</div>
              <div className="">Total: {order.FinalPrice.toFixed(2)}$</div>
              <div className="flex items-center">
                <div className="">Payment: </div>
                <div
                  className={`${
                    paymentMethod === "Card"
                      ? "bg-blue-400"
                      : paymentMethod === "PayPal"
                      ? "bg-yellow-400"
                      : paymentMethod === "Received"
                      ? "bg-green-800"
                      : ""
                  } rounded-md px-2 ml-2 text-white`}
                >
                  {paymentMethod}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 translate-x-[60%]">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/06/Cartier-Symbol.png"
              alt=""
              className="w-[40%]"
            />
          </div>
        </div>
        <OrderDetailsItem />
      </div>
      <div className="relative w-screen mt-36 flex flex-col justify-center items-center h-[50vh]">
        {/* More Products */}
        <div className="absolute -top-16 left-16 flex items-center text-green-800">
          <div className="text text-[1.5em] uppercase">More product</div>
          <div className="translate-y-[10%]">
            <ion-icon size="large" name="chevron-forward-outline"></ion-icon>
          </div>
        </div>
        {/* List Products */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="relative w-[92%] h-[56vh] flex justify-center items-center"
        >
          <div className="w-full ml-3 h-full">
            <Slider className="w-full h-full" {...settings}>
              {similar.slice(0, 4).map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.ProductId}
                  img={item.Image}
                  hovimg={item.Image}
                  name={item.ProductName}
                  material={item.Material}
                  price={parseFloat(item.ProductPrice).toFixed(2)}
                  mini={false}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  Swipe: true,
};
