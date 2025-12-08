import React from 'react';
import logo from './logo.svg';
import './styles/app.scss';

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

import LandingHeader from './components/LandingHeader';
import ModeSelection from './components/ModeSelection';


function App() {
  const handleHost = () => { 

  
  
  };
  const handleJoin = () => { /* logic */};

  return (
    <div className="landing">
      <header className="landing-header">
        <LandingHeader />
      </header>

      <div className='landing-body'>
        <div className='mode-selection'>
          <ModeSelection onHost={handleHost} onJoin={handleJoin}/>
      
        </div>
      </div>
    </div>
  );
}

export default App;
