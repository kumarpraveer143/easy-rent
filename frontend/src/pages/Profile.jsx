import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { API_URL } from "../config";
import Loading from "../components/UI/Loading";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  // Fetch user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setFormData(parsedUser);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      homeAddress: {
        ...prevData.homeAddress,
        [name]: value,
      },
    }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `${API_URL}/users/editprofile`,
        formData,
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("user", JSON.stringify(formData));
      setUser(formData);
      toast.success("Profile Updated Successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Something went wrong!");
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-lg rounded-xl max-w-3xl w-full p-6 sm:p-8">
        {/* User Type Highlight */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-center text-blue-600 uppercase mb-6">
          {user.userType}
        </h2>

        <div className="space-y-6">
          {/* Display user details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="text-gray-600 font-semibold text-sm sm:text-base">
                Name:
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleInputChange}
                  className="block w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <p className="mt-1 text-gray-800 text-sm sm:text-base">
                  {user.name}
                </p>
              )}
            </div>
            <div>
              <label className="text-gray-600 font-semibold text-sm sm:text-base">
                Email:
              </label>
              <p className="mt-1 text-gray-800 text-sm sm:text-base">
                {user.email}
              </p>
            </div>
            <div>
              <label className="text-gray-600 font-semibold text-sm sm:text-base">
                Phone Number:
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber || ""}
                  onChange={handleInputChange}
                  className="block w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <p className="mt-1 text-gray-800 text-sm sm:text-base">
                  {user.phoneNumber}
                </p>
              )}
            </div>
            <div>
              <label className="text-gray-600 font-semibold text-sm sm:text-base">
                Date of Birth:
              </label>
              {isEditing ? (
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth?.split("T")[0] || ""}
                  onChange={handleInputChange}
                  className="block w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <p className="mt-1 text-gray-800 text-sm sm:text-base">
                  {new Date(user.dateOfBirth).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="text-gray-600 font-semibold text-sm sm:text-base">
              Address:
            </label>
            {isEditing ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-1">
                <div>
                  <label className="text-gray-600 font-semibold text-sm sm:text-base">
                    Street:
                  </label>
                  <input
                    type="text"
                    name="street"
                    value={formData.homeAddress?.street || ""}
                    onChange={handleAddressChange}
                    className="block w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-semibold text-sm sm:text-base">
                    City:
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.homeAddress?.city || ""}
                    onChange={handleAddressChange}
                    className="block w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-semibold text-sm sm:text-base">
                    State:
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.homeAddress?.state || ""}
                    onChange={handleAddressChange}
                    className="block w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-gray-600 font-semibold text-sm sm:text-base">
                    Zip Code:
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.homeAddress?.zipCode || ""}
                    onChange={handleAddressChange}
                    className="block w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            ) : (
              <p className="mt-1 text-gray-800 text-sm sm:text-base">
                {user.homeAddress?.street}, {user.homeAddress?.city},{" "}
                {user.homeAddress?.state} - {user.homeAddress?.zipCode}
              </p>
            )}
          </div>

          {/* House Name (for landowners) */}
          {user?.userType === "landowner" && (
            <div>
              <label className="text-gray-600 font-semibold text-sm sm:text-base">
                House Name:
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="houseName"
                  value={formData.houseName || ""}
                  onChange={handleInputChange}
                  className="block w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              ) : (
                <p className="mt-1 text-gray-800 text-sm sm:text-base">
                  {user.houseName || "Not Provided"}
                </p>
              )}
            </div>
          )}

          {/* Aadhar Number */}
          <div>
            <label className="text-gray-600 font-semibold text-sm sm:text-base">
              Aadhar Number:
            </label>
            {isEditing ? (
              <input
                type="text"
                name="aadharCardNumber"
                value={formData.aadharCardNumber || ""}
                onChange={handleInputChange}
                className="block w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            ) : (
              <p className="mt-1 text-gray-800 text-sm sm:text-base">
                {user.aadharCardNumber || "Not Provided"}
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end mt-8 space-x-4">
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="px-3 py-1 text-sm sm:px-5 sm:py-2 sm:text-base bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-500 transition duration-200"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="px-3 py-1 text-sm sm:px-5 sm:py-2 sm:text-base bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="px-3 py-1 text-sm sm:px-5 sm:py-2 sm:text-base bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
              >
                Edit Profile
              </button>
              <Link
                to="/dashboard"
                className="px-3 py-1 text-sm sm:px-5 sm:py-2 sm:text-base bg-white text-blue-600 font-medium rounded-full shadow-md hover:bg-blue-50 transition duration-200"
              >
                Back to Dashboard
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
