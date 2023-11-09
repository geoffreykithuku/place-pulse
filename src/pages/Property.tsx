import React from "react";
import { ShowerHead, Bed, Users, Star } from "lucide-react";

const Property = () => {
  const listing = {
    id: 2,
    name: "Spacious House near Campus",
    location: "456 University Avenue",
    type: "rental",
    bedrooms: 3,
    bathrooms: 2,
    regularPrice: 15000,
    offer: true,
    discountedPrice: 13000,
    people: 0,
    img: "https://images.pexels.com/photos/4049990/pexels-photo-4049990.jpeg?auto=compress&cs=tinysrgb&w=1400",
  };
  return (
    <div className="pt-10 px-5 sm:px-10 md:px-20">
      <header>
        <p className="font-bold text-4xl text-[#8f8f8f] mb-10">
          House House House
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="max-w-[474px] max-h-[476px] w-full">
          <img
            src="https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.webp?b=1&s=170667a&w=0&k=20&c=oEpszLJm7Hk3Q7qshJvde1P6tfaW5EJsmsYzOuuHGR8="
            alt="house"
            className="w-full  object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col gap-5 text-[#8f8f8f] p-3 ">
          <p className="font-semibold text-xl text-[#b85a5a]">{listing.name}</p>
          <p className="">{listing.location}</p>
          <p className="">
            {listing.type === "rental" ? "Rent: " : "Hostel: "}
            Ksh.{" "}
            {listing.offer ? listing.discountedPrice : listing.regularPrice}/
            month
          </p>
          <div className="flex gap-5">
            <div>
              <Bed />
              <p className="">
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} Bedrooms`
                  : "1 Bedroom"}
              </p>
            </div>
            <div>
              <ShowerHead />
              <p className="">
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} Bathrooms`
                  : "1 Bathroom"}
              </p>
            </div>
          </div>
          {listing.type === "hostel" && (
            <div>
              <Users />
              <p className="">
                {listing.people > 1
                  ? `Shared with ${listing.people} people`
                  : ""}
              </p>
            </div>
          )}
          <div className="flex gap-5">
            <Star color="#eeff00" strokeWidth={3} />
            <Star color="#eeff00" strokeWidth={3} />
            <Star color="#eeff00" strokeWidth={3} />
            <Star color="#eeff00" strokeWidth={3} />
            <Star color="#eeff00" strokeWidth={3} />
          </div>
          <div className="flex gap-5 flex-wrap">
            <button className="text-white bg-[#8f8f8f] px-5 py-2 rounded font-semibold flex gap-4">
              Contact Caretaker
            </button>
            <button className="text-white bg-[#8f8f8f] px-5 py-2 rounded font-semibold flex gap-4">
              Leave a review
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-[#8f8f8f] text-2xl  font-semibold mt-20">
          What Our Clients Say
        </h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            molestias sint, in quidem officiis expedita inventore asperiores?
            Natus eligendi earum porro praesentium, odit ipsa. Necessitatibus
            totam veniam recusandae dolor odit?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Property;
