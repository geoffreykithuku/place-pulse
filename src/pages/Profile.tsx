import React, { useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";

import { Home } from "lucide-react";

import Conversation from "components/Conversations";
import listings from "data/listings";
import { useSelector } from "react-redux";

import ListingsTable from "components/ListingsTable";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user.user);

  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    email: currentUser.email,
  });
  const navigate = useNavigate();
  const { username, email } = formData;

  function onLogout() {}

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  async function onSubmit() {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/auth/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email }),
      });
      if (res.ok) {
        toast("Details updated successfully");
      } else {
        const data = await res.json();
        toast(data.message);
      }
    } catch (error) {
      toast("Something went wrong");
    }
  }
  return (
    <div className="pt-10 px-5 sm:px-10 md:px-20">
      <header className="flex items-center justify-between flex-wrap">
        <p className="font-bold text-4xl text-[#8f8f8f] mb-10">My profile</p>

        <span className="flex flex-wrap gap-5">
          <Link
            to="/create"
            className="text-white bg-[#8f8f8f] px-5 py-2 rounded font-semibold flex gap-4 items-center"
          >
            <Home color="#fff" />
            <p>Create a listing</p>
          </Link>
          <button
            onClick={onLogout}
            type="button"
            className="text-white bg-[#8f8f8f] px-5 py-2 rounded font-semibold"
          >
            Log out
          </button>
          {currentUser && (
            <span className="flex  gap-3 bg-[#8f8f8f] px-5 py-2 rounded text-white items-center">
              <img
                src={currentUser.photo}
                alt="profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span>{currentUser.username}</span>
            </span>
          )}
        </span>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
        <div className="max-w-[500px]">
          <div className="flex items-center justify-between py-5">
            <p className="text-[#8f8f8f] text-2xl  font-semibold mb-3">
              Personal Details
            </p>
            <p
              className="text-[#d85555] font-semibold self-end cursor-pointer underline"
              onClick={() => {
                changeDetails && onSubmit();
                setChangeDetails((prev) => !prev);
              }}
            >
              {changeDetails ? "done" : "change"}
            </p>
          </div>
          <div className="">
            <form className="flex flex-col gap-5 mb-20 max-w-[500px]">
              <input
                disabled={!changeDetails}
                value={username}
                onChange={onChange}
                type="text"
                id="username"
                className={
                  !changeDetails
                    ? "profileName"
                    : "px-5 py-2 rounded-md outline-none border border-solid border-[#8f8f8f] w-full"
                }
              />
              <input
                disabled={!changeDetails}
                value={email}
                onChange={onChange}
                type="text"
                id="email"
                className={
                  !changeDetails
                    ? "profileEmail"
                    : "px-5 py-2 rounded-md outline-none border border-solid border-[#8f8f8f] w-full"
                }
              />
            </form>
          </div>
        </div>

        <ListingsTable listings={listings} />
        <Conversation />
      </main>
    </div>
  );
};

export default Profile;
