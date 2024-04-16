import React from "react";
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
      <div className="flex justify-end items-center py-4 px-6 bg-gray-800 text-white pr-96">
      <div>
        <nav><NavLink to="/">Home</NavLink></nav>
        <nav><NavLink to="/login">Login</NavLink></nav>
      </div>
    </div>
  );
};

export default Navbar