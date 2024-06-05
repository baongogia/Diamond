import React, { useEffect, useState } from "react";

export default function SideBar() {
  const [onScroll, setOnScroll] = useState(false);
  const [stop, setStop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setOnScroll(currentScrollY > 380);
      setStop(currentScrollY > 2300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative w-[20%] border-t-[0.1em] border-t-black border-opacity-10">
      <div
        className={`w-full ${
          stop
            ? "absolute bottom-0"
            : onScroll
            ? "fixed top-1"
            : "sticky left-0"
        } `}
      >
        <div className="flex flex-col justify-center items-start">
          <div className="text uppercase mt-5">sort by</div>
          {radioOptions.map((title, index) => (
            <RadioCheck key={index} title={title} index={index} />
          ))}
          <div className="text uppercase mt-5">filter by</div>
          {filterOptions.map((title, index) => (
            <SquareCheck key={index} title={title} index={index} />
          ))}
          <div className="text uppercase mt-5">category</div>
          {categoryOptions.map((title, index) => (
            <SquareCheck key={index} title={title} index={index} />
          ))}
          <div className="text uppercase mt-5">select for</div>
          {selectForOptions.map((title, index) => (
            <SquareCheck key={index} title={title} index={index} />
          ))}
          <div className="text uppercase mt-5">metal</div>
          {metalOptions.map((title, index) => (
            <SquareCheck key={index} title={title} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const RadioCheck = ({ title, index }) => {
  const inputId = `radio${index}`;
  return (
    <div className="flex w-full mt-3">
      <label htmlFor={inputId} className="radio-label">
        <input type="radio" id={inputId} name="radio" className="radio-input" />
        <div className="custom-radio"></div>
        <p className="uppercase hover:underline text-[0.9em] ml-2"> {title}</p>
      </label>
    </div>
  );
};
const SquareCheck = ({ title, index }) => {
  const inputId = `check${index}`;
  return (
    <div className="flex w-full mt-3">
      <label htmlFor={inputId} className="checkbox-label">
        <input
          type="checkbox"
          id={inputId}
          name="check"
          className="checkbox-input"
        />
        <span class="custom-checkbox"></span>
        <p className="uppercase text-[0.9em] hover:underline ml-2">{title}</p>
      </label>
    </div>
  );
};
const radioOptions = ["price low to high", "price high to low", "recommended"];
const filterOptions = ["available online", "new", "try on"];
const categoryOptions = [
  "bracelets",
  "earrings",
  "necklaces",
  "engagement rings",
  "rings",
];
const selectForOptions = ["him", "her"];
const metalOptions = ["white gold", "rose gold", "yellow gold", "platinum"];
