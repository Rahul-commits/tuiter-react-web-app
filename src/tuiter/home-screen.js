
import React from "react";
import TuitsList from "./tuits/tuitslist";
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <h2>Home</h2>
      <WhatsHappening/>
      <TuitsList />
    </div>
  );
};

export default HomeScreen;

