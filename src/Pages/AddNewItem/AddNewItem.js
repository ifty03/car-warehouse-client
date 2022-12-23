import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import logo from "../../../src/media/logo.png";
import auth from "../../firebase.init";

const AddNewItem = () => {
  const [user] = useAuthState(auth);
  const handelAddStock = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = "$" + " " + e.target.price.value;
    const quantity = +e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const description = e.target.description.value;
    const email = user.email;
    const img = e.target.img.value;
    const stock = { name, price, quantity, supplier, email, description, img };

    /* set Item in user database */
    fetch("https://car-warehouse-server-production.up.railway.app/addStoke", {
      method: "PUT",
      headers: {
        authorization: `${user?.email} ${localStorage.getItem("accessToken")}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(stock),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset();
        toast.success("New stock added");
      });
  };
  return (
    <div className="bg-gray-50 min-h-screen pt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 w-5/6 mx-auto">
        <div className="md:mt-28 lg:mt-10">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/add-photo-2670583-2215267.png"
            alt=""
          />
        </div>
        <div className="block p-6 rounded-lg bg-gray-100 max-w-md">
          <img className="mx-auto mb-6" src={logo} alt="" />
          <form onSubmit={handelAddStock}>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                  name="name"
                  id="exampleInput123"
                  aria-describedby="emailHelp123"
                  placeholder="Stock name"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="text"
                  className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                  id="exampleInput124"
                  name="supplier"
                  aria-describedby="emailHelp124"
                  placeholder="Supplier name"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group mb-6">
                <input
                  type="number"
                  className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                  name="quantity"
                  id="exampleInput123"
                  aria-describedby="emailHelp123"
                  placeholder="Quantity"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <input
                  type="number"
                  className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                  id="exampleInput124"
                  aria-describedby="emailHelp124"
                  name="price"
                  placeholder="Price"
                  required
                />
              </div>
            </div>

            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                name="img"
                id="exampleInput125"
                placeholder="img url"
                required
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="exampleFormControlTextarea13"
                name="description"
                rows="3"
                placeholder="Description"
                required
              ></textarea>
            </div>

            <div className="form-group form-check text-center mb-6">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-violet-600 checked:border-violet-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                id="exampleCheck25"
                name="check"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="exampleCheck25"
              >
                I read all condition
              </label>
            </div>
            <input
              className="
      w-full
      px-6
      py-2.5
      bg-violet-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-violet-700 hover:shadow-lg
      focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-violet-800 active:shadow-lg
      transition
      cursor-pointer
      duration-150
      ease-in-out"
              type="submit"
              value="Add to stock"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewItem;
