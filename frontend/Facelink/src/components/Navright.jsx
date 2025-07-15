import React from 'react';

const Navright = ({ children }) => {
  return (
    <div
      style={{
        flexBasis: '20%',
        height: '93vh',
        overflow: 'scroll',
      }}
    >
      {children}
    </div>
  );
};

export default Navright;
