import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Input = ({ type, label, placeholder, value, onChange, name }) => {
  return (
    <div className="">
      <label className="block mb-8">
        <span className="block text-sm text-zinc-700 opacity-60">{label}</span>
        <input
          type={type}
          required
          placeholder={placeholder}
          className="peer ... outline-none border-b-[0.1em] border-b-black bg-zinc-300 bg-opacity-0 w-full h-[2em]"
          value={value}
          onChange={onChange}
          name={name}
        />
      </label>
    </div>
  );
};

export default function RegisterForm() {
  const naviagte = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Kiểm tra các điều kiện trước khi gửi
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu không khớp!");
      return;
    }
    try {
      const response = await axios.post(
        "https://localhost:7292/api/Accounts/register",
        formData
      );
      console.log("Registration successful!", response.data);
      if (response) {
        naviagte("/LoginPage");
      }
      // Thực hiện hành động sau khi đăng ký thành công (chuyển hướng, hiển thị thông báo, ...)
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="w-2/3 h-full bg-zinc-300 bg-opacity-15">
      <div className="flex justify-center font-serif text-sm">
        <div className="absolute top-10 font-serif flex items-center flex-col w-full">
          {/* Gender */}
          <div className="w-1/4 mb-4">
            <label htmlFor="" className="text-zinc-700 opacity-60">
              Title
            </label>
            <div className="w-[70%] flex justify-between">
              <input
                type="radio"
                name="title"
                value="Mr"
                onChange={handleChange}
              />
              <label htmlFor="Mr">Mr</label>
              <input
                type="radio"
                name="title"
                value="Mrs"
                onChange={handleChange}
              />
              <label htmlFor="Mrs">Mrs</label>
              <input
                type="radio"
                name="title"
                value="Miss"
                onChange={handleChange}
              />
              <label htmlFor="Miss">Miss</label>
            </div>
          </div>

          <form className="w-1/4" onSubmit={handleSubmit}>
            {Input({
              type: "text",
              label: "First Name*",
              placeholder: "GIA",
              value: formData.firstName,
              onChange: handleChange,
              name: "firstName",
            })}
            {Input({
              type: "text",
              label: "Last Name*",
              placeholder: "BAO",
              value: formData.lastName,
              onChange: handleChange,
              name: "lastName",
            })}

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
                  value={formData.day}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  placeholder="MONTH"
                  id="month"
                  name="month"
                  min="1"
                  max="12"
                  className="w-[25%] outline-none bg-zinc-300 bg-opacity-0"
                  value={formData.month}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  id="year"
                  name="year"
                  placeholder="YEAR"
                  min="1900"
                  max="2023"
                  className="w-[25%] outline-none bg-zinc-300 bg-opacity-0"
                  value={formData.year}
                  onChange={handleChange}
                />
              </div>
            </div>

            {Input({
              type: "text",
              label: "Username*",
              placeholder: "your_username",
              value: formData.username,
              onChange: handleChange,
              name: "username",
            })}
            {Input({
              type: "password",
              label: "Password*",
              placeholder: "*****",
              value: formData.password,
              onChange: handleChange,
              name: "password",
            })}
            {Input({
              type: "password",
              label: "Confirm Password*",
              placeholder: "*****",
              value: formData.confirmPassword,
              onChange: handleChange,
              name: "confirmPassword",
            })}

            <label className="">Preferred Language</label>
            <input
              type="text"
              name="preferredLanguage"
              list="myList"
              className="w-full outline-none bg-zinc-300 bg-opacity-0"
              placeholder="English"
              value={formData.preferredLanguage}
              onChange={handleChange}
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
                id="marketingConsent"
                name="marketingConsent"
                checked={formData.marketingConsent}
                onChange={handleChange}
              />
              <label htmlFor="marketingConsent" className="ml-3">
                I would also like to receive marketing information about
                Eternity’s products or services.
              </label>
            </div>

            <div className="w-full mt-10 flex justify-center items-center">
              <button
                type="submit"
                className="bg-black text-center text-white w-full font-semibold px-4 py-2 hover:bg-white hover:text-black border-black border-solid border-[0.1em] cursor-pointer transition-colors duration-500"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
