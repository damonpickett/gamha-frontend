import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = (props) => {
  return (
    <div className={`burger-menu ${props.burgerMenu ? 'visible' : 'hidden'}`} onClick={() => props.setBurgerMenu(!props.burgerMenu)}>
      <nav>
        <ul className='burger-menu-nav'>
          <li className='burger-menu-nav-item'><Link className='page-nav' to="/">Home</Link></li>
          <li className='burger-menu-nav-item'><Link className='page-nav' to="/posts">Posts</Link></li>
          <li className='burger-menu-nav-item none'><Link className='page-nav' to="/podcast">Podcast</Link></li>
          <li className='burger-menu-nav-item suggested-reading'><Link className='page-nav' to="/suggested-reading">Suggested Reading</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;