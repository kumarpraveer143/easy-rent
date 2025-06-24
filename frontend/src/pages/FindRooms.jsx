import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import NoRoomsFound from "./NoRoomsFound";
import { API_URL } from "../config";
import Loading from "../components/UI/Loading";


const FindRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [searchZip, setSearchZip] = useState("");
  const [limit, setLimit] = useState(25); // Load 25 rooms initially
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchRooms = async () => {
      try {
        const response = await axios.get(`${API_URL}/rooms/availableRoom`, {
          withCredentials: true,
        });
        setRooms(response.data.message);
        setFilteredRooms(response.data.message);
      } catch (err) {
        console.error("Error fetching rooms:", err);
      }
      setLoading(false);
    };
    fetchRooms();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchZip(value);

    if (value.trim() === "") {
      setFilteredRooms(rooms);
    } else {
      const filtered = rooms.filter((room) =>
        room.address.zipCode.includes(value.trim())
      );
      setFilteredRooms(filtered);
    }
  };

  const roomTypeToImage = {
  'single': '/rooms/room1.jpg',
  'studio': '/rooms/room2.jpg',
  'apartment': '/rooms/room3.jpg',
  'shared': '/rooms/room4.jpeg',

};

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 25);
  };

  const handleViewRoom = (roomId) => {
    navigate(`/viewRoomsDetails/${roomId}`); // Redirect to detailed room page
  };

  if (loading) {
    return <Loading />;
  }

  if (!loading && filteredRooms.length === 0) {
    return <NoRoomsFound />;
  }

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Find Your Perfect Room
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Browse through our collection of available rooms and find your ideal
            living space.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
            <input
              type="text"
              placeholder="Search by ZIP code..."
              value={searchZip}
              onChange={handleSearch}
              className="w-full p-4 border-none focus:outline-none focus:ring-0"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              <FiSearch className="text-xl" />
            </button>
          </div>
        </div>

        {filteredRooms.length > 0 ? (
          <>
            <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredRooms.slice(0, limit).map((room) => (
                
                <div
                  key={room._id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <img
                    src={roomTypeToImage[room.roomType.toLowerCase()] || '/rooms/room1.jpeg'}
                      alt="Room"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-purple-600 text-white px-3 py-1 rounded-bl-lg font-medium">
                      ₹{room.rentPrice}/month
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-bold text-gray-800">
                        {room.roomType}
                      </h2>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          room.isAvailable
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {room.isAvailable ? "Available" : "Not Available"}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {room.address.street}, {room.address.city},{" "}
                      {room.address.state}, {room.address.zipCode}
                    </p>
                    {user ? (
                      <button
                        onClick={() => handleViewRoom(room._id)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium"
                      >
                        View Details
                      </button>
                    ) : (
                      <button
                        onClick={() => navigate("/login")}
                        className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-all duration-300 font-medium"
                      >
                        Login to View Room
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {limit < filteredRooms.length && (
              <div className="mt-10 text-center">
                <button
                  onClick={handleLoadMore}
                  className="bg-white text-blue-600 border border-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  Load More Rooms
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto text-center">
            <svg
              className="w-16 h-16 text-blue-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              No Rooms Found
            </h2>
            <p className="text-gray-600 mb-6">
              We couldn't find any rooms matching your search criteria. Please
              try a different ZIP code or check back later.
            </p>
            <button
              onClick={() => setSearchZip("")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindRooms;
