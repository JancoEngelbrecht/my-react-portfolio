import React from "react";
import { NavLink } from "react-router-dom"
import LogoutButton from "../../../global/LogoutButton";


const UserNav = () => {
    return (
      <div className="py-4 px-6 bg-gray-800 text-white relative z-50">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Logo</div> 
          <div className="flex space-x-4">
            <NavLink to="user" className="hover:text-gray-300">Product Management</NavLink>
            <NavLink to="user/stocklist" className="hover:text-gray-300">Stocklist</NavLink>
            <LogoutButton />
          </div>
        </div>
    </div>
  );
};

export default UserNav;

