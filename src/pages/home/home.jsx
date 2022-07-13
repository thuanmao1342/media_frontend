import React from "react";
import HomeComponent from "../../component/home/HomeComponent";

function Home() {
  return (
    <React.Fragment>
      <HomeComponent />
      {Array(50).fill(0).map((_, index) => (
        <div style={{display: 'inline'}} key={index}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum atque aliquam impedit! Sapiente veniam nostrum magni consequuntur quam explicabo dignissimos dolorem, quibusdam, natus obcaecati id similique ex harum et autem!</div>
      ))}
    </React.Fragment>
  );
}

export default Home;