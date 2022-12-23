import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import {
  useAuthState,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const Social = () => {
  const [user, loading] = useAuthState(auth);
  const email = user?.email;

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  /* google provider */
  const [signInWithGoogle, googleUser, googleLoading] =
    useSignInWithGoogle(auth);
  /* facebook provider */
  const [signInWithFacebook, facebookUser, facebookLoading] =
    useSignInWithFacebook(auth);
  /* github provider */
  const [signInWithGithub, githubUser, githubLoading, gitErr] =
    useSignInWithGithub(auth);
  /* when user login back home */
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="flex justify-center cursor-pointer">
      <BsFacebook
        onClick={async () => {
          await signInWithFacebook();
          toast.success("user created successfully");
        }}
        className="text-2xl mx-3 text-blue-700 cursor-pointer"
      ></BsFacebook>

      <FcGoogle
        onClick={async () => {
          await signInWithGoogle();
          toast.success("login successfully");
          /* for jwt */
          fetch(
            "https://car-warehouse-server-production.up.railway.app/login",
            {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({ email }),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              localStorage.setItem("accessToken", data?.token);
            });
        }}
        className="text-2xl mx-3"
      ></FcGoogle>
      <AiFillGithub
        onClick={async () => {
          await signInWithGithub();
          toast.success("user created successfully");
        }}
        className="text-2xl mx-3 cursor-pointer"
      ></AiFillGithub>
    </div>
  );
};

export default Social;
