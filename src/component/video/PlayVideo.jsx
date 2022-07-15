import React from "react";
import ReactPlayer from "react-player";

function PlayVideo(props) {
  const videoRef = React.useRef();
  return (
    <div className="video-container">
      <ReactPlayer ref={videoRef} url={props.src} controls />
    </div>
  );
}
export default PlayVideo;
