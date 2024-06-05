import React, { useEffect, useState } from "react";
import { fetchData } from "../../../Header/Header/ListItems";
import { title } from "../../HomePage/HomePage";
import ProductShopCard from "../../Product/ProductShopCard";

export default function ItemsList() {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    fetchData(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      setTopRated
    );
  }, []);

  return (
    <div className="w-[70vw] h-max">
      <div className="w-full h-full grid grid-cols-4 gap-4 overflow-hidden">
        {topRated.map((item, index) => (
          <>
            {index === 6 && (
              <div className="col-span-2 w-full mt-2 ml-2">
                <div
                  style={{
                    backgroundImage: `url('https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dw40c3d2ee/plp/jewellery/collections/trinity/insert/04_1920x780_Insert%20cross%20categ_NEL%20&%20SFCC.jpg')`,
                  }}
                  className="w-full h-[40%] bg-cover bg-center mb-10"
                ></div>
                {title(
                  "The Magic Of Sparkle Of Heaven",
                  "Share your love with a heartfelt gesture. Cartier creations celebrate the joy of giving.",
                  "Shop Gifts"
                )}
              </div>
            )}
            <ProductShopCard
              key={item.id}
              id={item.id}
              img={item.backdrop_path}
              name={item.original_title}
              material={item.overview}
              price={item.vote_average}
            />
          </>
        ))}
      </div>
      <div className="mt-12 w-full h-[20vh]">
        <div className="w-full flex flex-col justify-center items-center">
          <img
            src="https://www.cartier.com/on/demandware.static/Sites-CartierUS-Site/-/default/dw2fd9b902/images/panthereCartierImageTransparent.png"
            alt=""
            className="w-1/6"
          />
          <div className="font-serif">Showing 50 / 100 items</div>
        </div>
      </div>
    </div>
  );
}
