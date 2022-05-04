import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const MyAddedItem = () => {
  const [user, loading] = useAuthState(auth);
  const [myStocks, setMyStocks] = useState([]);
  const [fevorite, setFevorite] = useState(0);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    if (!loading) {
      fetch("https://stark-journey-45418.herokuapp.com/myStock", {
        headers: {
          authorization: `${user?.email} ${localStorage.getItem(
            "accessToken"
          )}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setMyStocks(data));
    }
  }, [loading, update, user]);

  //  remove a item from my Stock
  const handelDeleteMyItem = (id) => {
    const agree = window.confirm("Are you sure delete this item");
    if (agree) {
      fetch(`https://stark-journey-45418.herokuapp.com/myItem/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Item delete successfully");
          setUpdate(!update);
        });
    }
  };

  return (
    <div className="">
      {/* my added items */}
      <div className="flex flex-col max-w-4xl mx-auto md:p-10 lg:p-0 lg:pt-6 pt-6 space-y-4 bg-coolGray-50 text-coolGray-800">
        <h2 className="text-xl ml-6 font-semibold">Your Added Stock</h2>
        <ul className="flex flex-col divide-y divide-coolGray-300">
          {myStocks.map((myStock) => (
            <li
              key={myStock._id}
              className="flex flex-col bg-gray-50 p-6 sm:flex-row sm:justify-between "
            >
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-coolGray-500"
                  src={myStock?.img}
                  alt="Polaroid camera"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {myStock?.name}
                      </h3>
                      <p className="text-sm text-violet-600">
                        {myStock.supplier}
                      </p>
                      <p className="text-sm text-colGray-600 pb-4">
                        {user?.email}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">{myStock?.price}</p>
                      <p className="text-sm line-through text-coolGray-400">
                        {myStock?.price + 0}
                      </p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      onClick={() => handelDeleteMyItem(myStock?._id)}
                      type="button"
                      className="flex items-center text-red-500 px-2 py-1 pl-0 space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4 fill-current"
                      >
                        <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                        <rect width="32" height="200" x="168" y="216"></rect>
                        <rect width="32" height="200" x="240" y="216"></rect>
                        <rect width="32" height="200" x="312" y="216"></rect>
                        <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                      </svg>
                      <span>Remove</span>
                    </button>
                    <button
                      onClick={() => setFevorite(myStock?._id)}
                      type="button"
                      className="flex items-center px-2 py-1 space-x-1"
                    >
                      {fevorite === myStock?._id ? (
                        <MdFavorite className="text-lg text-rose-600"></MdFavorite>
                      ) : (
                        <MdFavoriteBorder className="text-lg"></MdFavoriteBorder>
                      )}
                      <span>Add to favorites</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total Added Stock:
            <span className="font-semibold">{myStocks.length}</span>
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <Link
            to="/home"
            className="px-6 py-2 border rounded-md hover:bg-violet-600 hover:text-white border-violet-600"
          >
            Back <span className="sr-only sm:not-sr-only"> to Home</span>
          </Link>
          <button
            type="button"
            className="px-6 py-2 border rounded-md bg-violet-600 text-white border-violet-600"
          >
            <span className="sr-only sm:not-sr-only">Add More </span> Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAddedItem;
