import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../src/media/logo.png";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import Social from "../Shared/Social/Social";

const SignUp = () => {
  const [currentUser, loading] = useAuthState(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (currentUser) {
    navigate(from, { replace: true });
  }
  const handelSignUp = async (e) => {
    setError("");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const check = e.target.check.checked;
    console.log(email, password, check, confirmPassword);
    if (check) {
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            /* for jwt */
            fetch("https://car-warehouse-as-11.web.app/login", {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({ email }),
            })
              .then((res) => res.json())
              .then((data) => {
                localStorage.setItem("accessToken", data?.token);
              });
            sendEmailVerification();
            // Signed in
            const user = userCredential.user;
            setUser(user);
            e.target.reset();
            toast.success("Email verification send");
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
            toast.error(errorMessage);
          });
      } else {
        setError("Password are not matched");
        toast.error("Password are not matched");
      }
    } else {
      toast.error("please accept trams & condition");
    }
  };
  return (
    <div className="bg-gray-50 py-10">
      <div className="block md:w-xl max-w-xs mx-auto p-6 rounded-lg shadow-lg">
        <img className="mx-auto w-20" src={logo} alt="" />
        <h2 className="text-2xl mb-3 font-semibold text-violet-700">Login</h2>
        <form onSubmit={handelSignUp}>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              required
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="grid grid-cols-2">
            <div className="form-group mr-2 mb-6">
              <label
                htmlFor="exampleInputPassword2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputConfirmPassword2"
                placeholder="Password"
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="exampleInputConfirmPassword2"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInputPassword2"
                placeholder="Password"
              />
            </div>
          </div>
          <p className="text-red-500">{error ? error : ""}</p>
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                name="check"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="exampleCheck2"
              >
                Accept all trams & condition
              </label>
            </div>
          </div>
          <input
            className="
      w-full
      px-6
      py-2.5
      bg-gradient-to-r from-violet-500 to-fuchsia-300 hover:from-fuchsia-500 to-violet-300
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      cursor-pointer
      ease-in-out"
            type="submit"
            value="Sign Up"
          />

          <p className="text-gray-800 mt-6 text-center">
            already member?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Login
            </Link>
          </p>
        </form>
        <div className="flex items-center py-2">
          <div style={{ height: "1px" }} className="h-1 w-full bg-slate-600">
            .
          </div>
          <p className="px-4">or</p>
          <div style={{ height: "1px" }} className=" w-full bg-slate-600">
            .
          </div>
        </div>
        <Social></Social>
      </div>
    </div>
  );
};

export default SignUp;
