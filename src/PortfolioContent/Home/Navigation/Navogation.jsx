import React from 'react'
import AppScroll from '../scroll/scroll'
import "./Nav.css"

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
                <li>Home</li>
                <li>Skills</li>
                <li>Profile</li>
                <li>Projects</li>
            </div>
        </div>
    </div>
  )
}

export default Navigation
