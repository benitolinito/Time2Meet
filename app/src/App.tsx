import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// import logo from './logo.svg';
import './styles/app.scss';

import LandingHeader from './components/LandingHeader';
import ModeSelection from './components/ModeSelection';
import HostingPage from './components/HostingPage';

import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

type LandingPageProps = {
  onHost: () => void;
  onJoin: (roomId: string) => void;
};

function LandingPage({ onHost, onJoin }: LandingPageProps) {
  return (
    <div className="landing">
      <header className="landing-header">
        <LandingHeader />
      </header>

      <div className="landing-body">
        <div className="mode-selection">
          <ModeSelection onHost={onHost} onJoin={onJoin} />
        </div>
      </div>
    </div>
  );
}

function JoinedPage() {
  return <div>Joined</div>;
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
    navigate('/hostingPage', { state: { roomId } });
  };

  const handleJoin = async (roomId: string) => {
    // join logic
    await authenticateAsAnonymous();
    navigate(`/join/${roomId}`);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage onHost={handleHost} onJoin={handleJoin} />}
      />
      <Route path="/hostingPage" element={<HostingPage />} />
      <Route path="/joinedPage" element={<JoinedPage />} />
    </Routes>
  );
}

export default App;
