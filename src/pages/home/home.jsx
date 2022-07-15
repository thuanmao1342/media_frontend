import React from "react";
import HomeComponent from "../../component/home/HomeComponent";
import PlayVideo from "../../component/video/PlayVideo";

function Home() {
  const urlVideo = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";
  return (
    <React.Fragment>
      <HomeComponent />
      <PlayVideo src={urlVideo}/>
      {Array(50)
        .fill(0)
        .map((_, index) => (
          <div style={{ display: "inline" }} key={index}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum atque
            aliquam impedit! Sapiente veniam nostrum magni consequuntur quam
            explicabo dignissimos dolorem, quibusdam, natus obcaecati id
            similique ex harum et autem!
          </div>
        ))}
    </React.Fragment>
  );
}

export default Home;
