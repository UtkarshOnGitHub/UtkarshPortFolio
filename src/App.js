import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import MiddleSection from './MiddleSection/MiddleSection';
import Portfolio from './MiddleSection/Myprojects/Portfolio';
import Skills from './MiddleSection/Skills/skills';
import Contactme from './PortfolioContent/ContactMe/Contactme';
import Home from './PortfolioContent/Home/Home';
import HR from './PortfolioContent/Home/hr/HR';




function App() {
  return (
    <div className="App">
        <Home/>
        <MiddleSection/>
        <Portfolio/>
        <Contactme/>
    </div>
  );
}

export default App;
