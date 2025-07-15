import React from 'react';

const Middle = ({ children }) => {
  return (
    <div
      style={{
        padding: '10px 200px',
        overflow: 'scroll',
        height: '93vh',
        flexBasis: '60%',
      }}
    >
      {children}
    </div>
  );
};

export default Middle;
