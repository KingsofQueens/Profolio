import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex flex-col p-4 md:flex-row">
        <li className="mx-4">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-4">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="mx-4">
          <Link to="/aboutme">About me</Link>
        </li>
        {/* <li className="mx-4">Contact</li> */}
      </ul>
    </div>
  );
};

export default Navbar;
