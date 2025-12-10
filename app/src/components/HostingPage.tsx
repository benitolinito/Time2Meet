import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const HostingPage = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    return (
        <>
            <h1> Host Meeting</h1>
            <h2> Meeting details</h2>
            <p> Meeting ID: {state?.roomId} </p>

            <button type="button" onClick={() => navigate('/')}> Back </button>
        </> 
    )
}

export default HostingPage;