import React from 'react';
import './styles/Storycard.css';

const Storycard = () => {
  return (
    <div className="story-card">
      <div className="profile-pic">
        <img src="/icon.png" className="w-100 rounded-circle" />
      </div>
      <div className="fw-semibold">Erinoso Wisdom</div>
    </div>
  );
};

export default Storycard;
