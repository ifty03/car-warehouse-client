import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import logo from "../../../media/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 divide-y bg-gray-800 text-white">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <Link
              to="/"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <div className="flex items-center justify-center w-24 h-20 ">
                <img src={logo} alt="" />
              </div>
              <span className="self-center text-2xl font-semibold">
                Warehouse
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-coolGray-900">
                Product
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/">Features</Link>
                </li>
                <li>
                  <Link to="/">Integrations</Link>
                </li>
                <li>
                  <Link to="/">Pricing</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-coolGray-900">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/">Privacy</Link>
                </li>
                <li>
                  <Link to="/">Terms of Service</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase text-coolGray-900">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <Link to="/">Public API</Link>
                </li>
                <li>
                  <Link to="/">Documentation</Link>
                </li>
                <li>
                  <Link to="/">Guides</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase text-coolGray-900">Social media</div>
              <div className="flex justify-start text-2xl space-x-3">
                <BsFacebook className="text-blue-700"></BsFacebook>
                <FcGoogle></FcGoogle>
                <AiFillGithub></AiFillGithub>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center text-coolGray-600">
          © 1968 Company Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
