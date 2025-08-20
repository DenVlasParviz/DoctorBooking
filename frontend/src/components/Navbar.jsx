import React, {useContext, useState} from "react";
import { assets } from "../assets/assets_frontend/assets.js";
import { NavLink, useNavigate } from "react-router-dom";
import {AppContext} from "../context/Context.jsx";

export const Navbar = () => {
  const menu = [
    { name: "HOME", to: "/" },
    { name: "All Doctors", to: "/doctors" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const {token,setToken,userData} = useContext(AppContext)
  const navigate = useNavigate();
  const logout = () =>{
      setToken(false)
      localStorage.removeItem("token")
  }
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-200">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      <ul className="hidden md:flex items-center gap-5 font-medium">
        {menu.map((item) => (
          <li key={item.to} className="py-1">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? "text-gray-950 font-bold" : "text-gray-500"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center cursor-pointer group relative gap-2">
            <img className="w-8 rounded-full" src={userData.image} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => navigate("profile")}
                >
                  My Profile
                </p>
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => navigate("appointments")}
                >
                  My Appointments
                </p>
                <p
                  onClick={logout}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
          <img onClick={()=>setShowMenu(true)   } className='w-6 md:hidden' src={assets.menu_icon} alt=""/>
      {/*    Mobile Menu*/}
          <div className={`${showMenu ? 'translate-x-0 w-full' : 'translate-x-full w-full'} fixed inset-y-0 right-0 z-20 md:hidden bg-white transform transition-transform duration-300`} >
              <div className='flex items-center justify-between px-5 py-6'>
                  <img className='w-36' src={assets.logo} alt=""/>
                  <img className='w-7' onClick={()=>setShowMenu(false)} src={userData.image} alt=""/>
              </div>
              <ul className='flex flex-col gap-2 mt-5 px-5 items-center text-lg font-medium'>
                  <NavLink className='px-4 py-2 rounded  inline-block' onClick={()=>setShowMenu(false)} to='/'>Home</NavLink>
                  <NavLink className='px-4 py-2 rounded  inline-block' onClick={()=>setShowMenu(false)} to='/doctors'>All Doctors</NavLink>
                  <NavLink className='px-4 py-2 rounded  inline-block' onClick={()=>setShowMenu(false)} to='/about'>About</NavLink>
                  <NavLink className='px-4 py-2 rounded  inline-block' onClick={()=>setShowMenu(false)} to='/contact'>Contact</NavLink>

              </ul>
          </div>
      </div>
    </div>
  );
};
