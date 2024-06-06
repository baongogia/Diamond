import React, { useEffect, useState } from "react";
import IntroVideo from "./IntroVideo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "../Product/ProductCard";
import HomeCard from "./HomeCard";
export const title = (title, info, shop) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="uppercase text-[1.6em] text tracking-wide mb-3"
      >
        {title}
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1100"
        className="tracking-wide mb-3 text-center font-serif"
      >
        {info}
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="title-link h-10 mb-3 cursor-pointer"
      >
        {shop}
      </div>
    </div>
  );
};
export default function HomePage() {
  const [topRated, setTopRated] = useState([]);
  const [univer, setUniver] = useState([]);
  // AOS
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
      offset: 0,
    });
  }, []);
  // Data
  useEffect(() => {
    fetch("http://localhost:3001/api/trinity")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTopRated(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/univer")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUniver(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);
  return (
    <div className="w-screen font-serif">
      {/* Part 1 */}
      <IntroVideo />
      <div className="w-full flex flex-col justify-center items-center pt-8">
        {title(
          "The Magic Of Sparkle Of Heaven",
          "Share your love with a heartfelt gesture. Cartier creations celebrate the joy of giving.",
          "Shop Gifts"
        )}
        {/* Part 2 */}
        <div data-aos="fade-up" className="w-[95%] mt-4">
          <img
            src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dw63dc8afa/homepage/2024/APR%20HP/W2/ACCESSORIES_2560x996.jpg"
            alt=""
          />
        </div>
        <div className="mt-8 mb-4">
          {title(
            "cherished accessories",
            "Adorned with the Maison's emblematic codes, Cartier accessories are a treasured Mother's Day gift.",
            "Shop Accessories"
          )}
        </div>
        {/* Part 3 */}
        <div className="w-[92%] flex justify-between">
          <div data-aos="fade-right" className="w-[90%] mr-8">
            <img
              src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dw1c4ce8a0/homepage/2024/MAY%20HP/W1/03_PUWA11416-SMOKEY-DIAL-SANTOS_HOMEPAGE_ALLWEBSITE_NM_SKY_SMOKED_DOUBLE_MODULE.jpg"
              alt=""
            />
            <div className="mt-4">
              {title(
                "santos de cartier",
                "A pioneering watch that reach new heights.",
                "Shop the collection"
              )}
            </div>
          </div>
          <div data-aos="fade-left" className="w-[90%]">
            <img
              src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dwb63de694/homepage/2024/MAY%20HP/W1/03A_DOUBLE_MODULE_TRINITY_CLOSEUP_MAINS_1680x1377_V1.jpg"
              alt=""
            />
            <div className="mt-4">
              {title(
                "trinity",
                "Cartier honors the 100th aniversary of Trinity and celebrates love in all its forms.",
                "Shop the collection"
              )}
            </div>
          </div>
        </div>
        {/* Part 4 */}
        <div data-aos="zoom-in" className="w-[95%]">
          <img
            src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dw55ea3ae2/homepage/2024/APR%20HP/W2/Personalization__2560x996.jpg"
            alt=""
          />
          <div className="mt-4">
            {title(
              "just for her",
              "Nothing is more precious than a personalized gift engraved or hotstamped with her monogram.",
              "Shop Gifts to Personalize"
            )}
          </div>
        </div>
        {/* Part 5 */}
        <div className="text uppercase text-[1.6em] mt-10 mb-8">
          trinity: 100 years of an icon
        </div>
        <div data-aos="fade-up" className="flex w-[90%] h-full justify-between">
          {topRated.slice(0, 4).map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.image}
              hovimg={item.image}
              name={item.name}
              material={"White Gold, Rose Gold"}
              price={item.price}
              mini={false}
            />
          ))}
        </div>
        {/* Part 6 */}
        <div className="w-[95%] h-[70vh] flex items-center justify-around mt-8">
          <div
            style={{
              backgroundImage: `url("https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dw5e9337af/homepage/2024/MAY%20HP/W1/GENERIC_240312_TRINITY_STORIES_VISUEL_GENERIQUE_1920X1494.jpg")`,
            }}
            data-aos="fade-up"
            className="w-[54%] h-full bg-cover bg-center bg-no-repeat"
          ></div>
          <div className="">
            <div className="flex flex-col items-start">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="uppercase text-[1.6em] text tracking-wide mb-3"
              >
                trinity stories
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1300"
                className="tracking-wide mb-3 text-center"
              >
                Month by month, Cartier reveals the hidden history of Trinity in
                11 episodes.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="title-link h-10 mb-3 cursor-pointer"
              >
                Discover
              </div>
            </div>
          </div>
        </div>
        {/* Part 7 */}
        <div className="text text-[2em] mt-14 mb-5">
          Enter the Cartier universe
        </div>
        <div className="w-[90%]">
          <Slider {...settings}>
            {univer.map((item) => (
              <HomeCard key={item.id} bg={item.image} />
            ))}
          </Slider>
        </div>
        <div
          className="bg-black text-center text-white w-[10%] font-semibold px-4 py-2 uppercase text mt-4 mb-5
                 hover:bg-white hover:text-black border-black border-solid border-[0.1em] cursor-pointer transition-colors duration-500"
        >
          Discover
        </div>
      </div>
    </div>
  );
}
// Slider Control
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-44 -right-12">
      <button className="" onClick={onClick}>
        <div className="bg-black bg-opacity-30 flex justify-center items-center p-3 rounded-full">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </button>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-44 -left-12">
      <button className="" onClick={onClick}>
        <div className="bg-black bg-opacity-30 flex justify-center items-center p-3 rounded-full">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
      </button>
    </div>
  );
}
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3.5,
  slidesToScroll: 3,
  initialSlide: 0,
  Swipe: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
