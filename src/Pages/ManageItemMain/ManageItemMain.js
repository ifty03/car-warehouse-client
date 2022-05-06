import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BiTable } from "react-icons/bi";
import { BiCreditCardFront } from "react-icons/bi";
import "./ManageItemMain.css";

const ManageItemMain = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav class="flex" className="mx-auto w-fit pt-10" aria-label="Breadcrumb">
        <ol
          role="list"
          class="flex overflow-hidden text-gray-700 border border-gray-200 rounded-lg"
        >
          <li class="flex items-center">
            <Link
              class="flex items-center h-10 px-4 transition-colors bg-gray-100 hover:text-gray-900"
              to="/manageItemMain/table"
            >
              <BiTable></BiTable>

              <span class="ml-1.5 font-medium text-xs"> Table </span>
            </Link>
          </li>

          <li class="relative flex items-center">
            <span class="absolute inset-y-0 w-4 h-10 bg-gray-100 -left-px clip">
              {" "}
            </span>

            <Link
              class="flex items-center h-10 pl-8 pr-4 text-xs font-medium transition-colors bg-white hover:text-gray-900"
              to="/manageItemMain/card"
            >
              <BiCreditCardFront className="text-lg mr-2"></BiCreditCardFront>
              <span>Card</span>
            </Link>
          </li>
        </ol>
      </nav>
      <Outlet />
    </div>
  );
};

export default ManageItemMain;
