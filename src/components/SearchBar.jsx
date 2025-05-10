import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection') ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-100 text-center py-4">
      <div className="inline-flex items-center border border-gray-300 bg-white px-4 py-2 mx-3 rounded-full w-3/4 sm:w-1/2 shadow-sm">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
          type="text"
          placeholder="Search"
        />
        <img className="w-4 h-4 ml-2" src={assets.search_icon} alt="Search" />
        <img
          onClick={() => setShowSearch(false)}
          className="w-4 h-4 ml-2 cursor-pointer"
          src={assets.cross_icon}
          alt="Close"
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
