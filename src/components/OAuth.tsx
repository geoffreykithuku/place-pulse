import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import googleIcon from "../assets/svg/googleIcon.svg";
import facebook from "../assets/svg/facebook.svg";
import { app } from "../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {signInSuccess} from "../redux/user/userSlice";

const OAuth = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  
  const handleGoogle = async() => {
    try { 

      console.log('clicked')
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)

      const result = await signInWithPopup(auth, provider)
      
      const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: result.user.displayName, email: result.user.email , photo: result.user.photoURL}),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));

    } catch (e) {
      toast.error("An error occurred. Please try again later");
    }
  }
  return (
    <div className="text-center shadow-sm shadow-[#b9c5ca] w-full sm:w-[70%] py-5">
      <p className="font-bold text-2xl text-[#d85555]">
        Sign {location.pathname === "/login" ? "In" : "Up"} with{" "}
      </p>

      <button className="border cursor-pointer w-[80%] md:w-[50%] rounded mx-auto mt-3 hover:bg-[#f8f8f8]" onClick={handleGoogle}>
        <img
          src={googleIcon}
          alt=""
          className="w-[30px] h-[30px] mx-auto my-3"
        />
      </button>

      <div className="border cursor-pointer  w-[80%] md:w-[50%] rounded mx-auto my-3 hover:bg-[#f8f8f8]" >
        <img src={facebook} alt="" className="w-[30px] h-[30px] mx-auto my-3" />
      </div>
    </div>
  );
};

export default OAuth;
