import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition p-4 w-full">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <div>
        <h2 className="text-xl font-semibold mb-1">{restaurant.name}</h2>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="mr-2">⭐ {restaurant.rating}</span>
          <span>• {restaurant.cuisine}</span>
        </div>
        <p className="text-sm text-gray-400 mb-3">
          ⏱ {restaurant.deliveryTime} mins
        </p>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin />
          <span>{restaurant.location}</span>
        </div>
        <button
          onClick={() => navigate(`/restaurant/${restaurant.id}`)}
          className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}
