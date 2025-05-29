// src/components/Footer.jsx
import { Facebook, Twitter, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-100 shadow-md text-amber-900 py-10 px-4 mt-1">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Brand */}
        <div>
          <h1 className="italic font-extrabold text-4xl text-orange-500 mb-2">
            Hunger Hub
          </h1>
          <p className="text-gray-600">
            Delivering delicious meals right to your door, fast and fresh.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-600">
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
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <Facebook />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <Twitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <p className="text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Hunger Hub. All rights reserved.
      </p>
    </footer>
  );
}
