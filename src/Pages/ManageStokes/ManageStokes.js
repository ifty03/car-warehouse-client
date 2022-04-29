import React, { useEffect, useState } from "react";
import ManageStoke from "../ManageStoke/ManageStoke";

const ManageStokes = () => {
  const [stokes, setStokes] = useState([]);
  const [page, setPage] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState(6);
  useEffect(() => {
    fetch(
      `https://stark-journey-45418.herokuapp.com/manageStoke?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setStokes(data));
  }, [page, size]);
  useEffect(() => {
    fetch(`https://stark-journey-45418.herokuapp.com/stokesCount`)
      .then((res) => res.json())
      .then(({ count }) => {
        const newCount = Math.ceil(count / size);
        setQuantity(newCount);
      });
  }, []);
  console.log(quantity);
  return (
    <>
      <blockquote className="text-2xl font-semibold mb-8 italic text-center text-slate-900">
        Our
        <span className="before:block mr-2 mt-5 before:absolute ml-2 before:-inset-1 before:-skew-y-3 before:bg-violet-500 relative inline-block">
          <span className="relative text-white px-2">All</span>
        </span>
        <span>Stokes</span>
      </blockquote>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-11/12 mx-auto">
        {stokes.map((stoke) => (
          <ManageStoke key={stoke._id} stoke={stoke}></ManageStoke>
        ))}
      </div>
      <div className="flex items-center w-fit mx-auto">
        <span>{"<----"}</span>
        {[...Array(quantity).keys()].map((number) => (
          <button
            key={number}
            onClick={() => setPage(number)}
            className={
              page === number
                ? "bg-violet-600 text-white px-2 mx-1 shadow-md my-14"
                : "bg-gray-100 px-2 mx-1 shadow-md my-14"
            }
          >
            {number + 1}
          </button>
        ))}
        <select
          className="bg-gray-100 py-1 shadow-md"
          onChange={(e) => {
            setSize(e.target.value);
          }}
          name="size"
          id="size"
        >
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
        <span>{"---->"}</span>
      </div>
    </>
  );
};

export default ManageStokes;
