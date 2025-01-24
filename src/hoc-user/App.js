import React from 'react';
import withRenderLogger from './hoc/withRenderLogger';
import UserProfile from './components/UserProfile';
import ProductDetails from './components/ProductDetails';

// Wrap components using the HOC
const UserProfileWithLogger = withRenderLogger(UserProfile);
const ProductDetailsWithLogger = withRenderLogger(ProductDetails);

const App = () => {
  return (
    <div>
      <UserProfileWithLogger name="Abhishek" age={26} />
      <ProductDetailsWithLogger productName="ReactJS Book" price="$25" />
    </div>
  );
};

export default App;
