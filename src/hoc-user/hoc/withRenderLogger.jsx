import React, { useEffect } from 'react';

// Higher-Order Component
const withRenderLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(`${WrappedComponent.name} rendered at ${new Date().toLocaleTimeString()}`);
    }, []);

    // Render the wrapped component with all props
    return <WrappedComponent {...props} />;
  };
};

export default withRenderLogger;
