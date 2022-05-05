import React from "react";
import { Slide } from "react-reveal";
import active from "../../../src/media/active .png";

const MostActiceStock = () => {
  return (
    <Slide bottom>
      <section className="bg-coolGray-100 text-coolGray-800">
        <div className=" max-w-2xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-coolGray-900">
              Most Active Stock yet !
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-coolGray-600">
              This stock is most active stock Now.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 mx-auto">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-coolGray-900">
                WMS360:TSLA
              </h3>
              <p className="mt-3 text-lg text-coolGray-600">
                WMS360:TSLA, Inc. is an Bangladeshi automotive and clean energy
                company based in dhaka. WMS360:TSLA designs and manufactures
                electric vehicles, battery energy storage and related products
                and services
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center text-white justify-center w-12 h-12 rounded-md bg-violet-600 text-coolGray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-coolGray-900">
                      Why you chose this stock ?
                    </h4>
                    <p className="mt-2 text-coolGray-600">
                      first, this stock now tranding and we now offer you 20%
                      off
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center text-white justify-center w-12 h-12 rounded-md bg-violet-600 text-coolGray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-coolGray-900">
                      What diffrence this stock
                    </h4>
                    <p className="mt-2 text-coolGray-600">
                      nothing diffrance this stock but we suggest you. you get
                      this stock
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center text-white justify-center w-12 h-12 rounded-md bg-violet-600 text-coolGray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 text-coolGray-900">
                      WMS360:TSLA price now
                    </h4>
                    <p className="mt-2 text-coolGray-600">$ 5,6546</p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0 lg:ml-auto">
              <img
                src={active}
                alt=""
                className="mx-auto gap-10 w-full rounded-lg shadow-lg bg-coolGray-500"
              />
            </div>
          </div>
        </div>
      </section>
    </Slide>
  );
};

export default MostActiceStock;
