import React from "react";
import Slider from "../components/Slider";
import GereMovieList from "../components/GereMovieList";
import ProductionHouse from "../components/ProductionHouse";
const Home = () => {
  return (
    <div className="w-full bg-gray-800 overflow-auto">
      <Slider />
      <ProductionHouse/>
      <GereMovieList/>
    </div>
  );
};

export default Home;
