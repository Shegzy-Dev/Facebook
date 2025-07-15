import React from 'react';
import Navleft from '../components/Navleft';
import Navright from '../components/Navright';
import Middle from '../components/Middle';
import Post from '../components/Post';
import Storycard from '../components/Storycard';

import SideNavBtn from '../components/SideNavBtn';

const Home = () => {
  return (
    <>
      <Navleft>
        <div className="">
          <SideNavBtn Label={'Jason Statham'}></SideNavBtn>
          <SideNavBtn Label={'Meta AI'}></SideNavBtn>
          <SideNavBtn Label={'Friends'}></SideNavBtn>
          <SideNavBtn Label={'Feeds'}></SideNavBtn>
          <SideNavBtn Label={'Groups'}></SideNavBtn>
          <SideNavBtn Label={'Marketplace'}></SideNavBtn>
          <SideNavBtn Label={'Reels'}></SideNavBtn>
          <SideNavBtn Label={'See More'}></SideNavBtn>
          <hr />
          <p className="fs-5 fw-semibold">Your shortcuts</p>
        </div>
      </Navleft>
      <Middle>
        <div>
          <div className="rounded-4 bg-light p-3">
            <div className="d-flex">
              <img
                src={'/icon.png'}
                alt="pp"
                className="m-1 rounded-circle"
                style={{ width: '45px' }}
              />
              <input
                type="text"
                className="form-control m-1 rounded-pill border-0 bg-light"
                placeholder={"What's on your mind?"}
              />
            </div>
            <hr />
            <div className="d-flex justify-content-around">
              <div className="create d-flex align-items-center">
                <i class="fa-solid fa-video m-2 fs-4 text-danger"></i>
                <span>Live Video</span>
              </div>
              <div className="create d-flex align-items-center">
                <i class="fa-solid fa-photo-film m-2 fs-4 text-success"></i>
                <span>Photo/Video</span>
              </div>
              <div className="create d-flex align-items-center">
                <i class="fa-solid fa-clapperboard m-2 fs-4 text-danger"></i>
                <span>Reel</span>
              </div>
            </div>
          </div>
          <div className="mt-2 mb-2" style={{ overflow: 'hidden' }}>
            <div style={{ display: 'inline-flex' }}>
              <Storycard></Storycard>
              <Storycard></Storycard>
              <Storycard></Storycard>
              <Storycard></Storycard>
              <Storycard></Storycard>
              <Storycard></Storycard>
            </div>
          </div>
          <div>
            <Post
              content={'Hi! '}
              imgsrc={'./badge.png'}
              name={'Erinoso Wisdom'}
              time={'1h'}
            ></Post>
            <Post content={'Hi! '}></Post>
            <Post content={'Hi! '}></Post>
            <Post content={'Hi! '}></Post>
          </div>
        </div>
      </Middle>
      <Navright>
        <div className="ps-2 pe-3">
          <div>
            <span className="fs-5 fw-semibold">Friend requests</span>
            <div className="d-flex">
              <div className="w-25">
                <img
                  src="./icon.png"
                  style={{ width: '100%', borderRadius: '50%' }}
                />
              </div>
              <div className="d-flex flex-column justify-content-evenly w-75">
                <div>Aderogba Timileyin</div>
                <div className="d-flex justify-content-evenly">
                  <div
                    className="bg-primary p-2 text-center rounded-3"
                    style={{ width: '45%' }}
                  >
                    Accept
                  </div>
                  <div
                    className="bg-light p-2 text-center rounded-3"
                    style={{ width: '45%' }}
                  >
                    Decline
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <span className="fs-5 fw-semibold">Contacts</span>
              <div className="d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <SideNavBtn Label={'Sade Olu-Abe'}></SideNavBtn>
            <SideNavBtn Label={'Segun Olu-Abe'}></SideNavBtn>
            <SideNavBtn Label={'Joshua Olu-Abe'}></SideNavBtn>
            <SideNavBtn Label={'Jola Olu-Abe'}></SideNavBtn>
            <SideNavBtn Label={'Jade Olu-Abe'}></SideNavBtn>
            <SideNavBtn Label={'Sola Olu-Abe'}></SideNavBtn>
            <SideNavBtn Label={'Dayo Olu-Abe'}></SideNavBtn>
            <SideNavBtn Label={'Dolu Olu-Abe'}></SideNavBtn>
            <SideNavBtn Label={'Dola Olu-Abe'}></SideNavBtn>
            <SideNavBtn Label={'Sayo Olu-Abe'}></SideNavBtn>
            <hr />
            <span className="fs-5 fw-semibold">Community chats</span>
            <SideNavBtn Label={'Indomitable stars'}></SideNavBtn>
            <SideNavBtn Label={'Project Group'}></SideNavBtn>
            <SideNavBtn Label={'Game Devs'}></SideNavBtn>
            <SideNavBtn Label={'Create community'}></SideNavBtn>
            <hr />
            <span className="fs-5 fw-semibold">Group chats</span>
            <SideNavBtn Label={'Indomitable stars'}></SideNavBtn>
            <SideNavBtn Label={'Project Group'}></SideNavBtn>
            <SideNavBtn Label={'Game Devs'}></SideNavBtn>
            <SideNavBtn Label={'Create Group'}></SideNavBtn>
          </div>
        </div>
      </Navright>
    </>
  );
};

export default Home;
