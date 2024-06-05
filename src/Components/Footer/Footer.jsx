import React from "react";
import FooterList from "./FooterList";

export default function Footer() {
  return (
    <div className="">
      {/* Sub */}
      <div className="w-screen h-[12em] mt-16 border-t-[0.1em] border-t-zinc-300 font-serif">
        <div className="flex h-full flex-col justify-center items-center">
          <div className="text">SUBSCRIBE TO OUR NEWSLETTER</div>
          <div className="flex mt-5">
            <input
              type="email"
              name=""
              placeholder="Email"
              className="outline-none w-[18em] border-b-[0.1em] border-b-black"
            />
            <div
              className="bg-black text-center text-white w-[60%] font-semibold px-4 py-1
                 hover:bg-white hover:text-black border-black border-solid border-[0.1em] cursor-pointer transition-colors duration-500"
            >
              SUBSCRIBE
            </div>
          </div>
        </div>
      </div>
      {/* List */}
      <FooterList />
      {/* Logo */}
      <div className="w-screen h-[6em] flex justify-center items-center">
        <img
          src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dw2ebd423e/CWI-Logo-black-424x190px.png"
          alt=""
          className="w-[8%] mr-16"
        />
        <img
          src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dw38c3e5f0/cartier_partner_logo_fondation.png"
          alt=""
          className="w-[8%] mr-16"
        />
        <img
          src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dwa7ae8ebe/Philanthropy.png"
          alt=""
          className="w-[8%]"
        />
      </div>
      {/* Copyright */}
      <div className="w-screen h-[2em] flex justify-center items-center bg-green-900">
          <div className="text-white">Copyright by Gia Bao {':>'}</div>
      </div>
    </div>
  );
}
