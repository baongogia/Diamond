import React, { useContext } from "react";
import GGLogout from "./GGLogout";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import { OrderContext } from "../../Content/SellProduct/Order/OrderContext";
import { RingLoader } from "react-spinners";

export default function UserProfile() {
  const { userData } = useContext(UserContext);
  const { order } = useContext(OrderContext);
  if (!userData) {
    return (
      <div className="w-screen h-[80vh] flex justify-center items-center">
        <RingLoader size={100} color="#54cc26" />
      </div>
    );
  }

  return (
    <div className="w-screen flex flex-col justify-center items-center mt-10">
      {/* Welcome user */}
      <div className="w-[86%] h-[30vh] bg-black bg-opacity-5">
        <div className="flex flex-col justify-center items-center font-serif mt-10">
          <img
            src="https://png.pngtree.com/png-vector/20220719/ourmid/pngtree-eternal-love-symbol-heart-infinity-sign-calligraphy-for-declarations-vector-png-image_37918768.png"
            alt=""
            className="w-1/6"
          />
          <div className="text uppercase text-[1.4em]">{`Welcome ${
            userData.given_name ? userData.given_name : userData.Username
          }`}</div>
          <div className="">Welcome to your account</div>
          <div className="">
            You can manage your shopping experience at Eternity Online Store.
          </div>
        </div>
      </div>
      {/* Account information */}
      <div className="w-full flex justify-center items-cente h-screen">
        <div className="w-[86%] mt-16 flex justify-between">
          <div className="w-1/4 h-[50vh]">
            <div className="text text-[1.4em] uppercase">My Eternity</div>
            <ul className="ml-5 mt-10 uppercase font-sans h-full flex flex-col justify-between">
              <div className="text">Overview</div>
              <li className="hover:text-green-700 cursor-pointer">
                my profile
              </li>
              <li className="hover:text-green-700 cursor-pointer">
                my password
              </li>
              <li className="hover:text-green-700 cursor-pointer">my orders</li>
              <li className="hover:text-green-700 cursor-pointer">
                my wish list
              </li>
              <li className="hover:text-green-700 cursor-pointer">
                my addresses
              </li>
              <li className="hover:text-green-700 cursor-pointer">
                my collection
              </li>
              <li className="hover:text-green-700 cursor-pointer">
                my subscriptions & interests
              </li>
              {/* Log out */}
              <GGLogout />
            </ul>
          </div>
          <div className="w-[72%] h-[73vh] grid grid-cols-2 font-serif">
            <div className="relative w-[95%] h-[95%] border-black border-[0.1em] border-opacity-30">
              <div className="absolute top-8 left-8 flex flex-col justify-between h-1/2">
                <div className="text uppercase">My profile</div>
                <div className="">
                  Mr.{" "}
                  {userData.given_name
                    ? userData.given_name
                    : userData.Username}
                </div>
                <div className="">{userData.email || `${userData.Role}`}</div>
                <div className="">Star Point: 0</div>
              </div>
            </div>
            <div className="relative w-[95%] h-[95%] border-black border-[0.1em] border-opacity-30">
              <div className="absolute top-8 w-full left-8 flex flex-col justify-between font-serif">
                <div className="text uppercase mb-3">My order</div>
                {/* Orders */}
                {order && order.OrderID ? (
                  <div className="flex font-serif w-[55%] justify-between items-center mb-3">
                    <div
                      style={{
                        backgroundImage: `url(${order.products[0].Image})`,
                      }}
                      className="bg-black w-24 h-24 bg-cover"
                    ></div>
                    <div className="">
                      <div className="">
                        <div className="">Order Number</div>
                        <div className="text uppercase">{order.OrderID}</div>
                      </div>
                      <div className="">
                        <div className="">Order Status</div>
                        <div className="text uppercase">Success</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="font-serif">Your shopping bag is empty</div>
                )}

                {/* View orders */}
                <Link
                  to="/OrderDetails"
                  className={`font-serif ${
                    order && order.OrderID
                      ? "pointer-events-auto cursor-pointer title-link h-10 w-28"
                      : "pointer-events-none cursor-default"
                  }`}
                >
                  {order && order.OrderID ? "View all order" : ""}
                </Link>
                <Link to="/OrderHistory" className="footer-link w-40 mt-2">
                  View purchase history
                </Link>
              </div>
            </div>
            <div className="relative w-[95%] h-[95%] border-black border-[0.1em] border-opacity-30">
              <div className="absolute top-8 left-8 flex flex-col justify-between h-[25%]">
                <div className="text uppercase">My wish list</div>
                <div className="font-serif">Your wish list is empty</div>
              </div>
            </div>
            <div className="relative w-[95%] h-[95%] border-black border-[0.1em] border-opacity-30">
              <div className="absolute top-8 left-8 flex flex-col justify-between h-1/4">
                <div className="text uppercase">My addresses</div>
                <div className="font-serif">
                  You have not saved any addresses yet.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
