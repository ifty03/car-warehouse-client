import React from "react";
import { Slide } from "react-reveal";
import offerImg from "../../../media/offer .png";

const Offer = () => {
  return (
    <Slide bottom>
      <div>
        <section className="relative overflow-hidden rounded-tb-3xl rounded-lg lg:mb-20 shadow-2xl lg:mx-20 mx-6 md:mx-16 mb-8 pb-80 lg:pb-0">
          <div className="p-8 ml-auto text-center lg:w-2/3 sm:p-12">
            <p className="text-sm font-semibold tracking-widest uppercase">
              Run with the Stock
            </p>

            <h5 className="mt-6 font-black uppercase">
              <span className="text-5xl text-violet-600 sm:text-6xl">
                Get 20% off
              </span>
              <span className="block mt-2 text-sm">
                On your next order over $1000
              </span>
            </h5>

            <button className="inline-block w-full lg:w-3/6 rounded-md py-4 mt-8 text-sm font-bold tracking-widest text-white uppercase bg-violet-600 ">
              Get Discount
            </button>

            <p className="mt-12 text-xs font-medium text-gray-400 uppercase">
              Offer valid until 24th March, 2022 *
            </p>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-80 lg:h-full lg:w-1/3">
            <img
              alt=""
              className="absolute inset-0 object-cover w-full h-full"
              src={offerImg}
            />
          </div>
        </section>
      </div>
    </Slide>
  );
};

export default Offer;
