import React from 'react';

const Navleft = ({ children }) => {
  return (
    <div
      className="ps-3"
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

export default Navleft;
