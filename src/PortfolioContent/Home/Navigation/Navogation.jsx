import React, { useState } from 'react'
// import AppScroll from '../hr/HR'
import "./Nav.css";
import { HashLink as Link} from 'react-router-hash-link';
import {GoThreeBars} from "react-icons/go"
import { ReactNode } from 'react';
import {
Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  VStack,
} from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navigation = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [navbar, setNavbar] = useState(false);

  const changeBg = ()=>{
      if(window.scrollY>=50){
          setNavbar(true)
      }else{
          setNavbar(false)
      }
  }
  const Links = ['Dashboard', 'Projects', 'Team'];
  window.addEventListener("scroll",changeBg)
  return (
    <div className='nav-container'>
        <div className={navbar?"navbar-parent scroll":"navbar-parent"}>
            <div className='nav-icon'>
            <div className="waviy">
                <span classsName="--i:1" >U</span>
                <span>T</span>
                <span>K</span>
                <span>A</span>
                <span>R</span>
                <span>S</span>
                <span>H</span>
            </div>
            <i></i>
            </div>
            <div className='nav-list'>
                <li><Link smooth to="#about" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })} >About</Link></li>
                <li><Link smooth to="#skills" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Skills</Link></li>
                <li><Link smooth to="#projects" scroll={(el) => el.scrollIntoView({ behavior: 'auto' })}>Projects</Link></li>
                <li><Link smooth to="#contact" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Contact</Link></li>
                <li><a href="Utkarshfw19_Resume.pdf" download="Utkarsh_Resume">Resume</a></li>
            </div> 
            <div className='toShowHamburger'>
                <GoThreeBars color="white" fontSize={"35px"}onClick={()=>onOpen()} />
            </div>
        </div>
        <Drawer onClose={onClose} placement={'top'} isOpen={isOpen} size={'sm'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`drawer contents`}</DrawerHeader>
          <DrawerBody>
          <VStack>
            <Box ><Link smooth to="#about" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })} >About</Link></Box>
            <Box><Link smooth to="#skills" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Skills</Link></Box>
            <Box><Link smooth to="#projects" scroll={(el) => el.scrollIntoView({ behavior: 'auto' })}>Projects</Link></Box>
            <Box><Link smooth to="#contact" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Contact</Link></Box>
            <Box><a href="Utkarshfw19_Resume.pdf" download="Utkarsh_Resume">Resume</a></Box>    
               
                
                
                
            </VStack> 
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
    
  )
}
  


export default Navigation
