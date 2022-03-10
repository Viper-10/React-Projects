import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar mb-2">
      <div className="container">
        <div className=" flex-space-between">
          <Link to="/" className="logo">
            React Projects
          </Link>
          <ul className="flex-equal-splits nav-item-list">
            <li>
              <Link to="/hooks">React Hooks</Link>
            </li>
            <li>
              <Link to="/other-topics">Miscellaneous</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
