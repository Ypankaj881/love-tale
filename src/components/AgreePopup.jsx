import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const AgreePopup = ({ show, handleAgree }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full">
        <div className="flex flex-col items-center mb-2">
          <img className="w-16 h-16" src="/logo.jpg" alt="" />
          <h1 className="text-xl font-bold mb-2 mt-[-5px]">
            Welcome To LoveTale
          </h1>
          <h2 className="font-semibold">Please follow these house rules</h2>
        </div>
        <div>
          <div className="flex mb-4">
            <FaCheck size={24} className="text-pink-500 pt-1" />
            <div className="mx-2">
              <h1 className="font-bold ">Be Yourself</h1>
              <p className="leading-5 text-sm ">
                Make sure your photos, age and bio are accurate to who you are
              </p>
            </div>
          </div>
          <div className="flex mb-4">
            <FaCheck size={24} className="text-pink-500 pt-1" />
            <div className="mx-2">
              <h1 className="font-bold ">Stay Safe</h1>
              <p className="leading-5 text-sm">
                Don't be too quick to give out personal information.{" "}
                <span>
                  <Link className="text-blue-700 font-semibold text-sm">
                    Data Safety
                  </Link>
                </span>
              </p>
            </div>
          </div>
          <div className="flex mb-4">
            <FaCheck size={24} className="text-pink-500 pt-1" />
            <div className="mx-2">
              <h1 className="font-bold ">Play it cool</h1>
              <p className="leading-5 text-sm">
                Respect others and treat them as you would like to be treated
              </p>
            </div>
          </div>
          <div className="flex mb-4">
            <FaCheck size={24} className="text-pink-500 pt-1" />
            <div className="mx-2">
              <h1 className="font-bold ">Be proactivef</h1>
              <p className="leading-5 text-sm">Always report bad behaviour</p>
            </div>
          </div>
        </div>
        <div className="px-4">
          <button
            onClick={handleAgree}
            className="text-white font-bold text-xl bg-pink-500 rounded-full w-full py-3 mt-3 "
          >
            I agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgreePopup;
