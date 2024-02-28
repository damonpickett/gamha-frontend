import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="site-title">
        <h1>GAMHA</h1>
      </div>
      <div className="nav-links">
        <div className={props.burgerMenu ? "menu-btn open" : "menu-btn"}
        onClick={() => props.setBurgerMenu(!props.burgerMenu)}
        >
          <div className="menu-btn__burger"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
