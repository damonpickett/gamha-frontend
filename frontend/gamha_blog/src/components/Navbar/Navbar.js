import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav>
    <div className="navbar-spacing">
      <div className="site-title">
        <h1><Link className="site-title-link" to='/'>GAMHA</Link></h1>
      </div>
      <div className="nav-links">
        <div className={props.burgerMenu ? "menu-btn open" : "menu-btn"}
        onClick={() => props.setBurgerMenu(!props.burgerMenu)}
        >
          <div className="menu-btn__burger"></div>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
