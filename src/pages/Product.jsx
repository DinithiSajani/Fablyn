import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const { productId } = useParams();
  console.log('Product ID:', productId);

  return (
    <div>
      <h1>Product Page for ID: {productId}</h1>
    </div>
  );
}

export default Product;
