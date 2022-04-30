import React from "react";
import { Link } from "react-router-dom";

const Stoke = ({ stoke }) => {
  const { name, description, _id, supplier, quantity, price, img } = stoke;
  return (
    <div className="bg-gradient-to-tl to-violet-100 from-violet-50">
      <div className="card pb-5 bg-base-100 shadow-xl rounded-lg">
        <figure className="relative overflow-hidden">
          <img
            className="rounded-lg hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
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
          <h2 className="card-title text-lg">
            <span className="text-violet-600">{name}</span>
            <span className="py-1 ml-3 px-3 text-sm rounded-full bg-pink-600 text-white">
              New
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
          <p>
            <span className="font-semibold mr-2">description:</span>{" "}
            {description}
          </p>
          <Link
            to={`/inventory/${_id}`}
            className="px-5 mt-4 py-2.5 relative rounded group overflow-hidden font-medium bg-violet-600 text-white w-fit ml-auto block"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white">Update</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Stoke;
