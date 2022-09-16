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

function App() {
  return (
    <div className="App" >
        <Home/>
        <div className='icon'>
            <BsFillArrowUpCircleFill/>
        </div>
        <MiddleSection/>

        <Portfolio/>
        <Contactme/>
        <Mainfooter/>
    </div>
  );
}

export default App;
