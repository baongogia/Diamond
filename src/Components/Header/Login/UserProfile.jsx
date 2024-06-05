import React, { useContext } from "react";
import GGLogout from "./GGLogout";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const { userData } = useContext(UserContext);

  return (
    <div className="w-screen flex flex-col justify-center items-center mt-10">
      {/* Welcome user */}
      <div className="w-[86%] h-[30vh] bg-black bg-opacity-5">
        <div className="flex flex-col justify-center items-center font-serif mt-10">
          <img
            src="https://www.cartier.com/on/demandware.static/Sites-CartierUS-Site/-/default/dw2fd9b902/images/panthereCartierImageTransparent.png"
            alt=""
            className="w-1/12 "
          />
          <div className="text uppercase text-[1.4em]">{`Welcome ${userData.given_name}`}</div>
          <div className="">Welcome to your account</div>
          <div className="">
            You can manage your shopping experience at Cartier Online Store.
          </div>
        </div>
      </div>
      {/* Account information */}
      <div className="w-full flex justify-center items-cente h-screen">
        <div className="w-[86%] mt-16 flex justify-between">
          <div className="w-1/4 h-[50vh]">
            <div className="text text-[1.4em] uppercase">My cartier</div>
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
          <div className="w-[72%] h-[73vh] grid grid-cols-2">
            <div className="relative w-[95%] h-[95%] border-black border-[0.1em] border-opacity-30">
              <div className="absolute top-8 left-8 flex flex-col justify-between h-[70%]">
                <div className="text uppercase">My profile</div>
                <div className="">Mr {`${userData.given_name}`}</div>
                <div className="">{`${userData.email}`}</div>
              </div>
            </div>
            <div className="relative w-[95%] h-[95%] border-black border-[0.1em] border-opacity-30">
              <div className="absolute top-8 left-8 flex flex-col justify-between h-1/2">
                <div className="text uppercase">My order</div>
                <div className="font-serif">Your shopping bag is empty</div>
                <div className="font-serif">Star Point: 8</div>
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
