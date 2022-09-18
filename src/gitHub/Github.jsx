import React from 'react'
import "./github.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import github from "../Assets/Home/github.png"

const Github = () => {
  AOS.init({ duration:2000})
  return (
    <div className='main_git' data-aos="flip-down">
      <div className='child'>
            <img src={github} alt="" />
      </div>
    </div>
  )
}

export default Github
