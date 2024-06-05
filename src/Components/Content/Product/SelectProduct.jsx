import React, { useState, useContext } from "react";
import Select from "react-select";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Header/Header/Cart/CartContext";

export default function SelectProduct() {
  const { id } = useParams();
  // const [mainDiamond, setMainDiamond] = useState(null);
  // const [secondDiamond, setSecondDiamond] = useState(null);
  // const [bark, setBark] = useState(null);
  const [size, setSize] = useState(null);
  const [showIns, setShowIns] = useState(false);
  const [showMissingMsg, setShowMissingMsg] = useState(false);
  const [redHeart, setRedHeart] = useState(false);
  const [showCer, setShowCer] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showVid, setShowVid] = useState(false);
  const allSelected = size;
  const { setShowCart } = useContext(CartContext);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (allSelected) {
      const product = {
        id,
        size,
      };
      addToCart(product);
      setShowCart(true);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const toggleHeart = () => {
    setRedHeart(!redHeart);
  };

  const getMissingSelections = () => {
    let missing = [];
    if (!size) missing.push("Size");
    // if (!secondDiamond) missing.push("Second Diamond");
    // if (!bark) missing.push("Ring Shell");
    return missing.join(", ");
  };

  const missingSelections = getMissingSelections();

  const missingMessage =
    missingSelections.length === 1
      ? `Please Select: ${missingSelections[0]}`
      : "Please Select Size";

  const options = [
    { value: "3ly7", label: "3ly7" },
    { value: "4ly3", label: "4ly3" },
    { value: "6ly8", label: "6ly8" },
  ];

  // Mapping sizes to prices
  const sizePriceMapping = {
    "3ly7": "100,000$",
    "4ly3": "200,000$",
    "6ly8": "300,000$",
  };

  // Calculate price based on selected size
  const price = size ? sizePriceMapping[size.value] : "";

  const handleChange = (setter) => (selectedOption) => {
    setter(selectedOption);
  };

  const colourStyles = {
    control: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: "white",
      border: "1.5px solid #000",
      borderRadius: "none",
      boxShadow: isFocused ? "none" : styles.boxShadow,
      borderColor: isFocused ? "green" : "green",
      "&:hover": {
        borderColor: isFocused ? "green" : "green",
      },
    }),
    option: (styles) => {
      return {
        ...styles,
        fontFamily: "sans-serif",
      };
    },
    placeholder: (styles) => ({
      ...styles,
      textAlign: "center",
      color: "black",
      textTransform: "uppercase",
    }),
  };

  return (
    <div className="w-[80%] float-right flex flex-col justify-center items-start">
      <div className="text uppercase text-[1.6em] text-green-800">
        TRINITY CUSHION NECKLACE
      </div>
      <div className="mb-3 font-serif">
        Trinity necklace, 18K white gold (750/1000), 18K rose gold (750/1000)
      </div>
      <div className="flex w-full justify-between items-center">
        <div className="">
          <div className="text uppercase text-green-800 mb-2">Code: {id}</div>
        </div>
        <div
          onClick={() => {
            setShowCer(true);
            handleFlip();
          }}
          className={`text-[1.6em] mb-2 cursor-pointer hover:text-green-700 ${
            showCer ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          <ion-icon name="shield-checkmark-outline"></ion-icon>
        </div>
      </div>
      {/* Select */}
      <div className="w-full">
        {/* <Select
          placeholder="Select Main Diamond"
          options={options}
          onChange={handleChange(setMainDiamond)}
          styles={colourStyles}
          className="text"
        />
        <Select
          placeholder="Select Second Diamond"
          options={options}
          onChange={handleChange(setSecondDiamond)}
          styles={colourStyles}
          className="text mt-8"
        />
        <Select
          placeholder="Select Ring Shell"
          options={options}
          onChange={handleChange(setBark)}
          styles={colourStyles}
          className="text mt-8"
        /> */}
        <Select
          placeholder="Select Size"
          options={options}
          onChange={handleChange(setSize)}
          styles={colourStyles}
          className="text mt-8"
        />
      </div>
      {/* Price */}
      <div className="flex w-full h-[5vh] mt-4 justify-between items-center">
        <div className="text uppercase text-[1.6em] text-green-800">
          {price}
        </div>
        {/* Measuring */}
        <div
          onMouseEnter={() => setShowIns(true)}
          onMouseLeave={() => setShowIns(false)}
          onClick={() => setShowVid(true)}
          className="relative cursor-pointer hover:text-green-700"
        >
          <ion-icon size="large" name="help-circle-outline"></ion-icon>
          <div
            className={`absolute top-1 right-8 rounded-lg w-max h-6 px-3 py-2 font-serif bg-green-900 bg-opacity-15 overflow-hidden ${
              showIns ? "-translate-x-5 opacity-100" : "translate-x-3 opacity-0"
            } transition-all duration-300 border-green-800 border-[0.1em] flex justify-center items-center`}
          >
            Measuring diamonds
          </div>
        </div>
      </div>
      {/* Add */}
      <div className="w-full flex justify-between mt-3">
        <div
          onMouseEnter={() => !allSelected && setShowMissingMsg(true)}
          onMouseLeave={() => setShowMissingMsg(false)}
          onClick={handleAddToCart}
          className={`group w-[83%] h-[2.5em] bg-black flex justify-center items-center cursor-pointer ${
            allSelected
              ? "bg-opacity-100"
              : "bg-opacity-25 hover:bg-opacity-100"
          } }`}
        >
          <div
            className={`text uppercase ${
              allSelected
                ? "text-white"
                : "text-gray-700 group-hover:text-white group-hover:pointer-events-none"
            }`}
          >
            {showMissingMsg && !allSelected ? missingMessage : "Add to Bag"}
          </div>
        </div>
        <div
          onClick={toggleHeart}
          className={`w-[12%] h-[2.5em] text border-black border-[0.1em] flex justify-center items-center hover:text-red-500 cursor-pointer ${
            redHeart ? "text-red-500" : ""
          }`}
        >
          {redHeart ? <FaHeart /> : <FaRegHeart />}
        </div>
      </div>
      {/* Contact */}
      <div className="mt-8 flex flex-col justify-between w-full h-[24vh] text-[1.1em]">
        <div className="flex items-center">
          <ion-icon name="call-outline"></ion-icon>
          <div className="uppercase ml-4 footer-link">
            Order by phone 0888888888
          </div>
        </div>
        <div className="flex items-center">
          <ion-icon name="archive-outline"></ion-icon>
          <div className="uppercase ml-4 footer-link">Find in boutique</div>
        </div>
        <div className="flex items-center">
          <ion-icon name="headset-outline"></ion-icon>
          <div className="uppercase ml-4 footer-link">
            contact an ambassador
          </div>
        </div>
        <div className="flex items-center">
          <ion-icon name="bookmark-outline"></ion-icon>
          <div className="uppercase ml-4 footer-link">book an appointment</div>
        </div>
        <div className="flex items-center">
          <ion-icon name="share-social-outline"></ion-icon>
          <div className="uppercase ml-4 footer-link">Ref.B52</div>
        </div>
      </div>
      {/* CIA */}
      <div
        className={`absolute z-10 -top-6 -left-[40vw] w-[70vw] h-[80vh] border-green-700 border-[0.4em] border-double  ${
          showCer ? "opacity-100" : "opacity-0 pointer-events-none"
        } transform-style-preserve-3d ${
          isFlipped ? "" : "rotate-y-180"
        } transition-all duration-1000 drop-shadow-xl`}
      >
        <div
          style={{
            backgroundImage: `url('https://lapolajewelry.com/image/catalog/san_pham/WEB/4.52%20D%20-1155.jpg')`,
          }}
          className="relative w-full h-full bg-red-500 bg-cover bg-center bg-no-repeat"
        >
          <div
            onClick={() => {
              setShowCer(false);
              handleFlip();
            }}
            className="absolute top-2 right-2 cursor-pointer"
          >
            <ion-icon size="large" name="close-circle-outline"></ion-icon>
          </div>
        </div>
      </div>
      {/* Video */}
      <div
        className={`absolute -top-6 -left-[45vw] border-green-700 border-[0.3em] rounded-md ${
          showVid
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-[80vh]"
        } transition-all duration-700 pt-8 bg-green-900`}
      >
        <div className="relative">
          <video className="w-full h-[76vh]" autoPlay loop muted controls>
            <source src="/Measure.mp4" type="video/mp4" />
          </video>
          <div
            onClick={() => setShowVid(false)}
            className="absolute -top-8 right-0 text-white cursor-pointer"
          >
            <ion-icon size="large" name="close-circle-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}
