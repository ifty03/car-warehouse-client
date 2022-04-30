import React from "react";
import Banner from "./Banner/Banner";
import Stokes from "./Stokes/Stokes";

const Home = () => {
  return (
    <div className=" bg-gradient-to-r from-violet-100 to-violet-50">
      <Banner></Banner>
      <Stokes></Stokes>
    </div>
  );
};

export default Home;
