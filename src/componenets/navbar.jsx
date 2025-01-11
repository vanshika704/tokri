import  { useState } from 'react';
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  return (
    <div className="min-h-10">
      <div className="antialiased bg-gray-100 dark:bg-gray-900">
        <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
              <a href="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase dark:text-white focus:outline-none focus:shadow-outline">
               TOKRI
              </a>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                  <path
                    className={isOpen ? 'hidden' : 'block'}
                    fillRule="evenodd"
                    d="M3 5h14M3 10h14M3 15h14"
                    clipRule="evenodd"
                  ></path>
                  <path
                    className={isOpen ? 'block' : 'hidden'}
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <nav
              className={`flex-col flex-grow md:flex md:justify-end md:flex-row ${isOpen ? 'flex' : 'hidden'}`}
            >
              <a href="#" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                Home
              </a>
              <a href="#" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                Products
              </a>
              <a href="#" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                Categories
              </a>
              <a href="#" className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                Contact Us
              </a>
              <div className="relative md:ml-4">
                <button
                  onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                  className="flex items-center px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark:bg-transparent dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                  More
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${moreMenuOpen ? 'rotate-180' : 'rotate-0'}`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {moreMenuOpen && (
                  <div className="absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-700">
                    <div className="px-2 pt-2 pb-4">
                      <a href="#" className="block px-4 py-2 text-sm font-semibold text-gray-900 rounded-lg dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                        About Us
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm font-semibold text-gray-900 rounded-lg dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600">
                        FAQ
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex space-x-8 items-center ml-20 mt-2  md:mt-0">
                <FaSearch className="w-5 h-5 text-gray-900 dark:text-gray-200 hover:text-white" />
                <FaShoppingCart className="w-5 h-5 text-gray-900 dark:text-gray-200 hover:text-white" />
                <FaUserCircle className="w-5 h-5 text-gray-900 dark:text-gray-200 hover:text-white" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
