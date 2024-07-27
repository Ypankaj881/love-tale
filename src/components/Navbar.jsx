import { ChevronDownIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onLoginClick }) => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showSafetyDropdown, setShowSafetyDropdown] = useState(false);
  const [showLanguageDropdown, setShowLaguageDropdown] = useState(false);

  const toggleProductsDropdown = () =>
    setShowProductsDropdown(!showProductsDropdown);
  const toggleSafetyDropdown = () => setShowSafetyDropdown(!showSafetyDropdown);
  const toggleLanguageDropdown = () =>
    setShowLaguageDropdown(!showLanguageDropdown);

  return (
    <nav className="">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex space-x-10 items-center">
          <Link className="text-3xl font-bold text-pink-500" to="/">
            LoveTale
          </Link>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleProductsDropdown}
                className=" text-white flex items-center"
              >
                Products <ChevronDownIcon className="h-5 w-5 ml-1" />
              </button>
              {showProductsDropdown && (
                <div className=" absolute mt-2 py-2 w-48 bg-white border rounded shadow-lg">
                  <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Feature 1
                  </Link>
                  <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Feature 2
                  </Link>
                  <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Feature 3
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleSafetyDropdown}
                className="text-white flex items-center"
              >
                Safety <ChevronDownIcon className="h-5 w-5 ml-1" />
              </button>
              {showSafetyDropdown && (
                <div className=" absolute mt-2 py-2 w-48 bg-white border rounded shadow-lg">
                  <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Feature 1
                  </Link>
                  <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Feature 2
                  </Link>
                  <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Feature 3
                  </Link>
                </div>
              )}
            </div>
            <Link to="/learn" className="text-white">
              Learn
            </Link>
            <Link to="/download" className="text-white">
              Download
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={toggleLanguageDropdown}
              className="text-white mx-4 flex items-center"
            >
              Language <ChevronDownIcon className="h-5 w-5 ml-1" />
            </button>
            {showLanguageDropdown && (
              <div className=" absolute mt-2 py-2 w-32 bg-white border rounded shadow-lg">
                <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  English
                </Link>
                <Link className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Hindi
                </Link>
              </div>
            )}
          </div>
          <button
            onClick={onLoginClick}
            className="text-white bg-pink-500 hover:bg-pink-600 px-7 py-3 rounded-3xl"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
