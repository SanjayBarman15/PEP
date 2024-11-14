import React, { useState } from 'react';

function HeroHeader() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold">
          MyLogo
        </a>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="md:flex md:space-x-6">
            <li>
              <a
                href="/"
                className="block py-2 px-4 text-white hover:bg-black rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/a"
                className="block py-2 px-4 text-white hover:bg-black rounded"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/c"
                className="block py-2 px-4 text-white hover:bg-black rounded"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/l"
                className="block py-2 px-4 text-white hover:bg-black rounded"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeroHeader;
