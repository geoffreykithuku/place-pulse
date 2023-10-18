import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PopupInfo from "./PopupInfo";

const PlaceMap = () => {
  const position = {
    lat: -1.2833,
    lng: 36.8167,
  };

  const [center, setCenter] = useState(position);

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
    img: "https://images.pexels.com/photos/4049990/pexels-photo-4049990.jpeg?auto=compress&cs=tinysrgb&w=600",
  };

  const [locations, setLocations] = useState([]);
  const [query, setQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch(`https://geocode.maps.co/search?q=${query}`);
      const data = await response.json();
      setLocations(data);
    };

    if (query.length > 0) {
      fetchLocations();
    }
  }, [query]);

  const handleSearch = (e) => {
    setPlaceholder(e.target.value);
  };

  const handleClick = (e) => {
    setQuery(placeholder);
  };

  useEffect(() => {
    if (locations[0]) {
      let lat = parseFloat(locations[0]?.lat).toFixed(6);
      let lng = parseFloat(locations[0]?.lon).toFixed(6);
      setCenter({
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      });
    }
  }, [locations, query]);

  return (
    <div id="map" className="">
      <div className="mb-4 ">
        <input
          type="search"
          placeholder="Search for a location"
          className="bg-[#eaeaea] px-5 py-2 rounded border-0 ring-0 outline-none"
          onChange={handleSearch}
        />
        <button
          onClick={handleClick}
          className="bg-[#9c9020] text-white px-5 py-2 rounded-md ml-2"
        >
          Search
        </button>
      </div>
      <MapContainer
        center={center}
        zoom={7}
        scrollWheelZoom={false}
        className="w-full h-[450px]"
      >
        <TileLayer
          attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=miqXZcvOx8t01C3g4maN"
        />

        <Marker position={center}>
          <Popup>
            <PopupInfo listing={listing} />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default PlaceMap;
