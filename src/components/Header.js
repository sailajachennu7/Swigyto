import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContex from "../utils/UserContex";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("LogIn");
  const onlineStatus = useOnlineStatus();

  const {LoginInfo} = useContext(UserContex);

  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-yellow-100 to-green-200 shadow-lg p-4">
      {/* Logo wrapped inside Link with CSS animation */}
      <div className="logo-container flex items-center">
        <Link to="/">
          <img 
            className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-lg object-cover cursor-pointer 
            transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-6"
            src={LOGO_URL} 
            alt="Logo" 
          />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-6 text-lg font-semibold">
          <li className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-blue-300 transition-all">
            Online Status: {onlineStatus ? "💚" : "🔴"}
          </li>
          <li className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-blue-300 transition-all">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-blue-300 transition-all">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-blue-300 transition-all">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-blue-300 transition-all">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-blue-300 transition-all">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4 py-2 bg-white rounded-lg shadow-md hover:bg-blue-300 transition-all">
            <Link to="/cart">{LoginInfo}</Link>
          </li>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
            onClick={() => setLoginBtn(loginBtn === "LogIn" ? "LogOut" : "LogIn")}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
