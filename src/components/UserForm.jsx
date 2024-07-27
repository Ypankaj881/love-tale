import React, { useState } from "react";

const UserForm = ({ setShowForm }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    interested: "",
    email: "",
    mobileNo: "",
    gender: "",
    dob: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowForm(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white">
        <div className="flex justify-center items-center py-4">
          <img src="/logo.jpg" className="w-10 h-10" alt="" />
          <h2 className="text-2xl font-bold mb-1">LoveTale</h2>
        </div>
        <hr />
        <form
          onSubmit={handleSubmit}
          className="bg-white p-14  max-w-6xl  mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            <div className="mb-4">
              <label className="block mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border px-4 py-2 w-full rounded outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border px-4 py-2 w-full rounded outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="interested"> Interested In</label>
              <div className="flex space-x-4">
                <label
                  className={`cursor-pointer px-4 py-2 rounded-full border ${
                    formData.interested === "men"
                      ? "bg-pink-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="interested"
                    value="men"
                    checked={formData.interested === "men"}
                    onChange={handleChange}
                    className="hidden"
                  />
                  Men
                </label>
                <label
                  className={`cursor-pointer px-4 py-2 rounded-full border ${
                    formData.interested === "women"
                      ? "bg-pink-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="interested"
                    value="women"
                    checked={formData.interested === "women"}
                    onChange={handleChange}
                    className="hidden"
                  />
                  Women
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border px-4 py-2 w-full rounded outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="mobileNo">
                Mobile Number
              </label>
              <input
                type="text"
                id="mobileNo"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
                className="border px-4 py-2 w-full rounded outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="gender">
                Gender
              </label>
              <div className="flex space-x-4">
                <label
                  className={`cursor-pointer px-4 py-2 rounded-full border ${
                    formData.gender === "male"
                      ? "bg-pink-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    className="hidden"
                  />
                  Male
                </label>
                <label
                  className={`cursor-pointer px-4 py-2 rounded-full border ${
                    formData.gender === "female"
                      ? "bg-pink-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    className="hidden"
                  />
                  Female
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="cursor-pointer block text-gray-700 mb-2"
                htmlFor="dob"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="border px-4 py-2 w-full rounded outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className=" block text-gray-700 mb-2" htmlFor="country">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border px-4 py-2 w-full rounded outline-none"
                required
              />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <div className="border-t border-gray-200 flex-grow mr-2"></div>
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-3xl flex justify-center items-center"
            >
              Submit
            </button>
            <div className="border-t border-gray-200 flex-grow ml-2"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
