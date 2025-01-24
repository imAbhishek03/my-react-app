import React from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = true; // Simulate authentication state

    if (!isAuthenticated) {
      return <h3>You need to log in to access this page.</h3>;
    }

    // Render the wrapped component if authenticated
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
