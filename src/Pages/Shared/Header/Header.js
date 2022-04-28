import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../media/logo.png";

const Header = () => {
  return (
    <div>
      <nav
        className="
  relative
  w-full
  md:px-14
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  "
      >
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <Link
              className="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      "
              to="/"
            >
              <img
                src={logo}
                style={{ height: "24px" }}
                alt=""
                loading="lazy"
              />
            </Link>
            {/* <!-- Left links --> */}
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
              <li className="nav-item p-2">
                <Link
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  to="/"
                >
                  Team
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  to="/"
                >
                  Projects
                </Link>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div className="flex items-center relative">
            {/*   <!-- Icon --> */}
            <div className="dropdown relative">
              <Link
                className="
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          mr-4

          hidden-arrow
          flex items-center
        "
                to="/"
                id="dropdownMenuButton1"
                role="button"
              >
                <svg
                  focusable="false"
                  data-prefix="fas"
                  data-icon="bell"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                  ></path>
                </svg>
                <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
                  1
                </span>
              </Link>
            </div>
            <div className="dropdown relative">
              <Link
                className="dropdown-toggle flex items-center hidden-arrow"
                to="/"
                id="dropdownMenuButton2"
                role="button"
              >
                <img
                  src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                  className="rounded-full"
                  style={{ height: "25px", width: "25px" }}
                  alt=""
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
          {/* <!-- Right elements --> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
