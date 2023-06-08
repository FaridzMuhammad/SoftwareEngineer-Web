import React from "react";

// image
import img from "../../Components/Img/farid.jpg";
import logo from "../../Components/Img/mask1.png";
import judul from "../../Components/Img/PARTYPOP.png";
import HOME from "../../Components/Img/HOME.png";
import ABOUTUS from "../../Components/Img/ABOUT US.png";
import SERVICES from "../../Components/Img/SERVICES.png";
import CONTACT from "../../Components/Img/CONTACT.png";
import BOOKING from "../../Components/Img/BOOKING.png";
import Balon2 from "../../Components/Img/balon2 1.png";
import Balon3 from "../../Components/Img/balon3 1.png";
import Kruwel from "../../Components/Img/kruwel1 1.png";
import LOGOUT from "../../Components/Img/LOGOUT.png";
import { Link, Outlet } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <div>
      <div
        className="navbar bg-base-100"
        style={{ display: "flex", justifyContent: "right" }}
      >
        <button className="btn" style={{ backgroundColor: "orange" }}>
          <img src={LOGOUT} style={{ width: "50px" }}></img>
        </button>
      </div>

      <div className="navbar bg-secondary" style={{ height: "90px" }}>
        <img src={logo} style={{ width: "200px" }}></img>
        <img src={judul} style={{ width: "180px" }}></img>
        <div
          className="flex-1"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a href="/home">
                <img src={HOME} style={{ width: "50px" }}></img>
                </a>
              </li>
              <li>
                <a href="/About_us">
                  <img src={ABOUTUS} style={{ width: "70px" }}></img>
                </a>
              </li>
              <li>
                <img src={SERVICES} style={{ width: "90px" }}></img>
              </li>
              <li>
                <img src={CONTACT} style={{ width: "90px" }}></img>
              </li>
              <li>
                <img src={BOOKING} style={{ width: "90px" }}></img>
              </li>
            </ul>
          </div>
          <img src={Balon3} style={{ width: "90px" }}></img>
          <img src={Balon2} style={{ width: "90px" }}></img>
          <img src={Kruwel} style={{ width: "50px" }}></img>
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={img} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default HomeNavbar;
