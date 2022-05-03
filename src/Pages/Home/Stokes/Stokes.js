import React, { useEffect, useState } from "react";
import Stoke from "../Stoke/Stoke";

const Stokes = () => {
  const [stokes, setStokes] = useState([]);

  useEffect(() => {
    fetch("https://stark-journey-45418.herokuapp.com/stoke")
      .then((res) => res.json())
      .then((data) => setStokes(data));
  }, []);
  return (
    <>
      <blockquote className="text-2xl font-semibold mb-8 italic text-center text-slate-900">
        Our
        <span className="before:block before:absolute ml-2 before:-inset-1 before:-skew-y-3 before:bg-violet-500 relative inline-block">
          <span className="relative text-white">Inventory</span>
        </span>
      </blockquote>
      <div className="w-5/6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-7">
        {stokes?.map((stoke) => (
          <Stoke key={stoke._id} stoke={stoke}></Stoke>
        ))}
      </div>
    </>
  );
};

export default Stokes;
