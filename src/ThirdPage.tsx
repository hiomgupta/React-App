import React, { useState } from 'react';
import myVideo from 'D:/Web development/react app/QuestionVideo.mp4';

function VideoPlayer() {
  const [showThanksMessage, setShowThanksMessage] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  const videoStyle = {
    width: '100%',
    height: 'auto',
    // borderRadius: '10px',
    border: '4px solid #1a1a1a',
    padding: '10px',
  };

  const handleVideoEnd = () => {
    setShowThanksMessage(true);
  };

  const handleVideoTimeUpdate = (event) => {
    const video = event.target;
    const progress = (video.currentTime / video.duration) * 100;
    setVideoProgress(progress);
  };

  return (
    <div>
      {showThanksMessage ? (
        <div>
          <h2>Thanks for being here!</h2>
        </div>
      ) : (
        <>
          <h2>Answer to move <br /><span style={{ color: 'green' }}>Forward :-)</span></h2>
          <video
            style={videoStyle}
            controls
            autoPlay
            onEnded={handleVideoEnd}
            onTimeUpdate={handleVideoTimeUpdate}
          >
            <source src={myVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 style={{color : 'red'}}>Video Progress: {videoProgress.toFixed(2)}%</h2>
        </>
      )}
    </div>
  );
}

export default VideoPlayer;
