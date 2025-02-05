import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("LogIn");
  const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-100">
          <div className="logo-container">
            <img className="w-56" src= {LOGO_URL}/>
          </div>
          <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4 hover:bg-blue-200 rounded-lg ">Online Status : {onlineStatus? "💚":"🔴"}</li>
                <li className="px-4  hover:bg-blue-200 rounded-lg"><Link>Home</Link></li>
                <li className="px-4  hover:bg-blue-200 rounded-lg"><Link to="/about">AboutUs</Link></li>
                <li className="px-4  hover:bg-blue-200 rounded-lg"><Link to="/contact">ContactUs</Link></li>
                <li className="px-4  hover:bg-blue-200 rounded-lg"><Link to="/grocery">Grocery</Link></li>
                <li className="px-4  hover:bg-blue-200 rounded-lg">Cart</li>
                <button className=" hover:bg-blue-200 rounded-lg" onClick={() => {
                  if(loginBtn === "LogIn" ? setLoginBtn("LogOut") : setLoginBtn("LogIn"));
                }}>{loginBtn}</button>
            </ul>
          </div>
        </div>
    );
};

export default Header;
