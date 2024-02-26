// import a style sheet
import './shared.css';
// import the main component
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/Navbar';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <BurgerMenu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
