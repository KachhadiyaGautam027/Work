// Header.js
import React from "react";
import { useNavigate } from "react-router-dom";
import profileIcon from "../assets/images/profile.svg";
import Notification from "./Notification";
import SearchBarWithDropdown from "./SearchBarWithDropdown";

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profiledashboard/profile");
  };

  return (
    <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      {/* Toggle Sidebar Button */}
      <button onClick={toggleSidebar} className="md:hidden p-2">
        <span className="text-white text-2xl">&#9776;</span>{" "}
        {/* Hamburger Icon */}
      </button>

      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
        Profile Setting
      </h1>

      <div className="flex items-center space-x-4">
        <div className="hidden md:block">
          <SearchBarWithDropdown />
        </div>

        <Notification />

        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={handleProfileClick}
        >
          <img
            src={profileIcon}
            alt="User"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          />
          <div className="hidden md:block text-black">
            <p>Lincoln Philips</p>
            <p className="text-sm">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
