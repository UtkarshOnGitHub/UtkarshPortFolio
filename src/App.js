// import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import MiddleSection from './MiddleSection/MiddleSection';
import Contactme from './PortfolioContent/ContactMe/Contactme';
import Home from './PortfolioContent/Home/Home';


import "./App.css"
import Mainfooter from './mainFooter/Mainfooter';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import GoToTop from './GoToTop/GoToTop';
import Github from './gitHub/Github';
import ProjectsShow from './MiddleSection/ProjectsShow';
import { Text } from '@chakra-ui/react';
import AOS from 'aos';
function App() {
  AOS.init({ duration:2000})
  return (
    <div className="App" >
        <Home/>
        
        <MiddleSection/>
        <Text data-aos="flip-left" textAlign={"center"} fontSize={"40px"} marginTop="90px" marginBottom={"-50px"}>My Projects</Text>
        <ProjectsShow/>
        <Github/>
        <Contactme/>
        <GoToTop/>
        <Mainfooter/>
    </div>
  );
}

export default App;
