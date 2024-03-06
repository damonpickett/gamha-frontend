import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = (props) => {
  return (
    <div className={`burger-menu ${props.burgerMenu ? 'visible' : 'hidden'}`}>
      <nav>
        <ul className='burger-menu-nav'>
          <li className='burger-menu-nav-item'><Link className='page-nav' to="/">Home</Link></li>
          <li className='burger-menu-nav-item'><Link className='page-nav' to="/bloglist">Blog List</Link></li>
          <li className='burger-menu-nav-item'><Link className='page-nav' to="/support">Support</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;