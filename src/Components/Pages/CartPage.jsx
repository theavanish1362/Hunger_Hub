import React from "react";
import { Trash2 } from "lucide-react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import pbm from "../../assets/pbm.jpg";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cartItems = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    price: 250,
    quantity: 2,
    image: pbm,
  },
  {
    id: 2,
    name: "Butter Naan",
    price: 50,
    quantity: 4,
    image: pbm,
  },
];

const handleRemoveItem = (id) => {
  console.log("Remove item with ID:", id);
};

function CartPage() {
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      {/*Navbar*/}
      <Navbar />
      {/*Navbar*/}

      {/*Cart component starts from here*/}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-xl shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="text-green-600 font-semibold">
                    ₹{item.price * item.quantity}
                  </span>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}

            <div className="">
              <button
                onClick={() => navigate(-1)}
                className="border-2 border-orange-500 rounded-2xl flex items-center gap-2 px-2 font-medium text-black"
              >
                {" "}
                <Plus size={20} />
                <span>Add More Items</span>
              </button>
            </div>

            <div className="flex justify-between items-center border-t pt-4 mt-6">
              <h3 className="text-xl font-semibold">Total</h3>
              <span className="text-xl text-green-700 font-bold">₹{total}</span>
            </div>

            <button
              onClick={() => navigate("/thankyou")}
              className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition duration-200"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
      {/*Cart component ends here*/}

      {/*Footer*/}
      <Footer />
      {/*Footer*/}
    </>
  );
}

export default CartPage;
