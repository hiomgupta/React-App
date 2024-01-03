import { Link } from 'react-router-dom';

function Message() {
    const buttonStyle = {
        color: 'white',   // Text color is set to green
        background: 'green' // Background color is set to white
    };

    return (
        <div className="home-container">
            <h1>Hello :)</h1>
            <h2>Nice to see you <span style={{ color: 'green' }}>here</span>!</h2>           
            <Link to="/second"><button style={buttonStyle}>Let's Move forward</button></Link>
        </div>
    );
}

export default Message;
