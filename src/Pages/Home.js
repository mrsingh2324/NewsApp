import React from "react";
import Hero from "../component/Hero";
import FetchData from "../component/FetchData";

const Home = () => {
  return (
    <div>
      <Hero />
      <FetchData cat="general" />
    </div>
  );
};

export default Home;
