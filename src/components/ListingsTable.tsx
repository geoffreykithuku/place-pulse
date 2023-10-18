import React from "react";

const ListingsTable = ({ listings }) => {
  return (
    <div>
      <p className="text-[#8f8f8f] text-2xl  font-semibold mb-3">My listings</p>
      <div>
        <ul className="bg-[#8f8f8f] bg-opacity-5 rounded-md p-5 w-full">
          {listings.map((listing) => {
            return (
              <li className="text-[#b85454] flex gap-5 w-full border-b py-2">
                <span>{listing.id}. </span>
                <span>{listing.name}</span>
                <span className="ml-auto gap-5 flex">
                  <button>Edit</button>
                  <button>Delete</button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListingsTable;
