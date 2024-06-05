import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Login/UserContext";
import Cart from "./Cart/Cart";
import { CartContext } from "./Cart/CartContext";
export default function Feature() {
  const { showCart2, setShowCart: setShowCartContext } =
    useContext(CartContext);
  const [showCart, setShowCart] = useState(showCart2);
  const [overlay, setOverlay] = useState(false);
  const { isLoggedIn, userData } = useContext(UserContext);

  useEffect(() => {
    setShowCart(showCart2);
  }, [showCart2]);

  return (
    <div className={`${isLoggedIn ? "w-[17%]" : "w-[13%]"} pt-4 pr-8`}>
      {/* Feature */}
      {isLoggedIn ? (
        <ul className="flex justify-between items-center text-[1.2em]">
          <Link
            to={"/UserProfile"}
            className={`cursor-pointer flex hover:opacity-55 text-red-500`}
          >
            <div className="font-mono text-[0.7em] mr-2 text-black uppercase">
              {userData.given_name}
            </div>
            <ion-icon name="person-outline"></ion-icon>
          </Link>

          <div className="cursor-pointer hover:opacity-55 flex">
            <ion-icon name="heart-outline"></ion-icon>
          </div>

          <div className="cursor-pointer hover:opacity-55 flex">
            <ion-icon name="location-outline"></ion-icon>
          </div>

          <div
            onMouseEnter={() => {
              setShowCartContext(true); // Use context to update showCart state
              setOverlay(true);
            }}
            className="cursor-pointer flex"
          >
            <ion-icon name="bag-handle-outline"></ion-icon>
          </div>
        </ul>
      ) : (
        <ul className="flex justify-between text-[1.2em]">
          <div className="cursor-pointer hover:opacity-55">
            <ion-icon name="heart-outline"></ion-icon>
          </div>

          <Link to={"/LoginPage"} className={`cursor-pointer hover:opacity-55`}>
            <ion-icon name="person-outline"></ion-icon>
          </Link>

          <div className="cursor-pointer hover:opacity-55">
            <ion-icon name="location-outline"></ion-icon>
          </div>

          <div
            onMouseEnter={() => {
              setShowCartContext(true); // Use context to update showCart state
              setOverlay(true);
            }}
            className="cursor-pointer"
          >
            <ion-icon name="bag-handle-outline"></ion-icon>
          </div>
        </ul>
      )}

      {/* Shopping Cart */}
      <div
        onMouseLeave={() => {
          setShowCartContext(false); // Use context to update showCart state
          setOverlay(false);
        }}
        className={`fixed z-50 top-0 right-0 w-[33vw] bg-white ${
          showCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-700 pointer-events-auto`}
      >
        <Cart setShowCart={setShowCart} setOverlay={setOverlay} />
      </div>
      <div
        className={`fixed top-0 left-0 bg-black bg-opacity-50 w-[90%] h-screen pb-10 ${
          overlay ? "opacity-100" : "opacity-0"
        } transition-opacity duration-700 pointer-events-none`}
      >
        <div className=""></div>
      </div>
    </div>
  );
}
