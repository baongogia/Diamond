import React from "react";
import SideBar from "./SideBar";
import ItemsList from "./ItemsList";
import { useParams } from "react-router-dom";

export default function AllItems() {
  const category = useParams();
  const cat = category.category;
  return (
    <div className="">
      {/* Introduce */}
      <div className="w-full h-[35vh] -translate-y-7 flex">
        <div
          style={{
            backgroundImage: `url('https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dwcb544b4d/plp/jewellery/collections/trinity/header/01_UPDATE_HEADER_TRINITY_1920x800.jpg')`,
          }}
          className="w-1/2 h-full bg-cover bg-center bg-no-repeat"
        ></div>
        <div className="w-1/2 h-full bg-black bg-opacity-5 flex justify-center items-center">
          <div className="w-1/2">
            <div className="text uppercase text-[1.6em] mb-2">{cat}</div>
            <div className="font-serif">
              {`${cat} is the perfect equation: clean lines, accurate
              proportions, precise shapes. To celebrate 100 years of Trinity,
              Cartier has designed three new variations on the ring: a
              cushion-shaped version, a modular version and an XL version. The
              collection also includes a reissue of the XL bracelet, a true cult
              piece.`}
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-around">
        {/* SideBar */}
        <SideBar />
        {/* Items */}
        <ItemsList category={cat} />
      </div>
    </div>
  );
}
