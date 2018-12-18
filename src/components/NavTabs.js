import React from "react";
import { Link } from "react-router-dom";


const NavTabs = () => {
    return(
        <ul className="nav nav-tabs">
        <li className="nav-item">
        {/* TODO-Styling: no underline after hovering over it!!! */}
          <a href="/" className={window.location.pathname === "/" ? "text-secondary" : "text-secondary"}>
            Pupster
          </a>
        </li>
        <li className="nav-item">
          <Link
            to="/home"
            className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/discover"
            className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
          >
            Discover
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/search"
            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
          >
            Search
          </Link>
        </li>

      </ul>
    );
}

export default NavTabs;