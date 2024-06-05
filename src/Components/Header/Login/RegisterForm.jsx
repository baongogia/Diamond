import React from "react";
export const Input = (type, label, placeholder) => {
  return (
    <div className="">
      <label className="block mb-8">
        <span className="block text-sm text-zinc-700 opacity-60">{label}</span>
        <input
          type={type}
          required
          placeholder={placeholder}
          className="peer ... outline-none border-b-[0.1em] border-b-black bg-zinc-300 bg-opacity-0 w-full h-[2em]"
        />
      </label>
    </div>
  );
};
export default function RegisterForm() {
  return (
    <div className="w-2/3 h-full bg-zinc-300 bg-opacity-15">
      <div className="flex justify-center font-serif text-sm">
        <div
          className={`absolute top-10 font-serif flex items-center flex-col w-full `}
        >
          {/* Gender */}
          <div className="w-1/4 mb-4 ">
            <label htmlFor="" className="text-zinc-700 opacity-60">
              Title
            </label>
            <div className="w-[70%] flex justify-between">
              <input type="radio" name="choice" value="option1" />
              <label htmlFor="option1">Mr</label>
              <br></br>

              <input type="radio" name="choice" value="option2" />
              <label htmlFor="option2">Mrs</label>
              <br></br>

              <input type="radio" name="choice" value="option3" />
              <label htmlFor="option3">Miss</label>
              <br></br>
            </div>
          </div>

          <form className="w-1/4">
            {/* Name */}
            {Input("text", "First Name*", "GIA")}
            {Input("text", "Last Name*", "BAO")}
            {/* Date */}
            <div className="flex flex-col mb-3">
              <label
                htmlFor="birthdate"
                className="text-zinc-700 opacity-60 mb-2"
              >
                Date Of Birth
              </label>
              <div className="w-full flex justify-between">
                <input
                  type="number"
                  placeholder="DAY"
                  id="day"
                  name="day"
                  min="1"
                  max="31"
                  className="w-[25%] outline-none bg-zinc-300 bg-opacity-0"
                />
                <input
                  type="number"
                  placeholder="MONTH"
                  id="month"
                  name="month"
                  min="1"
                  max="12"
                  className="w-[25%] outline-none bg-zinc-300 bg-opacity-0"
                />
                <input
                  type="number"
                  id="year"
                  name="year"
                  placeholder="YEAR"
                  min="1900"
                  max="2023"
                  className="w-[25%] outline-none bg-zinc-300 bg-opacity-0"
                />
              </div>
            </div>
            {/* Email */}
            {Input("text", "Email Address", "your@gmail.com")}
            {Input("text", "Confirm Email", "your@gmail.com")}
            {/* Password */}
            {Input("password", "Password", "*****")}
            {Input("password", "Confirm Password", "*****")}
            {/* Languages */}
            <label className="">Preferred Language</label>
            <input
              type="text"
              name="myDataList"
              list="myList"
              className="w-full outline-none bg-zinc-300 bg-opacity-0"
              placeholder="English"
            />
            <datalist id="myList">
              <option value="English"></option>
            </datalist>

            <div className="mt-4 mb-4">
              For further information about how we use your personal
              information, please see our Privacy Policy
            </div>

            <div className="">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className=""
              />
              <label htmlFor="vehicle1" className="ml-3">
                I would also like to receive marketing information about
                Cartier’s products or services. We may send you this information
                using email, text, telephone or post. We may also use your
                information to deliver personalized messages or advertising on
                social media or other digital platforms. You can ask us to stop
                marketing at any time.
              </label>
              <br></br>
            </div>
            {/* Create button */}
            <div className="w-full mt-10 flex justify-center items-center">
              <div
                className="bg-black text-center text-white w-full font-semibold px-4 py-2
                 hover:bg-white hover:text-black border-black border-solid border-[0.1em] cursor-pointer transition-colors duration-500"
              >
                Create Account
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
