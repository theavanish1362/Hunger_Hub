import { useState } from "react";
import { Menu, X, ShoppingBasket } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-md px-4 py-3 h-17">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="italic text-2xl font-extrabold text-orange-500">
          Hunger Hub
        </div>

        {/* Desktop Navbar Links */}
        <ul className="hidden md:flex ml-auto mr-10 space-x-5 text-gray-700 font-medium">
          <li>
            <button
              onClick={() => navigate("/")}
              className="hover:text-orange-500"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/login")}
              className="hover:text-orange-500"
            >
              Login
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/signup")}
              className="hover:text-orange-500"
            >
              SignUp
            </button>
          </li>
        </ul>

        {/* Cart Button */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/cart")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full shadow"
          >
            <ShoppingBasket />
          </button>
        </div>

        {/* Top Bar- Small screen */}
        <div className="flex items-center justify-end gap-4 md:hidden relative z-40">
          {/* Cart Button - Small screen*/}
          <button
            onClick={() => navigate("/cart")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full shadow"
          >
            <ShoppingBasket />
          </button>

          {/* Hamburger Menu */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Small screen Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-1/5 h-fit rounded-2xl border-2 bg-white shadow-lg z-30 p-2 md:hidden flex flex-col items-center">
          <button
            onClick={() => navigate("/")}
            className="block py-2 hover:text-orange-500"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/login")}
            className="block py-2 hover:text-orange-500"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="block py-2 hover:text-orange-500"
          >
            SignUp
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
