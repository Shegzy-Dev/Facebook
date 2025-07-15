import React from 'react';

const SideNavBtn = ({ Label }) => {
  return (
    <div className="fw-semibold fs-5 mt-3 mb-3">
      <img
        src="/icon.png"
        className="rounded-circle"
        style={{ width: '45px' }}
      />
      <span className="ms-3">{Label}</span>
    </div>
  );
};

export default SideNavBtn;
