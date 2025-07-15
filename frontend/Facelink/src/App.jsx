// import { useState } from 'react';
import './App.css';

import TopBar from './components/TopBar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className="h-100">
        <TopBar></TopBar>
        <div className="d-flex">
          <Home></Home>
        </div>
      </div>
    </>
  );
}

export default App;
