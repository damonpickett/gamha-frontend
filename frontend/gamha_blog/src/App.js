import './shared.css';
import { useState } from 'react';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/Navbar';


function App() {

  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <div className='App'>
      <NavBar burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}/>
      <BurgerMenu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
