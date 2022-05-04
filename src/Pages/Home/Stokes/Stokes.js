import React, { useEffect, useState } from "react";
import { Slide } from "react-reveal";
import { Link } from "react-router-dom";
import Stoke from "../Stoke/Stoke";

const Stokes = () => {
  const [stokes, setStokes] = useState([]);

  useEffect(() => {
    fetch("https://stark-journey-45418.herokuapp.com/stoke")
      .then((res) => res.json())
      .then((data) => setStokes(data));
  }, []);
  return (
    <Slide left>
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
        {/* button */}
      </div>
      <button className="mx-auto mt-8 block">
        <Link
          to="/manageStoke"
          class="inline-flex overflow-hidden text-white bg-violet-600 rounded group"
        >
          <span class="px-3.5 py-2 text-white bg-rose-600 group-hover:bg-rose-700 flex items-center justify-center">
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </span>
          <span class="pl-4 pr-5 py-2.5">Manage Item</span>
        </Link>
      </button>
    </Slide>
  );
};

export default Stokes;
