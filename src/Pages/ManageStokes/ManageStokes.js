import React, { useEffect, useState } from "react";
import ManageStoke from "../ManageStoke/ManageStoke";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const ManageStokes = () => {
  const [stokes, setStokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState(6);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    fetch(
      `https://stark-journey-45418.herokuapp.com/manageStoke?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStokes(data);
        setLoading(false);
      });
  }, [page, size, update]);
  useEffect(() => {
    fetch(`https://stark-journey-45418.herokuapp.com/stokesCount`)
      .then((res) => res.json())
      .then(({ count }) => {
        const newCount = Math.ceil(count / size);
        setQuantity(newCount);
      });
  }, [size]);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-gray-50">
      <blockquote className="text-2xl pt-4 font-semibold mb-8 italic text-center text-slate-900">
        Our
        <span className="before:block mr-2 mt-5 before:absolute ml-2 before:-inset-1 before:-skew-y-3 before:bg-violet-500 relative inline-block">
          <span className="relative text-white px-2">All</span>
        </span>
        <span>Stokes</span>
      </blockquote>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-11/12 mx-auto">
        {stokes.map((stoke) => (
          <ManageStoke
            key={stoke._id}
            stoke={stoke}
            setUpdate={setUpdate}
            update={update}
          ></ManageStoke>
        ))}
      </div>
      <Link
        to="/addNewItem"
        className="relative px-5 mx-auto block w-fit py-3 mt-10 overflow-hidden font-medium text-white bg-violet-600 border border-violet-500 rounded-lg shadow-inner group"
      >
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
          Add New Item
        </span>
      </Link>
      {/* pagination */}
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
          <option selected value="6">
            6
          </option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
        <span>{"---->"}</span>
      </div>
    </div>
  );
};

export default ManageStokes;
