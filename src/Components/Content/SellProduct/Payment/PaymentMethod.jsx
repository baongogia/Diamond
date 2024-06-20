import React, { useContext } from "react";
import CreditCard from "./CreditCard";
import { CartContext } from "../../../Header/Header/Cart/CartContext";
import Paypal from "./Paypal";
import { PaymentContext } from "./PaymentContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Header/Login/UserContext";
import { OrderContext } from "../Order/OrderContext";

export default function PaymentMethod() {
  const { cartItems, clearCart } = useContext(CartContext);
  const { setOrder } = useContext(OrderContext);
  const { userData } = useContext(UserContext);
  const { paymentMethod, setPaymentMethod } = useContext(PaymentContext);
  const createOrder = async () => {
    const orderData = {
      Username: userData.Username,
      OrderDate: new Date().toISOString(),
      PaymentMethod: paymentMethod,
      Products: cartItems.map((item) => ({
        ProductID: item.productID,
        ProductName: item.name,
        CustomizedSize: item.size,
        Quantity: item.quantity,
      })),
      Deposits: 0,
    };

    try {
      const response = await fetch(
        "https://localhost:7292/api/Order/createorder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setOrder(result);
      console.log("Order created successfully:", result);
      clearCart();
    } catch (error) {
      console.error("There was an error creating the order:", error);
    }
  };
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const halfSubtotal = subtotal / 2;
  const deposit = halfSubtotal.toLocaleString("en-US");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const navigate = useNavigate();
  const handlePaymentSuccess = (details) => {
    console.log("Payment Successful:", details);
    clearCart();
    createOrder();
    navigate("/OrderSuccess"); // Chuyển đến trang thanh toán thành công
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
              value="Card"
              checked={paymentMethod === "Card"}
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
            paymentMethod === "Card" ? "" : "hidden"
          } -translate-y-4 transition-all duration-300 ease-in-out`}
        >
          <CreditCard amount={subtotal - 0.05 * subtotal} />
        </div>
        {/* PayPal */}
        <div className="relative flex items-center justify-between w-[80%] mb-3">
          <div className="w-1/4">
            <input
              type="radio"
              name="pay"
              value="PayPal"
              checked={paymentMethod === "PayPal"}
              onChange={handlePaymentMethodChange}
              className=""
            />
          </div>
          {paymentMethod === "PayPal" ? (
            <div className="w-full ml-10 px-3 rounded-lg mt-8 mb-2 h-16 flex justify-center items-center cursor-pointer">
              <div className="">
                <Paypal amount={subtotal} onSuccess={handlePaymentSuccess} />
              </div>
            </div>
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
        {/* When Received */}
        <div className="flex items-center justify-between w-[80%]">
          <div className="w-1/4">
            <input
              type="radio"
              value="Received"
              name="pay"
              checked={paymentMethod === "Received"}
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
              Received
            </label>
          </div>
        </div>
        <div
          className={`${
            paymentMethod === "Received" ? "" : "hidden"
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
              <div className="text">Cost: {deposit}</div>
            </div>
            <div className="w-full h-10 bg-green-400 cursor-pointer hover:bg-opacity-85 rounded-full flex justify-center items-center">
              <div className="text text-white uppercase">Pay all</div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        For further information about how we use your personal information,
        please see our Privacy Policy.
      </div>
    </div>
  );
}
