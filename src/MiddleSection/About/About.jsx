import React from 'react'
import "./about.css"

import Award from "../../Assets/Home/comp.png"
import imgpro from "../../Assets/Home/aboutimg2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { Text } from '@chakra-ui/react';
import Typical from "react-typical";


const About = () => {
  useEffect(()=>{
    AOS.init({ duration:2000})
  },[])
  return (
    <div className="a" data-aos="fade-up" id='about'>
    <div className="a-left">
      <div className="a-card bg"></div>
      <div className="a-card">
        <img
          src={imgpro}
          alt=""
          className="a-img"
        />
      </div>
    </div>
    <div className="a-right">
      <h1 className="a-title">About Me</h1>
      <h2 className="a-sub">
          Hello, I'M <span style={{backgroundColor:"yellow" , padding:"0px 10px"}}>UTKARSH</span> 
      </h2>
      <p className="a-desc">
      I am a highly competent Full Stack Web Developer who is graduated from Masai School. I have strong technical skills as well as excellent interpersonal skills, enabling 
me to interact  with a wide range of clients. I am eager to obtain a challenging position at a prestigious company that will expand my learning and build upon my developer skills.
      </p>
      <div className="a-award">
        <img src={Award} alt="" className="a-award-img" />
        <div className="a-award-texts" data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="800">
          <h4 className="a-award-title">
          <Typical loop={Infinity} steps={["1000+ hours Of Coding",2000,"200+ DSA Question Solved",2000 , "3 Live Projects" , 2000 , "Team Work",2000]}/>
          </h4>
          <p className="a-award-desc">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
            and fugit.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
