import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SelectProduct from "./SelectProduct";
import AOS from "aos";
import ProductServices from "./ProductServices";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { fetchData } from "../../Header/Header/ListItems";
import { RingLoader } from "react-spinners";

export default function ProductPage() {
  const { id } = useParams();
  const [onScroll, setOnScroll] = useState(false);
  const [stop, setStop] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const [topRated, setTopRated] = useState([]);
  // Get data
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzM4MzM4NjU4OWM5MmJlNWVhMDNiZDA0ZmI4MGRiOCIsInN1YiI6IjY1MjM3NDU2NzQ1MDdkMDBhYzRhOTU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B9vrCoEGitOlsPTq6sfgWxJjEQsfkGN04YR8uO4FLBY",
      },
    };

    fetch("https://api.themoviedb.org/3/movie/123?language=en-US", options)
      .then((response) => response.json())
      .then((response) => setProductDetails(response))
      .catch((err) => console.error(err));
  }, [id]);
  useEffect(() => {
    fetchData(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      setTopRated
    );
  }, []);
  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setOnScroll(currentScrollY > 150);
      setStop(currentScrollY > 1800);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // AOS effect
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);

  const miniImg = () => {
    return (
      <div className="flex mt-4 justify-between">
        <div
          style={{
            backgroundImage: `url('https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw0b044e33/images/large/8e9061d803d459ca81185cc8e9e908b2.png?sw=750&sh=750&sm=fit&sfrm=png')`,
          }}
          className="w-[49%] h-[40vh] bg-green-700 bg-cover bg-center bg-no-repeat"
        ></div>
        <div
          style={{
            backgroundImage: `url('https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw6601bd54/images/large/e0ab227094b3597db29fe5ffd7801606.png?sw=750&sh=750&sm=fit&sfrm=png')`,
          }}
          className="w-[49%] h-[40vh] bg-green-700 bg-cover bg-center bg-no-repeat"
        ></div>
      </div>
    );
  };

  return (
    <div>
      {productDetails ? (
        <div className="">
          <div className="flex">
            {/* Image */}
            <div className="relative w-[50vw] h-max ml-16">
              <div className="">
                <div
                  style={{
                    backgroundImage: `url('https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dwc8f06135/images/large/af03d2f2f37e5479aed7db34efc59478.png?sw=750&sh=750&sm=fit&sfrm=png')`,
                  }}
                  className="w-full h-[88vh] bg-green-700 bg-cover bg-center bg-no-repeat"
                ></div>
              </div>

              {miniImg()}
              {miniImg()}
              {miniImg()}
              {miniImg()}
              {miniImg()}
            </div>
            {/* Buy */}
            <div
              className={`w-[40.1vw] h-[80vh] mr-20 ${
                onScroll ? "translate-y-0" : "translate-y-[20vh]"
              } ${stop ? "sticky top-0" : "fixed right-0 top-0"}`}
            >
              <SelectProduct />
            </div>
          </div>
          {/* More Infor */}
          <div className="w-[95vw] h-[70vh] flex items-center justify-around mt-8 ml-10">
            <div
              style={{
                backgroundImage: `url("https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw32f332a1/images/large/7ce045b164a25f92a272cd48e0128929.png?sw=750&sh=750&sm=fit&sfrm=png")`,
              }}
              data-aos="fade-up"
              className="w-[45%] h-full bg-cover bg-center bg-no-repeat"
            ></div>
            <div className="w-[45%]">
              <div className="flex flex-col items-start">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="uppercase text-[1.6em] text tracking-wide mb-3"
                >
                  rule of three
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1300"
                  className="tracking-wide mb-3 text-start font-serif"
                >
                  Trinity takes center stage with iconic rings, diamond
                  embellishments and geometric details.
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  className="bg-black text-center text-white w-[50%] font-semibold px-4 py-2 border-black border-[0.1em] cursor-pointer transition-colors duration-500 hover:bg-white hover:text-black"
                >
                  Discover the collection
                </div>
              </div>
            </div>
          </div>
          {/* Services */}
          <ProductServices />
          {/* Suggest */}
          <div className="w-full flex flex-col justify-center items-center mt-20">
            <div className="text text-[1.6em] mb-8">YOU MAY ALSO LIKE</div>
            <div className="w-[70%]">
              <Slider {...settings}>
                {topRated.map((item) => (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    img={item.backdrop_path}
                    hovimg={item.poster_path}
                    name={item.original_title}
                    material={item.overview}
                    price={item.vote_average}
                    mini={true}
                  />
                ))}
              </Slider>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <img
              src="https://www.cartier.com/on/demandware.static/Sites-CartierUS-Site/-/default/dw2fd9b902/images/panthereCartierImageTransparent.png"
              alt=""
              className="w-1/6"
            />
          </div>
        </div>
      ) : (
        <div className="w-screen h-[80vh] flex justify-center items-center">
          <RingLoader size={100} color="#54cc26" />
        </div>
      )}
    </div>
  );
}
// Slider Control
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-28 -right-8">
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
    <div className="absolute top-28 -left-12">
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
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  Swipe: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
