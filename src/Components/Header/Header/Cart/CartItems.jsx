import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function CartItems({ id }) {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="relative mt-2 flex justify-between items-center w-full h-[30%]">
      {/* Background */}
      <div
        style={{
          backgroundImage: `url('https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw4c31d446/images/large/c694697eb0fe59438264df232a5bb04c.png?sw=250&sh=250&sm=fit&sfrm=png')`,
        }}
        className="w-1/3 h-[90%] bg-green-300 bg-cover bg-center"
      ></div>
      {/* Information */}
      <div className="absolute left-1/3 ml-3">
        <div className="text uppercase">Love bracelet</div>
        <div className="font-serif">Yellow gold</div>
        <div className="font-serif">Size: 18</div>
        <div className="text uppercase">100,000$</div>
      </div>
      {/* Cancel */}
      <div
        onClick={() => removeFromCart(id)}
        className="absolute top-2 right-2 opacity-40 hover:opacity-80 cursor-pointer"
      >
        <ion-icon size="large" name="close-circle-outline"></ion-icon>
      </div>
    </div>
  );
}
