import React from "react";

import googleIcon from "../assets/svg/googleIcon.svg";
import facebook from "../assets/svg/facebook.svg";

import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OAuth = () => {
const location = useLocation()
  return (
    <div className="text-center shadow-sm shadow-[#b9c5ca] w-full sm:w-[70%] py-5">
      <p className="font-bold text-2xl text-[#d85555]">
        Sign {location.pathname === "/login" ? "In" : "Up"} with{" "}
      </p>

      <div className="border cursor-pointer w-[80%] md:w-[50%] rounded mx-auto mt-3 hover:bg-[#f8f8f8]">
        <img
          src={googleIcon}
          alt=""
          className="w-[30px] h-[30px] mx-auto my-3"
        />
      </div>

      <div className="border cursor-pointer  w-[80%] md:w-[50%] rounded mx-auto my-3 hover:bg-[#f8f8f8]">
        <img src={facebook} alt="" className="w-[30px] h-[30px] mx-auto my-3" />
      </div>
    </div>
  );
};

export default OAuth;
