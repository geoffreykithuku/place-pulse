import AddressPicker from "components/AddressPicker";
import React, { useState } from "react";

const CreateListing = () => {
  const [popup, setPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    type: "",
    bedrooms: 0,
    bathrooms: 0,
    price: 0,
    offer: false,
    people: 0,
    image: "",
  });

  const onClose = (e) => {
    e.preventDefault();
    setPopup(!popup);
  };
  const handlePick = (address) => {
    console.log(address);
    setPopup(!popup);
  };

  return (
    <div className="pt-10 px-5 sm:px-10 md:px-20">
      <h1 className="text-[rgb(143,143,143)] text-4xl font-bold mb-10">
        Create a listing
      </h1>
      <form className="mb-40 grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 mx-auto">
        <div>
          <label htmlFor="name" className="block  mb-2">
            Name
          </label>
          <input
            id="name"
            className="px-5 py-2 rounded-md outline-none border border-solid border-[#8f8f8f] w-full"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="address" className="block  mb-2">
            Address
          </label>
          <input
            id="address"
            className="px-5 py-2 rounded-md outline-none border border-solid border-[#8f8f8f] w-full"
            type="text"
          />
          <button className="text-[#d85555] font-semibold " onClick={onClose}>
            Check available addresses
          </button>
          {popup && <AddressPicker onClose={onClose} onPick={handlePick} />}
        </div>
        <div className="flex justify-start items-center gap-10">
          <div className="flex gap-5 items-center justify-center">
            <label htmlFor="rental">Rental</label>
            <input
              id="rental"
              className="px-5 py-2 rounded-md outline-none border border-solid border-[#8f8f8f]"
              type="radio"
            />
          </div>
          <div className="flex gap-5 items-center justify-center">
            <label className="mb-2 block" htmlFor="hostel">
              Hostel
            </label>
            <input
              id="hostel"
              className="px-5 py-2 rounded-md outline-none border border-solid border-[#8f8f8f]"
              type="radio"
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-between gap-5">
          <div>
            <label className="mb-2 block" htmlFor="bedrooms">
              Bedrooms
            </label>
            <input
              id="bedrooms"
              className="px-5 py-2 rounded-md outline-none  border border-solid border-[#8f8f8f] w-full"
              type="number"
            />
          </div>
          <div>
            <label htmlFor="bathrooms" className="mb-2 block">
              Bathrooms
            </label>
            <input
              id="bathrooms"
              className="px-5 py-2 rounded-md outline-none  border border-solid border-[#8f8f8f] w-full"
              type="number"
            />
          </div>
        </div>
        <div>
          <label htmlFor="price" className="block  mb-2">
            Price
          </label>
          <input
            id="price"
            className="px-5 py-2 rounded-md outline-none border border-solid border-[#8f8f8f] w-full"
            type="price"
          />
        </div>
        <div className="flex items-center justify-center">
          {" "}
          <label htmlFor="offer">Offer</label>
          <input
            id="offer"
            className="px-5 py-2 rounded-md outline-none  border border-solid border-[#8f8f8f] w-full"
            type="checkbox"
          />
        </div>

        <div>
          <label htmlFor="people" className="block  mb-2">
            Number of People
          </label>
          <input
            id="people"
            className="px-5 py-2 rounded-md outline-none border border-solid border-[#8f8f8f] w-full"
            type="number"
          />
        </div>

        <div>
          <label htmlFor="image" className="block  mb-2">
            Choose an Image
          </label>
          <input
            id="image"
            className="px-5 py-2 rounded-md outline-none border border-solid border-[#8f8f8f] w-full"
            type="file"
          />
        </div>
        <button
          className="text-white bg-[#8f8f8f] px-5 py-2 rounded font-semibold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateListing;
