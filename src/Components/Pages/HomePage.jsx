import React from "react";
import Navbar from "../Shared/Navbar";
import logo from "../../assets/logo.png";
import sDegrees from "../../assets/degrees.webp";
import citrusCafe from "../../assets/citrusCafe.jpg";
import cookBook from "../../assets/cookBookCafe.jpg";
import hello from "../../assets/helloRestrauant-Cafe.webp";
import pind from "../../assets/pind.jpg";
import spiceCourt from "../../assets/spiceCourt.avif";
import takshila from "../../assets/takshila.avif";
import vrihi from "../../assets/vrihiSkydeck.webp";
import Footer from "../Shared/Footer";
import RestaurantCard from "../Shared/RestaurantCard";
import { useState } from "react";

const restaurants = [
  {
    id: 1,
    name: "17 Degrees",
    rating: 4.5,
    cuisine: "North Indian & Asian",
    deliveryTime: 30,
    image: sDegrees,
    location: "Patna",
  },
  {
    id: 2,
    name: "Citrus Cafe",
    rating: 4.2,
    cuisine: "Variety of cuisines",
    deliveryTime: 25,
    image: citrusCafe,
    location: "Patna",
  },
  {
    id: 3,
    name: "Cook Book Cafe",
    rating: 4.8,
    cuisine: "Japanese",
    deliveryTime: 35,
    image: cookBook,
    location: "Patna",
  },
  {
    id: 4,
    name: "Hello Restautant & cafe",
    rating: 4.8,
    cuisine: "Variety of cuisines",
    deliveryTime: 35,
    image: hello,
    location: "Patna",
  },
  {
    id: 5,
    name: "Pind - The Revolving Restaurant",
    rating: 4.8,
    cuisine: "Indian",
    deliveryTime: 35,
    image: pind,
    location: "Mumbai",
  },
  {
    id: 6,
    name: "Spice Court",
    rating: 4.8,
    cuisine: "North Indian and Bihari",
    deliveryTime: 35,
    image: spiceCourt,
    location: "Mumbai",
  },
  {
    id: 7,
    name: "Takshila",
    rating: 4.8,
    cuisine: "Mughlai and North Indian dishes",
    deliveryTime: 35,
    image: takshila,
    location: "Delhi",
  },
  {
    id: 8,
    name: "Vrihi Skydeck-MAGADHI",
    rating: 4.8,
    cuisine: "Chinese and Sichuan cuisine",
    deliveryTime: 35,
    image: vrihi,
    location: "Bangalore",
  },
  {
    id: 9,
    name: "Pind - The Revolving Restaurant",
    rating: 4.8,
    cuisine: "Indian",
    deliveryTime: 35,
    image: pind,
    location: "Patna",
  },
  {
    id: 10,
    name: "Spice Court",
    rating: 4.8,
    cuisine: "North Indian and Bihari",
    deliveryTime: 35,
    image: spiceCourt,
    location: "Patna",
  },
  {
    id: 11,
    name: "Takshila",
    rating: 4.8,
    cuisine: "Mughlai and North Indian dishes",
    deliveryTime: 35,
    image: takshila,
    location: "Jaipur",
  },
  {
    id: 12,
    name: "Vrihi Skydeck-MAGADHI",
    rating: 4.8,
    cuisine: "Chinese and Sichuan cuisine",
    deliveryTime: 35,
    image: vrihi,
    location: "Jaipur",
  },
];

const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState("Patna");

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const filteredData = restaurants.filter(
    (rest) => rest.location === selectedCity
  );

  return (
    <>
      {/*Navbar*/}
      <Navbar />
      {/*Navbar*/}

      {/*Home page component Starts here*/}
      <div>
        <div className="flex justify-center ">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-auto brightness-60 transition duration-200 hover:brightness-50"
          />
        </div>
        <div className="mt-5 mb-5 flex flex-col md:flex-row items-start md:items-center text-sm text-gray-500 space-y-4 md:space-y-0">
          <h1 className="ml-0 md:ml-4 text-2xl md:text-4xl font-bold text-gray-600">
            {" "}
            Your Nearby <span className="text-orange-500">Restaurants</span>
          </h1>
          <div className="md:ml-auto flex items-center">
            <h2 className="mr-4 font-bold text-orange-500 text-base md:text-sm">Select Location:</h2>
            <span className="flex mr-6 border-2 rounded-2xl ">
              <select
                onChange={handleCityChange}
                value={selectedCity}
                className="outline-none bg-transparent text-sm"
              >
                <option value="">Select a city</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Patna">Patna</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
              </select>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {filteredData.map((rest, index) => (
            <RestaurantCard key={index} restaurant={rest} />
          ))}
        </div>
        <div></div>
      </div>
      {/* Home page component ends here*/}

      {/*Footer*/}
      <Footer />
      {/*Footer*/}
    </>
  );
};

export default HomePage;
