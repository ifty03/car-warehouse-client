import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SiAddthis } from "react-icons/si";

const Inventory = () => {
  const { inventoryId } = useParams();
  const [stoke, setStoke] = useState();
  const quantity = stoke?.quantity - 1;
  const name = stoke?.name;
  const description = stoke?.description;
  const img = stoke?.img;
  const price = stoke?.price;
  const supplier = stoke?.supplier;
  const updateStoke = { quantity, name, description, price, img, supplier };
  //   const [deliveredCount, setDeliveredCount] = useState(0);
  useEffect(() => {
    fetch(`https://stark-journey-45418.herokuapp.com/stoke/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => setStoke(data));
  }, []);
  const handelDelivered = () => {
    const url = `https://stark-journey-45418.herokuapp.com/stoke/${inventoryId}`;
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateStoke),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  //   console.log(stoke);
  return (
    <div className="bg-gray-50">
      <h2>This is inventory {inventoryId}</h2>
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
                      type="search"
                      className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                      placeholder="Add stoke"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn inline-block px-4 py-2 bg-violet-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
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
                className="px-5 py-2.5 relative mx-auto block rounded group overflow-hidden font-medium bg-violet-600 text-white w-fit "
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
    </div>
  );
};

export default Inventory;
