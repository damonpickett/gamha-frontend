import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/icons/DA-logo.png";

const Navbar = (props) => {
  return (
    <nav>
      <div className="navbar-spacing">
        <div className="site-title">
          
            <Link className="site-title-link" to="/">
              <img className="site-logo" src={logo} alt="Damon Andrew Logo" />
            </Link>
          
        </div>
        <div className="nav-links">
          {/* burger menu for mobile and tablets */}
          <div
            className={props.burgerMenu ? "menu-btn open" : "menu-btn"}
            onClick={() => props.setBurgerMenu(!props.burgerMenu)}
          >
            <div className="menu-btn__burger"></div>
          </div>

          {/* regular menu for desktop */}
          <ul className="nav-links-list">
            <li className="nav-links-item">
              <Link className="page-nav" to="/">
                Home
              </Link>
            </li>
            <li className="nav-links-item">
              <Link className="page-nav" to="/posts">
                Posts
              </Link>
            </li>
            <li className="nav-links-item none">
              <Link className="page-nav" to="/podcast">
                Podcast
              </Link>
            </li>
            <li className="nav-links-item">
              <Link className="page-nav" to="/books">
                Books
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
