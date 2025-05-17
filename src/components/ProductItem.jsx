import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  // Use the first image if it's an array, otherwise use it as is
  const displayImage = Array.isArray(image) ? image[0] : image;

  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden rounded-lg shadow-sm border">
        <img
          className="hover:scale-110 transition-transform ease-in-out duration-300 w-full h-52 object-contain bg-white"
          src={displayImage}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;
