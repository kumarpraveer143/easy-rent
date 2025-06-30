import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { FaUserCircle } from "react-icons/fa";
import { API_URL } from "../../config";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
      setIsMenuOpen(false);
    }, 1000);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(`${API_URL}/users/logout`, {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        localStorage.removeItem("user");
        localStorage.removeItem("favouriteRooms");
        navigate("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold">
          <button
            onClick={() => handleNavigation("/")}
            className="focus:outline-none hover:text-blue-200 transition duration-200"
          >
            EasyRent
          </button>
        </div>

        {/* Center Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            className="text-white hover:text-blue-200 transition duration-200 font-medium"
            onClick={() => handleNavigation("/about")}
          >
            About
          </Link>
          <Link
            className="text-white hover:text-blue-200 transition duration-200 font-medium"
            onClick={() => handleNavigation("/developer")}
          >
            Developer
          </Link>
          <Link
            className="text-white hover:text-blue-200 transition duration-200 font-medium"
            onClick={() => handleNavigation("/contact")}
          >
            Contact
          </Link>
        </div>

        {/* Profile and Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              {/* Profile Section */}
              <div className="flex items-center space-x-2">
                <FaUserCircle size={24} className="text-blue-200" />
                <Link
                  className="text-blue-100 hover:text-white font-medium"
                  onClick={() => handleNavigation("/dashboard")}
                >
                  Dashboard
                </Link>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md shadow-md transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                className="px-4 py-2 bg-white text-blue-600 font-medium rounded-full shadow-md hover:bg-blue-50 transition duration-200"
                onClick={() => handleNavigation("/signup")}
              >
                Sign Up
              </Link>
              <Link
                className="px-4 py-2 border border-white text-white font-medium rounded-full hover:bg-blue-700 hover:bg-opacity-70 transition duration-200"
                onClick={() => handleNavigation("/login")}
              >
                Log In
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-blue-200 hover:text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-600 to-purple-600">
          <Link
            onClick={() => handleNavigation("/")}
            className="block px-4 py-3 text-white hover:bg-blue-700 text-center font-medium"
          >
            Home
          </Link>
          <Link
            onClick={() => handleNavigation("/about")}
            className="block px-4 py-3 text-white hover:bg-blue-700 text-center font-medium"
          >
            About
          </Link>
          <Link
            onClick={() => handleNavigation("/contact")}
            className="block px-4 py-3 text-white hover:bg-blue-700 text-center font-medium"
          >
            Contact
          </Link>
          {JSON.parse(user)?.userType === "renter" && (
            <Link
              onClick={() => handleNavigation("/findrooms")}
              className="block px-4 py-3 text-white hover:bg-blue-700 text-center font-medium"
            >
              Rooms
            </Link>
          )}
          {user ? (
            <>
              <Link
                onClick={() => handleNavigation("/dashboard")}
                className="block px-4 py-3 text-white hover:bg-blue-700 text-center font-medium"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-3 bg-red-500 hover:bg-red-600 text-white text-center font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                onClick={() => handleNavigation("/signup")}
                className="block px-4 py-3 bg-white text-blue-600 text-center font-medium hover:bg-blue-50"
              >
                Sign Up
              </Link>
              <Link
                onClick={() => handleNavigation("/login")}
                className="block px-4 py-3 text-white border-t border-blue-500 text-center font-medium hover:bg-blue-700"
              >
                Log In
              </Link>
            </>
          )}
        </div>
      )}

      {/* Full-Screen Overlay Loader */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 h-screen">
          <HashLoader color="#ffffff" loading={loading} size={50} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;