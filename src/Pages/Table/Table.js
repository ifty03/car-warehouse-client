import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import toast from "react-hot-toast";

const Table = () => {
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

  /* delete a stock */
  const handelDelete = (id) => {
    const agree = window.confirm("Are you sure delete this stoke?");
    if (agree) {
      fetch(`https://stark-journey-45418.herokuapp.com/stoke/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          setUpdate(!update);
          toast.success("item deleted successfully");
        });
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="flex flex-col bg-gray-50 pt-8 min-h-screen">
        <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div class="inline-block min-w-full overflow-hidden align-middle ">
            <table class="w-5/6 mx-auto border-b border-gray-300 shadow sm:rounded-lg">
              <thead>
                <tr>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-300 bg-gray-100">
                    Name
                  </th>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-300 bg-gray-100">
                    Quantity
                  </th>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-300 bg-gray-100">
                    Price
                  </th>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-300 bg-gray-100">
                    Activity
                  </th>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-300 bg-gray-100">
                    Edit
                  </th>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-300 bg-gray-100">
                    Action
                  </th>
                </tr>
              </thead>

              {stokes.map((stoke) => (
                <tbody key={stoke._id} class="bg-white">
                  <tr>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 w-10 h-10">
                          <img
                            class="w-10 h-10 rounded-full"
                            src={stoke?.img}
                            alt="admin dashboard ui"
                          />
                        </div>

                        <div class="ml-4">
                          <div class="text-sm font-medium leading-5 text-gray-900">
                            {stoke?.name}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      <div class="text-sm leading-5 text-gray-500">
                        {stoke?.quantity}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      <div class="text-sm leading-5 text-gray-500">
                        {stoke?.price}
                      </div>
                    </td>

                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                      <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                        Active
                      </span>
                    </td>

                    <td class="px-6 py-4 text-sm leading-5 text-white whitespace-no-wrap border-b border-gray-300">
                      <Link to={`/inventory/${stoke?._id}`}>
                        <FiEdit className="text-4xl bg-green-500 hover:bg-green-600 p-2 cursor-pointer rounded-full"></FiEdit>
                      </Link>
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-white whitespace-no-wrap border-b border-gray-300">
                      <RiDeleteBinLine
                        onClick={() => handelDelete(stoke?._id)}
                        className="text-4xl bg-red-500 hover:bg-red-600 p-2 cursor-pointer rounded-full"
                      ></RiDeleteBinLine>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
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
    </div>
  );
};

export default Table;
