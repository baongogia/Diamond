import React, { useState } from "react";

export default function EditProfile({ setshow, userData, updateUserData }) {
  const [formData, setFormData] = useState({
    UserName: userData.UserName,
    Gender: userData.Gender,
    FirstName: userData.FirstName,
    LastName: userData.LastName,
    Email: userData.Email,
    Address: userData.Address,
    PhoneNumber: userData.PhoneNumber,
    Birthday: userData.Birthday.slice(0, 10),
  });

  console.log(formData);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    updateUserData(formData);
    setshow(false);
  };

  return (
    <div className="w-full h-full overflow-auto">
      <div className="flex justify-between w-[57%] h-[15%] mt-4 float-right">
        <div className="text uppercase text-[1.3em]">Edit your profile</div>
        <div onClick={() => setshow(false)} className="cursor-pointer mr-4">
          <ion-icon size="large" name="close-outline"></ion-icon>
        </div>
      </div>
      <div className="w-full h-[85%] float-end font-serif flex justify-center items-center">
        <div className="w-[90%] h-full">
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-2">
              <label className="block">UserName:</label>
              <input
                type="text"
                name="UserName"
                value={formData.UserName}
                onChange={handleChange}
                className="outline-none bg-zinc-100 border-b-[0.13em] border-b-green-700 indent-0 rounded p-1 w-full pointer-events-none"
              />
            </div>
            <div className="mb-2">
              <label className="block">Gender:</label>
              <select
                name="Gender"
                value={formData.Gender}
                onChange={handleChange}
                className="outline-none bg-zinc-100 border-b-[0.13em] border-b-green-700 indent-0 rounded p-1 w-full"
              >
                <option value={true}>Male</option>
                <option value={false}>Female</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block">FirstName:</label>
              <input
                type="text"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                className="outline-none bg-zinc-100 border-b-[0.13em] border-b-green-700 indent-0 rounded p-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block">LastName:</label>
              <input
                type="text"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                className="outline-none bg-zinc-100 border-b-[0.13em] border-b-green-700 indent-0 rounded p-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block">Email:</label>
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                className="outline-none bg-zinc-100 border-b-[0.13em] border-b-green-700 indent-0 rounded p-1 w-full pointer-events-none"
              />
            </div>
            <div className="mb-2">
              <label className="block">PhoneNumber:</label>
              <input
                type="text"
                name="PhoneNumber"
                value={formData.PhoneNumber}
                onChange={handleChange}
                className="outline-none bg-zinc-100 border-b-[0.13em] border-b-green-700 indent-0 rounded p-1 w-full"
              />
            </div>
            <div className="mb-2">
              <label className="block">Birthday:</label>
              <input
                type="date"
                name="Birthday"
                value={formData.Birthday}
                onChange={handleChange}
                className="outline-none bg-zinc-100 border-b-[0.13em] border-b-green-700 indent-0 rounded p-1 w-full"
              />
            </div>{" "}
            <div className="mb-2">
              <label className="block">Address:</label>
              <input
                type="text"
                name="Address"
                value={formData.Address}
                onChange={handleChange}
                className="outline-none bg-zinc-100 border-b-[0.13em] border-b-green-700 indent-0 rounded p-1 w-full"
              />
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={handleSave}
              className="bg-green-700 text-white px-6 text uppercase border border-green-700
              hover:bg-white hover:text-green-700 transition-all duration-500 py-2 mb-4 rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
