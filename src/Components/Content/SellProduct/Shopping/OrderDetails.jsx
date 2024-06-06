import React, { useEffect, useState } from "react";
import OrderDetailsItem from "./OrderDetailsItem";
import ProductCard from "../../Product/ProductCard";
import Slider from "react-slick";
import AOS from "aos";

export default function OrderDetails() {
  const date = localStorage.getItem("OrderDate");
  const [similar, setSimilar] = useState([]);
  // Fetch Data
  useEffect(() => {
    fetch("http://localhost:3001/api/ring")
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
            <div className="text text-[1.4em] text-green-800 uppercase">
              Order Number: #888
            </div>
            {/* Process */}
            <div className=" w-full flex items-center">
              <div className="w-24 h-24 flex flex-col bg-green-400 justify-center items-center rounded-full border-green-700 border-[0.1em]">
                <ion-icon name="bag-handle-outline"></ion-icon>
                <div className="font-serif">Order</div>
              </div>
              <div className="border-t-2 border-green-800 w-20"></div>
              <div className="w-24 h-24 flex flex-col justify-center items-center rounded-full border-green-700 border-[0.1em]">
                <ion-icon name="bag-check-outline"></ion-icon>
                <div className="font-serif">Processing</div>
              </div>
              <div className="border-t-2 border-green-800 w-20"></div>
              <div className="w-24 h-24 flex flex-col justify-center items-center rounded-full border-green-700 border-[0.1em]">
                <ion-icon name="car-sport-outline"></ion-icon>
                <div className="font-serif">Transport</div>
              </div>
              <div className="border-t-2 border-green-800 w-20"></div>
              <div className="w-24 h-24 flex flex-col justify-center items-center rounded-full border-green-700 border-[0.1em]">
                <ion-icon name="star-outline"></ion-icon>
                <div className="font-serif">Review</div>
              </div>
            </div>
            {/* Order Details */}
            <div className="w-full flex flex-col justify-between h-1/2 font-serif">
              <div className="">Create at: {date}</div>
              <div className="flex">
                <div className="">Status:</div>
                <div className="ml-2 text-white bg-green-800 rounded-md px-2">
                  Order Successful
                </div>
              </div>
              <div className="">Price: 100,00$</div>
              <div className="">Transport fee: 20,00$</div>
              <div className="">Total: 120,00$</div>
              <div className="flex items-center">
                <div className="">Payment: </div>
                <div className="bg-blue-500 rounded-md px-2 ml-2 text-white">
                  VISA
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
        {/* Similar Products */}
        <div className="absolute -top-16 left-16 flex items-center text-green-800">
          <div className="text text-[1.5em] uppercase">similar product</div>
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
                  id={item.id}
                  img={item.image}
                  hovimg={item.image}
                  name={item.name}
                  material={"white gold, rose"}
                  price={item.price}
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
