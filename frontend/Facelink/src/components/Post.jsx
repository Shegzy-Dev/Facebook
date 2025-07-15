import React from 'react';
import './styles/Post.css';

const Post = ({ content, imgsrc, name, time }) => {
  return (
    <div className="rounded-4 bg-light mt-2">
      <div className="p-3 pb-0">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div
              className="bg-success d-flex align-items-center justify-content-center"
              style={{ width: '45px', height: '45px', borderRadius: '50%' }}
            >
              <img src="/icon.png" className="w-100 rounded-circle" />
            </div>
            <div className="d-flex flex-column ms-2">
              <span className="fw-semibold">{name}</span>
              <span>{time}</span>
            </div>
          </div>
          <div className="d-flex">
            <div className="ellipsis me-2 rounded-circle">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div className="cancel ms-2 me-2 rounded-circle">
              <i class="fa-solid fa-x"></i>
            </div>
          </div>
        </div>
        <div className="pt-1 pb-1">
          <p className="m-0">
            {content}
            Wisdom is a principal thing, therefore get wisdom. Wisdom is a
            principal thing, therefore get wisdom. Wisdom is a principal thing,
            therefore get wisdom. Wisdom is a principal thing, therefore get
            wisdom
          </p>
        </div>
      </div>
      <div>
        <img src={imgsrc} alt="lol" className="w-100" />
      </div>
      <div className="pb-3 ps-3 pe-3">
        <div className="d-flex justify-content-between">
          <span>Omo Ayo and 30 others</span>
          <span>1 comment 1 share</span>
        </div>
        <hr />
        <div className="d-flex justify-content-around">
          <div className="interact-btn">
            <i class="fa-solid fa-thumbs-up me-1"></i> Like
          </div>
          <div className="interact-btn">
            <i class="fa-solid fa-comment me-1"></i> Comment
          </div>
          <div className="interact-btn">
            <i class="fa-solid fa-share me-1"></i> Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
