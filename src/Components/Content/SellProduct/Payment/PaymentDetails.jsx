import React from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentDetails({ title, linkto }) {
  const navigate = useNavigate();
  const now = new Date();
  // Định dạng ngày tháng năm
  const date = now.getDate();
  const month = now.getMonth() + 1; // Vì getMonth() trả về tháng từ 0-11
  const year = now.getFullYear();
  // Định dạng thời gian
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  // Tạo chuỗi đầy đủ
  const formattedDateTime = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
  localStorage.setItem("OrderDate", formattedDateTime);
  return (
    <div className="w-[35vw] h-[80vh] bg-black bg-opacity-5 flex justify-center items-center">
      <div className="w-[90%] h-[93%]">
        <div className="flex w-full justify-between items-center">
          <div className="">
            <div className="text uppercase text-[1.3em]">order summary</div>
            <div className="">2 Items</div>
          </div>
          <div className="font-serif title-link h-10">Modify</div>
        </div>
        {/* Products */}
        <div className="relative w-full flex flex-col h-[31vh] overflow-y-auto mb-4">
          {/* Product 1 */}
          <div className="relative w-full mt-8 flex flex-col sm:flex-row items-start sm:items-center">
            <div
              style={{
                backgroundImage: `url('https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw4c31d446/images/large/c694697eb0fe59438264df232a5bb04c.png?sw=250&sh=250&sm=fit&sfrm=png')`,
              }}
              className="w-full sm:w-[43%] h-[250px] sm:h-full bg-cover bg-center bg-no-repeat"
            ></div>
            <div className="w-full sm:w-[55%] text-[0.8em] h-full mt-4 sm:mt-0 sm:ml-4">
              <div className="w-full flex justify-between">
                <div className="text uppercase text-[1.2em]">Love Bracelet</div>
              </div>
              <div className="font-serif mt-3">Yellow gold</div>
              <div className="mt-3">Size: 16</div>
              <div className="flex font-serif mt-3"></div>
              <div className="text uppercase text-[1.2em] mb-7">100,000$</div>
              <div className="flex items-center border-y-[0.1em] border-x-black w-full h-14">
                <input type="checkbox" name="wrap" id="" />
                <label htmlFor="wrap" className="ml-5 flex items-center">
                  <div className="text mr-2">Add Gift Wrapping</div>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </label>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="relative w-full mt-8 flex flex-col sm:flex-row items-start sm:items-center">
            <div
              style={{
                backgroundImage: `url('https://www.cartier.com/dw/image/v2/BGTJ_PRD/on/demandware.static/-/Sites-cartier-master/default/dw4c31d446/images/large/c694697eb0fe59438264df232a5bb04c.png?sw=250&sh=250&sm=fit&sfrm=png')`,
              }}
              className="w-full sm:w-[43%] h-[250px] sm:h-full bg-cover bg-center bg-no-repeat"
            ></div>
            <div className="w-full sm:w-[55%] text-[0.8em] h-full mt-4 sm:mt-0 sm:ml-4">
              <div className="w-full flex justify-between">
                <div className="text uppercase text-[1.2em]">Love Bracelet</div>
              </div>
              <div className="font-serif mt-3">Yellow gold</div>
              <div className="mt-3">Size: 16</div>
              <div className="flex font-serif mt-3"></div>
              <div className="text uppercase text-[1.2em] mb-7">100,000$</div>
              <div className="flex items-center border-y-[0.1em] border-x-black w-full h-14">
                <input type="checkbox" name="wrap" id="" />
                <label htmlFor="wrap" className="ml-5 flex items-center">
                  <div className="text mr-2">Add Gift Wrapping</div>
                  <ion-icon name="chevron-down-outline"></ion-icon>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Bill info */}
        <div
          className={`w-full h-[25vh] border-black border-[0.1em] flex justify-center items-center`}
        >
          <div className="flex flex-col justify-between items-center w-[90%] h-[80%]">
            <div className="w-full h-[60%] flex flex-col justify-between border-b-black border-b-[0.1em] border-opacity-30">
              <div className="w-full flex justify-between">
                <div className="text uppercase text-[1.3em]">subtotal</div>
                <div className="text uppercase text-[1.3em]">100,000$</div>
              </div>

              <div className="w-full flex justify-between mb-4">
                <div className="text uppercase text-[0.9em]">
                  STANDARD DELIVERY
                </div>
                <div className="text uppercase text-[0.9em]">0,00$</div>
              </div>
            </div>

            <div className="w-full h-1 flex justify-between mt-4 mb-6">
              <div className="font-serif">Sales tax</div>
              <div className="">0,00$</div>
            </div>

            <div className="w-full flex justify-between">
              <div className="text uppercase text-[1.3em]">TOTAL</div>
              <div className="text uppercase text-[1.3em]">200,000$</div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div
            onClick={() => {
              navigate(`${linkto}`);
            }}
            className="bg-black uppercase text-center text-white w-full font-semibold py-1 border-black border-[0.1em]
             cursor-pointer transition-colors duration-500 hover:bg-white hover:text-black"
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}
