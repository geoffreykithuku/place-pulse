import React from "react";

import { FileEdit, Trash2 } from "lucide-react";
const ListingsTable = ({ listings }) => {
  return (
    <div>
      <p className="text-[#8f8f8f] text-2xl  font-semibold mb-3">My listings</p>
      <div>
        <ul className="bg-[#8f8f8f] bg-opacity-5 rounded-md p-5 w-full">
          {listings.map((listing) => {
            return (
              <li className="text-[#b85454] flex gap-5 w-full border-b border-[#b160e6] py-2">
                <span>{listing.id}. </span>
                <span>{listing.name}</span>
                <span className="ml-auto gap-5 flex">
                  <button>
                    <FileEdit size={20} color="#b160e6" strokeWidth={1} />
                  </button>
                  <button>
                    <Trash2 size={20} color="#da4e4e" strokeWidth={1} />
                  </button>
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
