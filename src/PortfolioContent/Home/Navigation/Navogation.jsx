import React from 'react'
// import AppScroll from '../hr/HR'
import "./Nav.css";
import { HashLink as Link} from 'react-router-hash-link';
import { useEffect } from 'react';

const Navigation = () => {



  return (
    <div className='nav-container'>
        <div className='nav-parent'>
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
                <li><Link smooth to="#projects" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Projects</Link></li>
                <li><Link smooth to="#contact" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Contact</Link></li>
            </div>
        </div>
    </div>
  )
}

export default Navigation
