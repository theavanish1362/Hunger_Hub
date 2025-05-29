import { useState } from "react";
import DishCard from "./DishCard";
import pbm from "../../assets/pbm.jpg";

const dishes = [
  {
    name: "Paneer Butter Masala",
    type: "veg",
    price: 250,
    rating: 4.3,
    reviews: 320,
    description: "Rich and creamy paneer curry cooked in a tomato-based gravy.",
    image: pbm,
  },
  {
    name: "Paneer Butter Masala",
    type: "veg",
    price: 250,
    rating: 4.3,
    reviews: 320,
    description: "Rich and creamy paneer curry cooked in a tomato-based gravy.",
    image: pbm,
  },
  {
    name: "Paneer Butter Masala",
    type: "veg",
    price: 250,
    rating: 4.3,
    reviews: 320,
    description: "Rich and creamy paneer curry cooked in a tomato-based gravy.",
    image: pbm,
  },
  {
    name: "Chicken Butter Masala",
    type: "non-veg",
    price: 250,
    rating: 4.3,
    reviews: 320,
    description: "Rich and creamy paneer curry cooked in a tomato-based gravy.",
    image: pbm,
  },
  {
    name: "Chicken Butter Masala",
    type: "non-veg",
    price: 250,
    rating: 4.3,
    reviews: 320,
    description: "Rich and creamy paneer curry cooked in a tomato-based gravy.",
    image: pbm,
  },
  {
    name: "Chicken Butter Masala",
    type: "non-veg",
    price: 250,
    rating: 4.3,
    reviews: 320,
    description: "Rich and creamy paneer curry cooked in a tomato-based gravy.",
    image: pbm,
  },
];

export default function RestaurantDetailCard({ restaurant }) {
  const [activeTab, setActiveTab] = useState("Menu");

  const [showVeg, setShowVeg] = useState(true);
  const [showNonVeg, setShowNonVeg] = useState(true);

  const toggleVeg = () => setShowVeg(!showVeg);
  const toggleNonVeg = () => setShowNonVeg(!showNonVeg);

  const filteredDishes = dishes.filter(
    (dish) =>
      (showVeg && dish.type === "veg") ||
      (showNonVeg && dish.type === "non-veg")
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="h-72 md:h-96 px-4 sm:px-6 md:px-8 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Details Section */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          {restaurant.name}
        </h1>

        <div className="flex flex-col gap-2 text-gray-600 text-sm mt-2 ml-2">
          <div>
            <span>★ </span>
            <span className="text-orange-500 font-medium">
              {restaurant.rating}{" "}
            </span>
            <span> (1.2k reviews)</span>
          </div>
          {/*<div>
            <span>• </span>
            <span className="text-orange-500 font-medium">Fine Dining</span>
          </div>*/}
          <div>
            <span>• </span>
            <span className="text-orange-500 font-medium">Hours: </span>
            <span>10am to 9pm</span>
          </div>
          <div>
            <span>• </span>
            <span className="text-orange-500 font-medium">Cuisine: </span>
            <span>{restaurant.cuisine}</span>
          </div>
          <div>
            <span>• </span>
            <span className="text-orange-500 font-medium">Address: </span>
            <span>123 Culinary Ave, Foodtown</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 border-b border-gray-200">
          <nav className="flex gap-6 text-gray-700 font-medium">
            {["Menu", "Reviews", "Photos", "About"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 ${
                  activeTab === tab
                    ? "border-b-2 border-red-500 text-red-500"
                    : "hover:text-red-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-6 text-gray-700">
          {activeTab === "Menu" && (
            <div className="mt-6 text-gray-700 px-4">
              <div className="max-w-7xl mx-auto">
                {/* Filter Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 mb-6">
                  <h2 className="text-xl font-bold">Filter Dishes</h2>
                  <div className="flex gap-4">
                    <button
                      onClick={toggleVeg}
                      className={`px-4 py-2 rounded-full border ${
                        showVeg
                          ? "bg-green-500 text-white"
                          : "bg-white text-green-500 border-green-500"
                      }`}
                    >
                      Veg
                    </button>
                    <button
                      onClick={toggleNonVeg}
                      className={`px-4 py-2 rounded-full border ${
                        showNonVeg
                          ? "bg-red-500 text-white"
                          : "bg-white text-red-500 border-red-500"
                      }`}
                    >
                      Non-Veg
                    </button>
                  </div>
                </div>

                {/* Dish Grid */}
                {filteredDishes.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredDishes.map((food, index) => (
                      <DishCard key={index} dish={food} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No dishes found.</p>
                )}
              </div>
            </div>
          )}
          {activeTab === "Reviews" && (
            <p>📝 Customer reviews will be displayed here.</p>
          )}
          {activeTab === "Photos" && (
            <p>📸 Gallery of restaurant and food images.</p>
          )}
          {activeTab === "About" && (
            <p>
              🏛️ Established in 2010, The Gourmet Bistro blends modern tastes
              with timeless tradition.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
