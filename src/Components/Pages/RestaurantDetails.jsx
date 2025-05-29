import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import RestaurantDetailCard from "../Shared/RestaurantDetailCard";
import sDegrees from "../../assets/degrees.webp";
import citrusCafe from "../../assets/citrusCafe.jpg";
import cookBook from "../../assets/cookBookCafe.jpg";
import hello from "../../assets/helloRestrauant-Cafe.webp";
import pind from "../../assets/pind.jpg";
import spiceCourt from "../../assets/spiceCourt.avif";
import takshila from "../../assets/takshila.avif";
import vrihi from "../../assets/vrihiSkydeck.webp";

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

const RestaurantDetails = () => {
  const { id } = useParams();

  const filteredData = restaurants.filter((rest) => rest.id === Number(id));

  return (
    <>
      {/*Navbar*/}
      <Navbar />
      {/*Navbar*/}

      {/*Restraunt Detailt Card componen Start*/}
      <div>
        {filteredData.map((rest, index) => (
          <RestaurantDetailCard key={index} restaurant={rest} />
        ))}
      </div>
      {/*Restraunt Detail Card conponent end*/}

      {/*Footer*/}
      <Footer />
      {/*Footer*/}
    </>
  );
};

export default RestaurantDetails;
