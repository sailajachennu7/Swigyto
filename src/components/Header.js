import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("LogIn");
  const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
          <div className="logo-container">
            <img className="logo" src= {LOGO_URL}/>
          </div>
          <div className="nav-items">
            <ul>
                <li>Online Status : {onlineStatus? "💚":"🔴"}</li>
                <li><Link>Home</Link></li>
                <li><Link to="/about">AboutUs</Link></li>
                <li><Link to="/contact">ContactUs</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li>Cart</li>
                <button className="login-btn" onClick={() => {
                  if(loginBtn === "LogIn" ? setLoginBtn("LogOut") : setLoginBtn("LogIn"));
                }}>{loginBtn}</button>
            </ul>
          </div>
        </div>
    );
};

export default Header;