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

const Social = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  console.log(email);
  /* google provider */
  const [signInWithGoogle, googleUser, googleLoading] =
    useSignInWithGoogle(auth);
  /* facebook provider */
  const [signInWithFacebook, facebookUser, facebookLoading] =
    useSignInWithFacebook(auth);
  /* github provider */
  const [signInWithGithub, githubUser, githubLoading] =
    useSignInWithGithub(auth);
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
          fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email }),
          });
        }}
        className="text-2xl mx-3"
      ></FcGoogle>
      <AiFillGithub className="text-2xl mx-3 cursor-pointer"></AiFillGithub>
    </div>
  );
};

export default Social;
