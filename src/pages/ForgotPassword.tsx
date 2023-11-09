import React, { useState } from "react";

import { toast } from "react-toastify";
import { ReactComponent as ArrowRight } from "../assets/svg/keyboardArrowRightIcon.svg";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-20 w-full">
      <header>
        <p className="font-bold text-4xl text-[#8f8f8f] mb-10">
          {" "}
          Forgot Password
        </p>
      </header>
      <main className="">
        <form
          onSubmit={onSubmit}
          className="lex flex-col gap-5 mb-20 w-full p-5 shadow items-start justify-center sm:w-[80%] mx-auto max-w-[400px]"
        >
          <input
            type="email"
            className="px-5 py-2 rounded-md outline-none  border border-solid border-[#8f8f8f] w-full mt-5"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />

          <div className="flex items-center justify-between my-5">
            <button className="text-white bg-[#8f8f8f] px-5 py-2 rounded font-semibold">
              Send reset link
            </button>
            <Link className="text-[#d85555] font-semibold" to="/login">
              Back to Login
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ForgotPassword;
