import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');

  // Fetch product data based on the ID
  const fetchProductData = () => {
    const item = products?.find((item) => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]); // set the first image as default
      console.log('Fetched Product:', item);
    }
  };

  useEffect(() => {
    if (products && products.length > 0) {
      fetchProductData();
    }
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product content wrapper */}
      <div className='flex gap-12 flex-col sm:flex-row'>
        
        {/* Image Section */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          
          {/* Thumbnails */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                onClick={() => setImage(img)}
                className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ${
                  image === img ? 'border-2 border-blue-500' : ''
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className='flex-1 flex items-center justify-center'>
            <img
              src={image}
              alt='Main product'
              className='w-full max-h-[500px] object-contain'
            />
          </div>
        </div>
             
        {/* Product Details */}
        <div className='flex-1'>
          <h1 className='text-2xl font-bold mb-4'>{productData.name}</h1>
          <p className='text-lg text-gray-600 mb-2'>{productData.description}</p>
          <p className='text-xl font-semibold text-green-600'>${productData.price}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
