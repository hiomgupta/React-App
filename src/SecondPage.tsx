import React from 'react';
import { Link } from 'react-router-dom';

function NewPage() {
    const buttonStyle = {
        color: 'white',   // Text color is set to green
        background: 'green' // Background color is set to white
    };
    
    return (
        <div>
            <h2>Before, We begin</h2>
            <h1 style={{ marginTop: '0' }}>There is a <span style={{ color: 'green' }}>Question?</span></h1>
            <Link to="/third"><button style={buttonStyle}>Answer to Continue!</button></Link>
        </div>
    );
}

export default NewPage;
