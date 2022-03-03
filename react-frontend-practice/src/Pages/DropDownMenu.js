import React from "react";
import { Link } from "react-router-dom";
import "../dropdownmenu.css";
const DropDownMenu = () => {
  return (
    <div>
      <div className="header">
        <div className="dropdown">
          <button className="link">Information</button>
          <div className="dropdown-menu">
            <div className="dropdown-items">
              <Link to="/profile">My profile</Link>
            </div>
            <div className="dropdown-items">
              <div>Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
