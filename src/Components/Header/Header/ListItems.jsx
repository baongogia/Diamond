import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductListItems from "./ProductListItems";
import { RingLoader } from "react-spinners";

export const fetchData = async (url, setData) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.results);
  } catch (err) {
    console.error(err);
  }
};

export const fetchData2 = async (url, setData) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      setData(data);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
};

export default function ListItems({ titles }) {
  // Demo API
  const [data, setData] = useState(null);
  const [activeStates, setActiveStates] = useState(
    Array(titles.length).fill(false)
  );
  const [apiUrl, setApiUrl] = useState("http://localhost:3001/api/products");
  // useEffect(() => {
  //   fetchData(apiUrl, setData);
  // }, [apiUrl]);

  // useEffect(() => {
  //   fetchData2(apiUrl, setData);
  // }, [apiUrl]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, [apiUrl]);

  // Hover
  const handleMouseEnter = (index) => {
    let newApiUrl;
    switch (index) {
      case 0:
        newApiUrl = "http://localhost:3001/api/products";
        break;
      case 1:
        newApiUrl = "http://localhost:3001/api/ring";
        break;
      case 2:
        newApiUrl = "http://localhost:3001/api/earing";
        break;
      // Add more cases as needed for other indices
      default:
        newApiUrl = "http://localhost:3001/api/products";
    }
    if (newApiUrl !== apiUrl) {
      setApiUrl(newApiUrl);
    }
    setActiveStates((prevStates) => {
      const newStates = Array(titles.length).fill(false);
      newStates[index] = true;
      return newStates;
    });
  };
  // Active first element
  React.useEffect(() => {
    setActiveStates(titles.map((title, index) => index === 0));
  }, [titles]);

  return (
    <div className="absolute top-8 w-[90%] h-[85%] flex flex-col justify-center items-center">
      {/* Nav list */}
      <ul className="font-sans uppercase flex justify-around w-[77%] mt-14 border-b-[0.1em] border-b-black border-opacity-30 ">
        {titles.map((title, index) => (
          <li
            key={title}
            onMouseEnter={() => handleMouseEnter(index)}
            className={`relative z-10 list-link hover:font-semibold pr-4 cursor-pointer whitespace-nowrap  ${
              activeStates[index] ? "active" : "unactive"
            }`}
          >
            {title}
          </li>
        ))}
      </ul>
      {/* Items */}
      <div className={`w-[80%] mt-5`}>
        {data !== null ? (
          <Slider {...settings}>
            {data.map((list) => (
              <ProductListItems
                key={list.id}
                img={list.image}
                title={list.name}
              />
            ))}
          </Slider>
        ) : (
          <div className="w-full h-[20vh] flex justify-center items-center">
            <RingLoader color="#54cc26" />
          </div>
        )}
      </div>
      {/* Link shop */}
      <div className="absolute title-link h-10 mb-3 cursor-pointer font-serif -bottom-8">
        View all
      </div>
    </div>
  );
}

// Controls & Settings Slider
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-11 -right-8">
      <button className="" onClick={onClick}>
        <div className="flex justify-center items-center p-3">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </button>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-11 -left-8">
      <button className="" onClick={onClick}>
        <div className="flex justify-center items-center p-3">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
      </button>
    </div>
  );
}
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  Swipe: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
