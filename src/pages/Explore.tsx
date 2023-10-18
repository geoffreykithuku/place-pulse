import React, { useEffect } from "react";
import rentCategory from "../assets/jpg/rentCategoryImage.jpg";
import sellCategory from "../assets/jpg/sellCategoryImage.jpg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight } from "lucide-react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import listings from "../data/listings";

import PlaceMap from "components/PlaceMap";

const Explore = () => {
  return (
    <div className="pt-10 px-5 sm:px-10 md:px-20">
      <header className="flex flex-wrap justify-between w-full sm:w-[60%]">
        <h1 className="font-bold text-4xl text-[#8f8f8f] mb-10"> Explore</h1>
      </header>

      <main className="mb-[200px]">
        <h3 className="text-[#8f8f8f] text-2xl  font-semibold mb-3">
          Recommended
        </h3>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mb-20  min-h-[225px]"
        >
          {listings.map((listing) => (
            <SwiperSlide key={listing.id}>
              <Link to={`/house/${listing.id}`}>
                <div className="relative w-full  mx-auto h-[23vw]">
                  <img
                    src={listing.img}
                    alt={listing.name}
                    className="rounded-xl w-full object-cover mx-auto h-full min-h-[200px] object-bottom"
                  />
                  <div className="absolute left-5 top-5 flex flex-row gap-5 flex-wrap">
                    {listing.offer ? (
                      <span className=" bg-[#9c9020] text-white bg-opacity-80 px-5 py-3 rounded-md w-fit font-semibold">
                        {listing.offer ? "Offer!" : null}
                      </span>
                    ) : null}
                    <span className="bg-[#9c9020] text-white bg-opacity-80 px-5 py-3 rounded-md font-semibold">
                      Ksh.{" "}
                      {listing.offer
                        ? listing.discountedPrice
                        : listing.regularPrice}{" "}
                      /=
                    </span>
                    <span className="bg-[#9c9020] text-white bg-opacity-80 px-5 py-3 rounded-md font-semibold">
                      {listing.type}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <h3 className="text-[#8f8f8f] text-2xl  font-semibold mb-3">
          Our Categories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10  mb-10">
          <div className=" mx-auto w-full h-[200px] mb-10">
            <Link to="/category/rental">
              <img
                src={rentCategory}
                alt=""
                className="rounded-xl  w-full h-full object-cover "
              />

              <h3 className="text-[#8f8f8f] text-lg  font-medium mb-3">
                Rentals
              </h3>
            </Link>
          </div>
          <div className=" mx-auto h-[200px] w-full">
            <Link to="/category/hostel">
              <img
                src={sellCategory}
                alt=""
                className="rounded-xl w-full h-full object-cover"
              />
              <h3 className="text-[#8f8f8f] text-lg  font-medium mb-3">
                Hostels
              </h3>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-[#8f8f8f] text-2xl  font-semibold mb-3">
            Our Locations
          </h3>
          {/*google map */}

          <PlaceMap />
        </div>
      </main>
    </div>
  );
};

export default Explore;
