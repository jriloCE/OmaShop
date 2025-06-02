import React, { useState } from 'react';
import { MdSearch } from "react-icons/md";

function Shopproducts() {
  const [sortOption, setSortOption] = useState('date');

  const handleChange = (e) => {
    setSortOption(e.target.value);
    console.log('Sorting by:', e.target.value);
  };

  return (
    <div className="p-4 mt-28">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <div className="flex items-center justify-center">
          <img
            src="https://tunatheme.com/tf/html/fiama-preview/fiama/img/logo.png"
            alt="logo"
            className="object-contain"
          />
        </div>

        {/* Search Input */}
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <MdSearch className="h-5 w-5 text-gray-500" />
          </span>
          <input
            type="text"
            placeholder="Search Product, brands and categories"
            className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-lg font-medium text-gray-700">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="date">Date</option>
            <option value="profit">Profit</option>
            <option value="loss">Loss</option>
            <option value="ticker">Ticker</option>
          </select>
        </div>

      </div>
    </div>
  );
}

export default Shopproducts;
