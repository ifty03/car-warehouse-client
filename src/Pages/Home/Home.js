import React from "react";
import MostActiceStock from "../MostActiveStock/MostActiceStock";
import Review from "../Notification/Review/Review";
import Banner from "./Banner/Banner";
import Faq from "./Faq/Faq";
import Offer from "./Offer/Offer";
import Stokes from "./Stokes/Stokes";

const Home = () => {
  return (
    <div className="bg-gray-50 from-violet-100 to-violet-50">
      <Banner></Banner>
      <Offer></Offer>
      <Stokes></Stokes>
      <Faq></Faq>
      <Review></Review>
      <MostActiceStock></MostActiceStock>
    </div>
  );
};

export default Home;
