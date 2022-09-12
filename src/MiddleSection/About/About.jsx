import React from 'react'
import "./about.css"

import comp from "../../Assets/Home/comp.png"


const About = () => {
  return (
    <div className='about-container'>
        <div className='about-child-container'>
            <div className='about-name'>
                <h1>About Me</h1>
            </div>
            <div className='about-details'>
            <div className='details'>
                  <h1>
                    Hi , Iam <span style={{color:"#FF5823"}}>Utkarsh</span>
                  </h1>
                  <h3 style={{color:"green"}}>
                    Full Stack Web Developer
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis neque excepturi magni numquam in non quae vel rerum quasi quod, incidunt necessitatibus voluptatem voluptates voluptate optio blanditiis repellat odit saepe.
                  </p>
                </div>
                <div className='shaped'>
                  <img src={comp} alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
