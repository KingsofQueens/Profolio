import React from "react";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
  return (
    <div>
      <h1>PortfolioPage</h1>

      <div className="w-full border border-gray-300 rounded-lg shadow-md lg:max-w-md">
        <Link to="/portfolio/queerhistorymonth">
          Project 3 - Queer History Month
        </Link>
        <img
          className="object-cover w-full h-48 rounded-lg rounded-tr-lg"
          src="https://ik.imagekit.io/auewbfj8o/QHM/Preview_QHM.png?updatedAt=1688679778042"
          alt="Project 3 - Queer History Month"
        />
      </div>

      <div className="w-full border border-gray-300 rounded-lg shadow-md lg:max-w-md">
        <Link to="/portfolio/keepsharing">Project 2 - Keep Sharing</Link>
        <img
          className="object-cover w-full h-48 rounded-lg rounded-tr-lg"
          src="https://ik.imagekit.io/auewbfj8o/KeepSharing/Preview.png?updatedAt=1688679077088"
          alt="Project 2 - Keep Sharing"
        />
      </div>

      <div className="w-full border border-gray-300 rounded-lg shadow-md lg:max-w-md">
        <Link to="/portfolio/getout">Project 1 - Get Out</Link>
        <img
          className="object-cover w-full h-48 rounded-lg rounded-tr-lg"
          src="https://ik.imagekit.io/auewbfj8o/GetOut/Preview.png?updatedAt=1688679257313"
          alt="Project 1 - Get Out"
        />
      </div>
    </div>
  );
};

export default PortfolioPage;
