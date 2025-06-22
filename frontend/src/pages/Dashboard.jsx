import React from "react";
import {
  FaUser,
  FaHome,
  FaUpload,
  FaMoneyBillAlt,
  FaSearch,
  FaStar,
  FaHouseUser,
  FaArchive,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { userType } = user || {};

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10">
        Dashboard
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Link
          to="/profile"
          className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
        >
          <div className="text-4xl bg-blue-100 p-4 rounded-full mb-4">
            <FaUser className="text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Profile</h2>
          <p className="text-gray-600 text-sm text-center">
            View and edit your profile details easily.
          </p>
        </Link>

        {userType === "landowner" ? (
          <>
            <Link
              to="/landowner-rooms"
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
            >
              <div className="text-4xl bg-blue-100 p-4 rounded-full mb-4">
                <FaHome className="text-green-500" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">My Rooms</h2>
              <p className="text-gray-600 text-sm text-center">
                Manage the rooms you own and oversee their details.
              </p>
            </Link>
            <Link
              to="/uploadrooms"
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
            >
              <div className="text-4xl bg-blue-100 p-4 rounded-full mb-4">
                <FaUpload className="text-purple-500" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Upload Rooms</h2>
              <p className="text-gray-600 text-sm text-center">
                Add new rooms to your listings with ease.
              </p>
            </Link>
            <Link
              to="/my-renters"
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
            >
              <div className="text-4xl bg-blue-100 p-4 rounded-full mb-4">
                <FaHouseUser className="text-pink-500" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">My Renters</h2>
              <p className="text-gray-600 text-sm text-center">
                Add and manage renters here with ease.
              </p>
            </Link>
            <Link
              to="/archieved-renters"
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
            >
              <div className="text-4xl bg-blue-100 p-4 rounded-full mb-4">
                <FaArchive className="text-red-500" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Archived Renters</h2>
              <p className="text-gray-600 text-sm text-center">
                View your archived renters here.
              </p>
            </Link>
          </>
        ) : userType === "renter" ? (
          <>
            <Link
              to="/findRooms"
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
            >
              <div className="text-4xl bg-blue-100 p-4 rounded-full mb-4">
                <FaSearch className="text-purple-500" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Find Rooms</h2>
              <p className="text-gray-600 text-sm text-center">
                Search and discover rooms that match your preferences.
              </p>
            </Link>
            <Link
              to="/favouriteRooms"
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
            >
              <div className="text-4xl bg-blue-100 p-4 rounded-full mb-4">
                <FaStar className="text-green-500" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Favourite Rooms</h2>
              <p className="text-gray-600 text-sm text-center">
                View your saved favorite rooms here.
              </p>
            </Link>
            <Link
              to="/rentersMyRoom"
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
            >
              <div className="text-4xl bg-blue-100 p-4 rounded-full mb-4">
                <FaHouseUser className="text-red-500" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">My Room</h2>
              <p className="text-gray-600 text-sm text-center">
                Check details and payment history updated by the owner.
              </p>
            </Link>
          </>
        ) : null}

        <Link
          to="/payment-history"
          className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
        >
          <div className="text-4xl bg-blue-100 p-4 rounded-full mb-4">
            <FaMoneyBillAlt className="text-yellow-500" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Payment History</h2>
          <p className="text-gray-600 text-sm text-center">
            Track your payment records and transaction history.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;