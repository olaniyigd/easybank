import { useState } from "react";
import "./Nav.css";
import logo from "./image/logo.svg";
import { FiMenu } from "react-icons/fi";
export default function Nav () {
    const [toggle, setToggle] = useState(false)
    return(
        <div className="desktop-top">
           <img src={logo} alt="logo" /> 
                <ul className="desktop-ul">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Career</li>
                </ul>
                <a id="req" href=".">Request Invite</a>
                <button id="toggle" onClick={()=> setToggle(!toggle)}><FiMenu /></button>
                {toggle &&(
                    <ul className="mobile-ul">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Career</li>
                </ul>
                )}
        </div>
    )
}