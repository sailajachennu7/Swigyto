import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("LogIn")
    return (
        <div className="header">
          <div className="logo-container">
            <img className="logo" src= {LOGO_URL}/>
          </div>
          <div className="nav-items">
            <ul>
                <li><Link>Home</Link></li>
                <li><Link to="/about">AboutUs</Link></li>
                <li><Link to="/contact">ContactUs</Link></li>
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