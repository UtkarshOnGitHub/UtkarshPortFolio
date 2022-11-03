import React from 'react'
import "./about.css"

import Award from "../../Assets/Home/comp.png"
import imgpro from "../../Assets/Home/aboutimg2.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import { Text } from '@chakra-ui/react';
import Typical from "react-typical";
;


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
      <Text fontSize={"5xl"}>About Me</Text>
      <Text fontStyle={"italic"} fontSize="22px" marginTop="20px" marginBottom={"10px"}>
          Hello, I'M <span style={{backgroundColor:"yellow" , padding:"0px 10px" , borderRadius:"10px"}}>UTKARSH</span> 
      </Text>
      <Text fontSize="18px">
      Passionate Full-Stack web developer with
hands on experience in developing scalabe
websites using a wide range of front-end
and back-end skills like HTML,CSS,React,
JavaScript, Node js ,MongoDB etc. Eager
to obtain a challenging position at a
prestigious company that will expand my
learning and built upon my developer skills.
      </Text>
      <div className="a-award">
        <img src={Award} alt="" className="a-award-img" />
        <div className="a-award-texts" data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="800">
          <Text fontSize={"20px"} fontWeight={"600"} marginBottom={"10px"}>
          <Typical loop={Infinity} steps={["1000+ hours Of Coding",2000,"200+ DSA Question Solved",2000 , "3 Live Projects" , 2000 , "Team Work",2000]}/>
          </Text>
          <Text fontSize={"18px"}>
          Knack Of Building application with front and backend operations.
          </Text>
        </div>
      </div>
    </div>

  </div>
  )
}

export default About
