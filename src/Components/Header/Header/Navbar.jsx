import React from "react";
import Menu from "./Menu";
import Feature from "./Feature";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full h-[20vh] z-10">
      <div className="relative z-20 flex justify-between bg-white">
        {/* Service */}
        <div className="w-[25%] pt-4 pl-8">
          <ul className="flex justify-between font-sans uppercase">
            <li className="li-link h-10">viet nam</li>
            <li className="li-link h-10">contacts us</li>
            <li className="li-link h-10">services</li>
          </ul>
        </div>
        {/* Logo */}
        <Link to={'/'} className="w-[70%] h-[70%] mt-5 flex justify-around">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cartier_logo.svg/1200px-Cartier_logo.svg.png"
            alt=""
            className="w-[20%] mr-44"
          />
        </Link>
        {/* Feature */}
        <Feature />
      </div>
      <Menu />
    </div>
  );
}
