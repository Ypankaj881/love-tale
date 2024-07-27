import { PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGoogle, FaFacebookF, FaApple, FaFacebook } from "react-icons/fa";

const Login = ({ show, handleClose, handleAgreeClick }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="border-2 border-white rounded-lg">
        <div className=" rounded-lg p-2 bg-gray-800 max-w-sm w-full">
          <div className="bg-white rounded-lg px-1">
            <div className="flex justify-end items-center">
              <button
                className="text-gray-500 hover:text-gray-700 text-2xl"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
            <div className="max-w-sm w-full px-10 py-6">
              <div className="flex justify-center">
                <img src="/logo.jpg" className="h-24" alt="" />
              </div>
              <h1 className="text-3xl font-semibold text-center">Hello</h1>
              <h1 className="text-3xl font-semibold text-pink-500 mb-4 text-center">
                LoveTale !
              </h1>
              <p className="mb-3 leading-5 text-sm text-center">
                By tapping Log In or Continue, You agree to our
                <span>
                  <a className="text-pink-500 underline" href="#">
                    Terms
                  </a>
                </span>
                . Learn how we process your data in our
                <span>
                  <a className="underline text-pink-500" href="#">
                    Privacy Policy
                  </a>
                </span>
                and
                <span>
                  <a className="text-pink-500 underline" href="#">
                    Cookie Policy
                  </a>
                </span>
              </p>
              <div className="flex items-center mb-4">
                <PhoneIcon className="p-1 h-10 border-black border rounded-s border-r-0" />
                <input
                  type="text"
                  className="border border-black rounded-e h-10 p-2 w-full outline-none"
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <button
                onClick={handleAgreeClick}
                className="bg-pink-500 hover:bg-pink-600 text-white py-1 w-full rounded mb-2"
              >
                Login
              </button>
              <div className="flex justify-between text-sm mb-4">
                <a className="text-blue-500" href="">
                  register Now
                </a>
                <a className="text-blue-500" href="">
                  Forgot password?
                </a>
              </div>
              {/* <div className="text-center mb-4">OR</div> */}
              <div className="flex items-center mb-4">
                <div className="border-t border-gray-700 flex-grow mr-2"></div>
                <span className="text-gray-500">or</span>
                <div className="border-t border-gray-700 flex-grow ml-2"></div>
              </div>
              <button className="bg-pink-500 hover:bg-pink-600 text-white py-1 w-full rounded mb-2 flex justify-center items-center">
                <AiFillGoogleCircle size={32} className="mx-[2px]" />{" "}
                <span className="text-xs font-semibold">Login with Google</span>
              </button>
              <button className="border border-black font-semibold py-2 w-full rounded mb-2 flex justify-center items-center">
                <FaFacebook size={24} className="mx-1" />
                <span className="text-xs font-semibold">
                  Login with Facebook
                </span>
              </button>
              <button className="border border-black font-semibold py-2 w-full rounded flex justify-center items-center">
                <FaApple size={24} className="mx-1" />
                <span className="text-xs font-semibold">
                  Login with Apple ID
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
