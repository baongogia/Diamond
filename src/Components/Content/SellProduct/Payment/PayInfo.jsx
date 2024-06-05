import React from "react";
import { Input } from "../../../Header/Login/RegisterForm";

export default function PayInfo() {
  return (
    <div className="ml-8 mt-8 w-[55%]">
      <div className="w-full mb-4">
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
      {Input("text", "First Name", "GIA")}
      {Input("text", "Last Name", "BAO")}
      {Input("text", "", "Address Line 1")}
      {Input("text", "", "Address Line 2")}
      <div className="-mt-4 mb-2">
        <label className="font-serif text-zinc-500">Country</label>
        <input
          type="text"
          name="myDataList"
          list="myList"
          className="w-full outline-none bg-zinc-300 bg-opacity-0"
          placeholder="Viet Nam"
        />
        <datalist id="myList">
          <option value="Viet Nam"></option>
        </datalist>
      </div>

      {Input("text", "", "City")}
      {Input("text", "", "State")}
      {Input("text", "", "Zip Code")}
    </div>
  );
}
