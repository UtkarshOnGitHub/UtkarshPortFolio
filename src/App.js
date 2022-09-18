// import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import MiddleSection from './MiddleSection/MiddleSection';
import Portfolio from './MiddleSection/Myprojects/Portfolio';
// import Skills from './MiddleSection/Skills/skills';
import Contactme from './PortfolioContent/ContactMe/Contactme';
import Home from './PortfolioContent/Home/Home';


import "./App.css"
import Mainfooter from './mainFooter/Mainfooter';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import GoToTop from './GoToTop/GoToTop';
import Github from './gitHub/Github';

function App() {
  return (
    <div className="App" >
        <Home/>
        
        <MiddleSection/>
        <Portfolio/>
        <Github/>
        <Contactme/>
        <GoToTop/>
        <Mainfooter/>
    </div>
  );
}

export default App;
