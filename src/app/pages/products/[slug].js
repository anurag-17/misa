import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <div>
        {/* Display product details based on the productId */}
        <h1>Product Details</h1>
        <p>Product ID: {slug}</p>
        {/* Add more details of the product */}
      </div>
    </>
  );
};

export default ProductDetails;
