import React from "react";


type ModeSelectionProps = {
  onHost: () => void;
  onJoin: () => void;
};


const ModeSelection = ({onHost, onJoin}: ModeSelectionProps) => {
    return (
        <>
            <div className='host-rectangle'>
                Host a Meeting
                <button type="button" onClick={onHost}>Host</button>
            </div>
            <div className='join-rectangle'>
                Join a Meeting
                <button type="button" onClick={onJoin}>Join</button>
            </div>
        </>
    )
}

export default ModeSelection;