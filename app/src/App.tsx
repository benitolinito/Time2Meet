import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, Navigate, useNavigate } from 'react-router-dom';

// import logo from './logo.svg';
import './styles/app.scss';

import LandingHeader from './components/LandingHeader';
import ModeSelection from './components/ModeSelection';

import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

//different pages
function LandingPage() {
  return <div>Landing</div>
}

function HostingPage() {
  return <div>Landing</div>

}

function JoinedPage() {
  return <div>Landing</div>
}

//user authentication
const auth = getAuth();

async function authenticateAsAnonymous() {
  if (!auth.currentUser) {
    await signInAnonymously(auth)
  }
}


//main app component
function App() {
    const navigate = useNavigate();

    //page router configuration
    <BrowserRouter>
      <nav>
        <Link to="/">Landing</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/hostingPage" element={<HostingPage />} />
        <Route path="/joinedPage" element={<JoinedPage />} />
      </Routes>
    </BrowserRouter>

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
    navigate(`/join/${roomId}`);
  };

  const handleJoin = async (roomId: string) => {
    // join logic
    await authenticateAsAnonymous();
    navigate(`/join/${roomId}`);
  };

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
