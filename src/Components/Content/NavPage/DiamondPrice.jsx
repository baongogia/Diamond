import React from "react";
import { title } from "../HomePage/HomePage";

export default function DiamondPrice() {
  return (
    <div className="relative h-[170vh]">
      <iframe
        src="https://www.diamondse.info/diamond-prices.asp"
        width="1500"
        height="2000"
        className="overflow-hidden -translate-y-[60vh]"
        title="price"
      ></iframe>
      <div
        style={{
          backgroundImage: `url('https://media.tiffany.com/is/image/tiffanydm/2021_Bloomgberg-HP_FWMH-Desktop2?$tile$&wid=2992&fmt=webp')`,
        }}
        className="absolute -bottom-28 w-screen h-[50vh] bg-white bg-cover bg-no-repeat bg-center"
      ></div>
      <div className="absolute bottom-0 left-4 w-[40%]">
        {title(
          "from the source",
          "Handcrafting the world's best diamonds starts with knowing where they come from. We proudly trace 100% of our rough diamonds to known mines and sources.",
          "Follow Your Diamonds's Journey"
        )}
      </div>
    </div>
  );
}
