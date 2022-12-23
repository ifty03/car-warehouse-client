import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../src/media/logo.png";
import {
  useAuthState,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loading from "../Shared/Loading/Loading";
import Social from "../Shared/Social/Social";

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  /* check valid user */
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  /* handel user login */
  const handelLogin = async (e) => {
    setError("");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        /* for jwt */
        fetch("https://car-warehouse-server-production.up.railway.app/login", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("accessToken", data?.token);
          });
        // Signed in
        const user = userCredential?.user;
        if (user) {
          toast.success("login successfully");
        }
        e.target.reset();
      })
      .catch((error) => {
        const errorMessage = error?.message;
        if (errorMessage === "Firebase: Error (auth/wrong-password).") {
          setError("Wrong password please try agin");
          toast.error("Wrong password please try agin");
        } else if (errorMessage === "Firebase: Error (auth/user-not-found).") {
          setError("user not-found create an account");
          toast.error("user not-found create an account");
        } else {
          toast.error(errorMessage);
          setError(errorMessage);
        }
      });
  };
  return (
    <div className="bg-gray-50 py-10">
      <div className="block md:w-xl max-w-xs mx-auto p-6 rounded-lg shadow-lg">
        <img className="mx-auto w-20" src={logo} alt="" />
        <h2 className="text-2xl mb-3 font-semibold text-violet-700">Login</h2>
        <form onSubmit={handelLogin}>
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
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="form-group mb-6">
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
              id="exampleInputPassword2"
              placeholder="Password"
            />
            <p className="text-red-500">{error ? error : ""}</p>
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-violet-600 checked:border-violet-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="exampleCheck2"
              >
                Remember me
              </label>
            </div>
            <p
              onClick={async () => {
                if (email) {
                  await sendPasswordResetEmail(email);
                  toast.success("Reset email send");
                } else {
                  toast.error("Please input an email");
                }
              }}
              className="text-blue-600 cursor-pointer hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Forgot password?
            </p>
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
            value="Sign In"
          />

          <p className="text-gray-800 mt-6 text-center">
            Not a member?{" "}
            <Link
              to="/signUp"
              className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
            >
              Register
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

export default Login;
