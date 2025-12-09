import React from 'react';

// import logo from './logo.svg';
import './styles/app.scss';

import LandingHeader from './components/LandingHeader';
import ModeSelection from './components/ModeSelection';

import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

//user authentication
const auth = getAuth();

async function authenticateAsAnonymous() {
  if (!auth.currentUser) {
    await signInAnonymously(auth)
  }
}

function App() {
  const handleHost = async () => {
    // host logic
    await authenticateAsAnonymous();

    const roomReference = await addDoc(collection(db, 'rooms'), {
      createdAt: serverTimestamp(),
      open: true,
      hostId: auth.currentUser?.uid,
    });
    const roomId = roomReference.id; // we'll put this in the url later somehow and this is how users can join

    // page update logic
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
