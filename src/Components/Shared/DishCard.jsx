import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DishCard = ({ dish }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white transition duration-500 hover:scale-105 hover:shadow-xl">
      <img
        className="w-full h-48 object-cover"
        src={dish.image}
        alt={dish.name}
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{dish.name}</h3>
          <span className="text-green-600 font-medium">₹{dish.price}</span>
        </div>
        <div className="flex items-center text-sm text-yellow-500 mb-2">
          <Star size={16} className="mr-1" />
          {dish.rating}{" "}
          <span className="text-gray-500 ml-2">({dish.reviews} reviews)</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {dish.description}
        </p>
        <button
          onClick={() => navigate("/cart")}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl flex items-center justify-center"
        >
          <ShoppingCart className="mr-2" size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DishCard;
