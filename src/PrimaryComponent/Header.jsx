import React from 'react';
import { MdSupervisorAccount, MdSearch } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-4">

        {/* Mobile & Tablet: Flex row with logo and icons */}
        <div className="flex justify-between items-center lg:hidden mb-4">
          {/* Logo (left) */}
          <Link to="/">
            <img
              src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/logo.png"
              alt="Fiama Logo"
              className="h-8 object-contain"
            />
          </Link>

          {/* Icons (right) */}
          <div className="flex gap-5 text-2xl text-gray-700">
            <Link to="/account" className="hover:text-[#FF496C] transition">
              <MdSupervisorAccount />
            </Link>
            <Link to="/cart" className="hover:text-[#FF496C] transition">
              <IoCartOutline />
            </Link>
            <Link to="/wishlist" className="hover:text-[#FF496C] transition">
              <FaRegHeart />
            </Link>
          </div>
        </div>

        {/* Large Screen Grid (unchanged) */}
        <div className="hidden lg:grid grid-cols-12 gap-4 items-center">
          {/* Logo */}
          <div className="col-span-3 flex justify-center lg:justify-start">
            <Link to="/">
              <img
                src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/logo.png"
                alt="Fiama Logo"
                className="h-7 object-contain"
              />
            </Link>
          </div>

          {/* Search */}
          <div className="col-span-6">
            <div className="relative w-full max-w-3xl mx-auto">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                <MdSearch className="h-5 w-5" />
              </span>
              <input
                type="text"
                placeholder="Search Product, brands and categories"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm 
                           focus:outline-none focus:ring-2 focus:ring-[#FF496C]"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="col-span-3 flex justify-end gap-6 text-2xl text-gray-700">
            <Link to="/account" className="hover:text-[#FF496C] transition">
              <MdSupervisorAccount />
            </Link>
            <Link to="/cart" className="hover:text-[#FF496C] transition">
              <IoCartOutline />
            </Link>
            <Link to="/wishlist" className="hover:text-[#FF496C] transition">
              <FaRegHeart />
            </Link>
          </div>
        </div>

        {/* Search for sm/md only */}
        <div className="lg:hidden mt-3">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
              <MdSearch className="h-5 w-5" />
            </span>
            <input
              type="text"
              placeholder="Search Product, brands and categories"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm 
                         focus:outline-none focus:ring-2 focus:ring-[#FF496C]"
            />
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
