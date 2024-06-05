import React, { useState } from "react";
import axios from "axios";
import ProductCard from "../../Content/Product/ProductCard";
import { RingLoader } from "react-spinners";
import Slider from "react-slick";

export default function SearchList() {
  const API_KEY = "97383386589c92be5ea03bd04fb80db8";
  const [searchQuery, setSearchQuery] = useState("");
  const [timeoutId, updateTimeoutId] = useState();
  const [productList, setProductList] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchString}`
    );
    console.log(response.data.results);
    setProductList(response.data.results);
  };

  const onTextChange = (e) => {
    const value = e.target.value;
    clearTimeout(timeoutId);
    setSearchQuery(value);
    const timeout = setTimeout(() => fetchData(value), 500);
    updateTimeoutId(timeout);
  };

  const totalSlides = 20;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    Swipe: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: (current) => setCurrentSlide(current),
  };
  // Slider Control
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`absolute z-10 top-28 -right-12 ${
          currentSlide === totalSlides - 1 ? "opacity-0" : "opacity-100"
        }`}
      >
        <button className="" onClick={onClick}>
          <div className="bg-green-500 flex justify-center items-center p-4 rounded-full">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div>
        </button>
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`absolute z-10 top-28 -left-12 ${
          currentSlide === 0 ? "opacity-0" : "opacity-100"
        }`}
      >
        <button className="" onClick={onClick}>
          <div className="bg-green-500 flex justify-center items-center p-4 rounded-full">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="absolute top-12 w-screen h-screen">
      {/* Search bar */}
      <div className="w-full h-1/4 bg-white">
        <div className="h-[12em] font-serif">
          <div className="flex h-full flex-col justify-center items-center">
            <div className="flex mt-5">
              <input
                onChange={onTextChange}
                value={searchQuery}
                type="email"
                placeholder="Search products"
                className="outline-none w-[25em] border-b-[0.1em] border-b-black"
              />
              <div
                className="bg-black text-center text-white w-[40%] font-semibold py-1
                 hover:bg-white hover:text-black border-black border-solid border-[0.1em] cursor-pointer transition-colors duration-500"
              >
                SEARCH
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search product list */}
      <div
        className={`pl-14 w-full h-screen overflow-hidden bg-white flex justify-between ${
          productList !== null ? "" : "hidden"
        } ${searchQuery === "" ? "hidden" : ""}`}
      >
        <div className="w-2/3">
          {productList !== null ? (
            <Slider className="w-full" {...settings}>
              {productList.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  img={product.backdrop_path}
                  hovimg={product.poster_path}
                  name={product.original_title}
                  material={product.overview}
                  price={product.vote_average}
                  mini={false}
                />
              ))}
            </Slider>
          ) : (
            <div className="w-screen h-full flex justify-center items-center">
              <RingLoader color="#54cc26" />
            </div>
          )}
        </div>
        {/* Category */}
        <div className="w-1/4 h-full">
          <div className="flex flex-col justify-between w-full h-[40%]">
            <ul className="flex flex-col justify-between w-full h-1/2">
              <div className="text uppercase text-[1.2em]">categories</div>
              <li className="font-serif">Rings in jewelry</li>
              <li className="font-serif">Rings for men in Ring</li>
              <li className="font-serif">Engagement rings in Jewelry</li>
            </ul>
            <ul className="text uppercase flex flex-col justify-between w-full h-1/2 mt-4">
              <div className="text-[1.2em]">Articles</div>
              <li className="">
                WHY DO SCRATCHES APPEAR ON THE STONES IN MY RINGS?
              </li>
              <li className="">23. CALIFORNIA BAN OF EXOTIC SPECIES</li>
              <li className="">CREATIONS WITHOUT LISTED PRICES</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
