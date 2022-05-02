import React from "react";

const Offer = () => {
  return (
    <div>
      <section class="relative overflow-hidden rounded-tb-3xl rounded-lg lg:mb-20 shadow-2xl lg:mx-20 mx-6 md:mx-16 mb-8 pb-80 lg:pb-0">
        <div class="p-8 ml-auto text-center lg:w-2/3 sm:p-12">
          <p class="text-sm font-semibold tracking-widest uppercase">
            Run with the Stock
          </p>

          <h5 class="mt-6 font-black uppercase">
            <span class="text-5xl text-violet-600 sm:text-6xl">
              Get 20% off
            </span>
            <span class="block mt-2 text-sm">
              On your next order over $1000
            </span>
          </h5>

          <button class="inline-block w-full lg:w-3/6 rounded-md py-4 mt-8 text-sm font-bold tracking-widest text-white uppercase bg-violet-600 ">
            Get Discount
          </button>

          <p class="mt-12 text-xs font-medium text-gray-400 uppercase">
            Offer valid until 24th March, 2022 *
          </p>
        </div>

        <div class="absolute bottom-0 left-0 w-full h-80 lg:h-full lg:w-1/3">
          <img
            alt=""
            class="absolute inset-0 object-cover w-full h-full"
            src="https://www.hyperui.dev/photos/shoe-1.jpeg"
          />
        </div>
      </section>
    </div>
  );
};

export default Offer;
