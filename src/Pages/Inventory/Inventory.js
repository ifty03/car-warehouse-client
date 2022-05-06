import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SiAddthis } from "react-icons/si";
import toast from "react-hot-toast";

const Inventory = () => {
  const { inventoryId } = useParams();
  const [stoke, setStoke] = useState({});
  const [addStoke, setAddStoke] = useState(0);

  const handelAddStoke = async (addStoke) => {
    const quantity = parseInt(addStoke) + parseInt(stoke?.quantity);
    const newQuantity = { quantity };
    await fetch(
      `https://stark-journey-45418.herokuapp.com/stoke/${inventoryId}`,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newQuantity),
      }
    )
      .then((res) => res.json())
      .then((data) => toast.success("Stoke updated successfully"));

    /* update stoke in ui */
    fetch(`https://stark-journey-45418.herokuapp.com/stoke/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => setStoke(data));
  };

  /* load target data */
  useEffect(() => {
    fetch(`https://stark-journey-45418.herokuapp.com/stoke/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => setStoke(data));
  }, []);

  const handelDelivered = async () => {
    if (stoke.quantity) {
      const quantity = stoke?.quantity - 1;
      const newQuantity = { quantity };

      /* update stoke in database*/
      await fetch(
        `https://stark-journey-45418.herokuapp.com/stoke/${inventoryId}`,
        {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(newQuantity),
        }
      )
        .then((res) => res.json())
        .then((data) => toast.success("Stoke updated successfully"));

      /* update stoke in ui */
      fetch(`https://stark-journey-45418.herokuapp.com/stoke/${inventoryId}`)
        .then((res) => res.json())
        .then((data) => setStoke(data));
    } else {
      toast.error("Item not available");
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="p-5 mx-auto sm:p-10 md:p-16 bg-coolGray-100 text-coolGray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={stoke?.img}
            alt=""
            className="w-full h-60 sm:h-96 bg-coolGray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-white shadow-md">
            <div className="space-y-2">
              <p className="inline-block text-2xl font-semibold sm:text-3xl">
                Stoke name:{" "}
                <span className="text-violet-600">{stoke?.name}</span>
              </p>
              <p className="text-xs text-coolGray-600">
                By
                <span className="text-xs hover:underline ml-2 text-violet-500">
                  {stoke?.supplier}
                </span>
              </p>
            </div>
            <div className="text-coolGray-800">
              <p className="text-xl my-1">
                <span className="font-semibold mr-1">ID:</span> {stoke?._id}
              </p>
              <p className="text-xl my-1">
                <span className="font-semibold mr-1">Price:</span>{" "}
                {stoke?.price}
              </p>
              <p className="text-xl my-1">
                <span className="font-semibold mr-1">Quantity:</span>{" "}
                {stoke?.quantity}
              </p>
              <p className="text-xl my-1">
                <span className="font-semibold mr-1">Description:</span>{" "}
                {stoke?.description}
              </p>
            </div>
            <div className="md:flex  md:items-center ">
              <div className="flex justify-center">
                <div className="">
                  <div className="input-group relative flex flex-wrap items-stretch w-full ">
                    <input
                      onBlur={(e) => setAddStoke(e.target.value)}
                      type="number"
                      className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                      placeholder="Restock the items"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                    <button
                      onClick={() => handelAddStoke(addStoke)}
                      className="btn inline-block px-4 py-2 bg-violet-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-violet-900 hover:shadow-lg focus:bg-violet-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                      type="button"
                      id="button-addon2"
                    >
                      <SiAddthis className="text-3xl"></SiAddthis>
                    </button>
                  </div>
                </div>
              </div>
              <button
                onClick={handelDelivered}
                className="px-5 py-2.5 lg:mt-0 md:mt-4 relative mx-auto block rounded group overflow-hidden font-medium bg-violet-600 text-white w-fit "
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white">
                  Delivered
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* manage button */}
      <Link
        to="/manageItemMain"
        className="relative px-5 mx-auto block w-fit py-3 mb-10 overflow-hidden font-medium text-white bg-violet-600 border border-violet-500 rounded-lg shadow-inner group"
      >
        <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
        <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
          Manage inventory
        </span>
      </Link>
    </div>
  );
};

export default Inventory;
