import React from 'react';
import logo from './logo.svg';
import './styles/app.scss';

import LandingHeader from './components/LandingHeader';
import ModeSelection from './components/ModeSelection';



function App() {


  const handleHost = () => { /* logic, this is where we gonna implement creating a room using db */};
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
