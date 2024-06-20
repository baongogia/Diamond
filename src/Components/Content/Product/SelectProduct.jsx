import React, { useState, useContext, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Header/Header/Cart/CartContext";
import Select from "react-select";

export default function SelectProduct({ details }) {
  const { id } = useParams();
  const oriSize = details.ProductSize || 0;
  const [size, setSize] = useState({
    value: oriSize,
    label: oriSize.toString(),
  });
  const [showIns, setShowIns] = useState(false);
  const [showMissingMsg, setShowMissingMsg] = useState(false);
  const [redHeart, setRedHeart] = useState(false);
  const [showCer, setShowCer] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showVid, setShowVid] = useState(false);
  const { setShowCart, addToCart } = useContext(CartContext);
  //  Get original size
  useEffect(() => {
    if (oriSize) {
      setSize({ value: oriSize, label: oriSize.toString() });
    }
  }, [oriSize]);
  // Original price
  const oriPrice = details.ProductPrice;
  // Price up
  const calculatePrice = (selectedSize) => {
    return details.UnitSizePrice * (selectedSize - details.ProductSize);
  };
  // Calculate price
  const selectedSize = size ? size.value : oriSize;
  const price =
    selectedSize >= oriSize && selectedSize < 100
      ? oriPrice + calculatePrice(selectedSize)
      : null;

  const formatPrice = (price) => {
    return price ? parseFloat(price).toFixed(2) + "$" : "";
  };
  // Add to cart
  const handleAddToCart = () => {
    if (selectedSize >= oriSize) {
      const product = {
        productID: details.ProductId,
        image: details.Image,
        name: details.ProductName,
        material: details.Material,
        size: selectedSize,
        price: price,
        code: id,
      };
      addToCart(product);
      setShowCart(true);
    }
  };
  // Animation
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const toggleHeart = () => {
    setRedHeart(!redHeart);
  };
  // Miss
  const getMissingSelections = () => {
    let missing = [];
    if (!size) missing.push("Size");
    return missing.join(", ");
  };

  const missingSelections = getMissingSelections();
  const missingMessage =
    missingSelections.length === 1
      ? `Please Select: ${missingSelections[0]}`
      : "Please Select Size";
  // Size to select
  const options = [
    { value: 10, label: "10" },
    { value: 11, label: "11" },
    { value: 12, label: "12" },
    { value: 13, label: "13" },
    { value: 14, label: "14" },
    { value: 15, label: "15" },
    { value: details.ProductSize, label: `${details.ProductSize}` },
  ];

  const handleChange = (selectedOption) => {
    setSize(selectedOption);
  };
  // Css input
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
        {details.ProductName}
      </div>
      <div className="mb-3 Mfont">
        {`${details.Description}, 24K ${details.Material}, ${details.CaratWeight} Carat, ${details.GemOrigin} Origin, Clarity ${details.Clarity},  Color ${details.Color}, ${details.Cut} Cut, For ${details.Gender}.`}
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
        <Select
          placeholder="Select Size"
          options={options}
          onChange={handleChange}
          styles={colourStyles}
          className="text mt-8"
          value={size}
        />
      </div>
      {/* Price */}
      <div className="flex w-full h-[5vh] mt-4 justify-between items-center">
        <div className="text uppercase text-[1.6em] text-green-800">
          {`${formatPrice(price)}`}
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
          onMouseEnter={() => !size && setShowMissingMsg(true)}
          onMouseLeave={() => setShowMissingMsg(false)}
          onClick={handleAddToCart}
          className={`group w-[83%] h-[2.5em] bg-black flex justify-center items-center cursor-pointer ${
            size ? "bg-opacity-100" : "bg-opacity-25 hover:bg-opacity-100"
          } }`}
        >
          <div
            className={`text uppercase ${
              size
                ? "text-white"
                : "text-gray-700 group-hover:text-white group-hover:pointer-events-none"
            }`}
          >
            {showMissingMsg && !size ? missingMessage : "Add to Bag"}
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
      <div className="mt-8 flex flex-col justify-between w-full h-[24vh] font-thin text-[1.1em]">
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
        className={`absolute z-10 -top-3 -left-[40vw] w-[70vw] h-[80vh] border-green-700 border-[0.4em] border-double  ${
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
        className={`absolute top-0 left-0 border-green-700 border-[0.3em] rounded-md ${
          showVid
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-[80vh]"
        } transition-all duration-700 pt-8 bg-green-900`}
      >
        <div className="relative">
          <video className="w-full h-[75.5vh]" autoPlay loop muted controls>
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
