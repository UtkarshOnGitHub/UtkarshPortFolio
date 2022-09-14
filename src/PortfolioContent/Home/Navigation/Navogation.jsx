import React from 'react'
import AppScroll from '../hr/HR'
import "./Nav.css";
import { HashLink } from 'react-router-hash-link';

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
                <li><HashLink smooth to="/UtkarshPortfolio#about" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })} >About</HashLink></li>
                <li><HashLink smooth to="/UtkarshPortfolio#skills" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Skills</HashLink></li>
                <li><HashLink smooth to="/UtkarshPortfolio#profile">Profile</HashLink></li>
                <li><HashLink smooth to="/UtkarshPortfolio#home">Projects</HashLink></li>
            </div>
        </div>
    </div>
  )
}

export default Navigation
