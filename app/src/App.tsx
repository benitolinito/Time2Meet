import React from 'react';
// import logo from './logo.svg';
import './styles/app.scss';

import LandingHeader from './components/LandingHeader';
import ModeSelection from './components/ModeSelection';

import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


function App() {
  const handleHost = async () => { 
    const roomReference = await addDoc(collection(db, 'rooms'), {
      createdAt: serverTimestamp(),
      open: 'True',
    });
    const roomId = roomReference.id;
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
