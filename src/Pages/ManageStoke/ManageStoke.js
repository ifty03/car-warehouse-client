import React, { useEffect } from "react";
import toast from "react-hot-toast";

const ManageStoke = ({ stoke, setUpdate, update }) => {
  const { name, description, _id, supplier, quantity, price, img } = stoke;
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
  return (
    <div className="">
      <div className="card pb-5 bg-gray-100 shadow-xl rounded-lg">
        <figure className="relative overflow-hidden">
          <img
            className="rounded-lg w-full hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-lg w-5/6 mx-auto mt-5">
          <div className=" flex justify-end">
            <div className="py-1 px-3 border mx-2 rounded-full text-sm">
              Limited
            </div>
            <div className="py-1 px-3 border mx-2 rounded-full text-sm">
              Offer
            </div>
          </div>
          <h2 className="card-title mt-3 text-lg">
            <span className="text-violet-600">{name}</span>
            <span className="py-1 ml-3 px-3 text-sm rounded-full bg-pink-600 text-white">
              {quantity ? "Sold" : "Sold Out"}
            </span>
          </h2>
          <p className="mt-3">
            <span className="font-semibold mr-2">Supplier:</span> {supplier}
          </p>
          <p>
            <span className="font-semibold mr-2">Price:</span> {price}
          </p>
          <p>
            <span className="font-semibold mr-2">Quantity:</span> {quantity}
          </p>
          <p title={description}>
            <span className="font-semibold mr-2">description:</span>{" "}
            {description.slice(0, 70) + "..."}
          </p>
          <button
            onClick={() => handelDelete(_id)}
            className="px-5 mt-4 py-2.5 relative rounded group overflow-hidden font-medium bg-red-600 text-white w-fit ml-auto block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-violet-600 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageStoke;
