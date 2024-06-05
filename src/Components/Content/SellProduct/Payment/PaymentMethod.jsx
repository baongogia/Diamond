import React, { useState } from "react";
import CreditCard from "./CreditCard";
export default function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  return (
    <div className="mt-10 font-serif">
      <div className="text uppercase">Payment method</div>
      <div className="relative w-[15vw] mt-4 mb-12 flex flex-col justify-between">
        {/* Credit Card */}
        <div className="flex items-center justify-between w-[80%] mb-3">
          <div className="w-1/4">
            <input
              type="radio"
              name="pay"
              value="card"
              id=""
              checked={paymentMethod === "card"}
              onChange={handlePaymentMethodChange}
              className=""
            />
          </div>
          <div className="w-1/4">
            <ion-icon size="large" name="card-outline"></ion-icon>
          </div>
          <div className="w-1/2">
            <label htmlFor="Card">Card</label>
          </div>
        </div>
        {/* Credit Card form */}
        <div
          className={`${
            paymentMethod === "card" ? "" : "hidden"
          } -translate-y-4 transition-all duration-300 ease-in-out`}
        >
          <CreditCard />
        </div>
        {/* PayPal */}
        <div className="relative flex items-center justify-between w-[80%] mb-3">
          <div className="w-1/4">
            <input
              type="radio"
              name="pay"
              value="paypal"
              id=""
              checked={paymentMethod === "paypal"}
              onChange={handlePaymentMethodChange}
              className=""
            />
          </div>

          {paymentMethod === "paypal" ? (
            <a
              href="https://www.paypal.com/signin?locale.x=vi_VN"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-yellow-500 px-3 rounded-lg h-14 flex justify-center items-center cursor-pointer"
            >
              <div className="">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-paypal-58-711793.png?f=webp"
                  alt="PayPal"
                  className="w-full"
                />
              </div>
            </a>
          ) : (
            <div className="w-3/4 flex items-center justify-between">
              <div className="w-1/3">
                <ion-icon size="large" name="logo-paypal"></ion-icon>
              </div>
              <div className="w-2/3">
                <label htmlFor="PayPal">PayPal</label>
              </div>
            </div>
          )}
        </div>
        {/* When Recived */}
        <div className="flex items-center justify-between w-[80%]">
          <div className="w-1/4">
            <input
              type="radio"
              value="recived"
              name="pay"
              checked={paymentMethod === "recived"}
              onChange={handlePaymentMethodChange}
              id=""
              className=""
            />
          </div>
          <div className="w-1/4">
            <ion-icon
              size="large"
              name="checkmark-done-circle-outline"
            ></ion-icon>
          </div>
          <div className="w-1/2">
            <label htmlFor="Recieved" className="-translate-x-4">
              Recieved
            </label>
          </div>
        </div>

        <div
          className={`${
            paymentMethod === "recived" ? "" : "hidden"
          } w-[40vw] h-[25vh] mt-4 flex items-center`}
        >
          <div
            style={{
              backgroundImage: `url('https://cdn.qrcode-ai.com/qrcode/baa38bafb43c2be07f92e6a45d1eaf83-1717434661438.png')`,
            }}
            className="w-1/2 h-full bg-contain bg-center bg-no-repeat"
          ></div>
          <div className="w-1/2 h-full flex flex-col justify-between">
            <div className="">
              Please make a payment of 50% of the product's value in advance to
              complete the order.
            </div>
            <div className="">
              <div className="text">Product: LOVE BRACELET</div>
              <div className="text">Cost: 100,000$</div>
            </div>
            <div className="w-full h-10 bg-red-400 rounded-full flex justify-center items-center">
              <div className="text text-white uppercase">
                Status: Pending...
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rule */}
      <div className="">
        For further information about how we use your personal information,
        please see our Privacy Policy.
      </div>
    </div>
  );
}
