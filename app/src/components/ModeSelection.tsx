import React from "react";
import { useState } from 'react';

type ModeSelectionProps = {
  onHost: () => void;
  onJoin: (roomId: string) => void;
};


const ModeSelection = ({onHost, onJoin}: ModeSelectionProps) => {
    //prop for typed in text
    const [joinId, setJoinId] = useState('');


    return (
        <>
            <div className='host-rectangle'>
                Host a Meeting
                <button type="button" onClick={onHost}>Host</button>
            </div>
            <div className='join-rectangle'>
                Join a Meeting
                <input 
                name="join_input_field" 
                value={joinId}
                onChange={(e) => setJoinId(e.target.value)}
                />
                <button type="button" onClick={() => onJoin(joinId)}>Join</button>
            </div>
        </>
    )
}

export default ModeSelection;