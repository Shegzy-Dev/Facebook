import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-white d-flex justify-content-between ps-3 pe-3 pb-2 pt-2 border-bottom position-static top-0 z-1">
      <div
        className="d-flex align-items-center fw-semibold"
        style={{ flexBasis: '30%' }}
      >
        <img
          src={'/icon.png'}
          alt="ico"
          style={{ width: '45px', height: '45px' }}
        />
        <div
          className="d-flex p-2 ms-2 me-3 bg-light rounded-pill"
          style={{ height: '45px' }}
        >
          {/* <img src={'/vite.svg'} alt="s" className="ms-2" /> */}
          <div className="d-flex align-items-center ms-2">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <input
            type="text"
            className="form-control ms-2 me-2 border-0 bg-light"
            placeholder="Search Facelink"
          />
        </div>
      </div>
      <div
        className="navIcons d-flex align-items-center"
        style={{ flexBasis: '40%' }}
      >
        <div className="nav-button">
          <i class="fa-solid fa-house"></i>
        </div>
        <div className="nav-button">
          <i class="fa-solid fa-video"></i>
        </div>
        <div className="nav-button">
          <i class="fa-solid fa-store"></i>
        </div>
        <div className="nav-button">
          <i class="fa-solid fa-user-group"></i>
        </div>
        <div className="nav-button">
          <i class="fa-solid fa-gamepad"></i>
        </div>
      </div>
      <div
        className="navIcons d-flex align-items-center justify-content-end"
        style={{ flexBasis: '30%' }}
      >
        <div className="nav-button-right bg-light">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className="nav-button-right bg-light">
          <i class="fa-brands fa-facebook-messenger"></i>
        </div>
        <div className="nav-button-right bg-light">
          <i class="fa-solid fa-bell"></i>
        </div>
        <div className="nav-button-right">
          {/* <i class="fa-solid fa-bell"></i> */}
          <img
            src={'/icon.png'}
            alt="ss"
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
