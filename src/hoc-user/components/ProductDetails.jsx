import React from 'react';

const ProductDetails = (props) => {
  return (
    <div>
      <h2>Product Details</h2>
      <p>Product Name: {props.productName}</p>
      <p>Price: {props.price}</p>
    </div>
  );
};

export default ProductDetails;
