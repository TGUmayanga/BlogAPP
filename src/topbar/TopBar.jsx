
import "./topbar.css";
//import img1 from './Images/blog.jpg'

import React from 'react'

export default function TopBar(){
    return (
        <div className="top">
           <div className="topLeft">
           <i className=" topIcon fa-brands fa-square-facebook"></i>
           <i className=" topIcon fa-brands fa-square-twitter"></i>
           <i className=" topIcon fa-brands fa-square-pinterest"></i>
           <i className=" topIcon fa-brands fa-square-instagram"></i>
            </div>
           <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">Home</li>
                <li className="topListItem">About</li>
                <li className="topListItem">Conatct</li>
                <li className="topListItem">Write</li>
                <li className="topListItem">LogOut</li>
            </ul>
           </div>
           <div className="topRight">
            <img className="topImg"
            src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <i className=" topsearchIcon fa-solid fa-magnifying-glass"></i>
           </div>
        </div>
    )
}
