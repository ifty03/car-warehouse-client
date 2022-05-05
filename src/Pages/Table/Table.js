import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const Table = () => {
  return (
    <div>
      <div class="flex flex-col bg-gray-50 pt-8 min-h-screen">
        <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div class="inline-block min-w-full overflow-hidden align-middle ">
            <table class="w-5/6 mx-auto border-b border-gray-300 shadow sm:rounded-lg">
              <thead>
                <tr>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-300 bg-gray-100">
                    Name
                  </th>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-300 bg-gray-100">
                    Quantity
                  </th>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-300 bg-gray-100">
                    Price
                  </th>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-300 bg-gray-100">
                    Edit
                  </th>
                  <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-300 bg-gray-100">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                        <img
                          class="w-10 h-10 rounded-full"
                          src="https://source.unsplash.com/user/erondu"
                          alt="admin dashboard ui"
                        />
                      </div>

                      <div class="ml-4">
                        <div class="text-sm font-medium leading-5 text-gray-900">
                          John Doe
                        </div>
                      </div>
                    </div>
                  </td>

                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    <div class="text-sm leading-5 text-gray-500">
                      john@example.com
                    </div>
                  </td>

                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    <span class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                      Active
                    </span>
                  </td>

                  <td class="px-6 py-4 text-sm leading-5 text-white whitespace-no-wrap border-b border-gray-300">
                    <FiEdit className="text-4xl bg-green-500 p-2 cursor-pointer rounded-full"></FiEdit>
                  </td>
                  <td class="px-6 py-4 text-sm leading-5 text-white whitespace-no-wrap border-b border-gray-300">
                    <RiDeleteBinLine className="text-4xl bg-red-500 p-2 cursor-pointer rounded-full"></RiDeleteBinLine>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
