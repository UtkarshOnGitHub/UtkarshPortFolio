import React from 'react';
import Typical from "react-typical";
import "./Profile.css"

export default function Profile() {
  return (
    <div className='profile-container' data-aos="fade-down" id='home'>
        <div className='profile-parent'>
          <div className='profile-details'>
              <div className='colz'>
                <div className='colz-icon'>
                  <a href="#">
                      <i className='fa fa-facebook-square'></i>
                  </a>
                  <a href="#">
                      <i className='fa fa-linkedin-square'></i>
                  </a>
                  <a href="#">
                      <i className='fa fa-instagram'></i>
                  </a>
                  <a href="#">
                      <i className='fa fa-github-square'></i>
                  </a>
                </div>
              </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              {"  "}
              Hello, I'M <span className='highlighted-text'>Utkarsh</span>
            </span>

          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
                {"   "}
                <h1>
                    <Typical
                    loop={Infinity}
                    steps={[
                      "Ethusiastic Dev",2000,
                      "Full Stack Developer",2000,
                      "Mern Stack Dev",2000,
                      "React Dev",2000,
                    ]}
                    />
                </h1>
                <span className='profile-role-tagline'>
                  Knack Of Building application with front and backend operations.
                </span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'>
              {"  "}
              Hire Me{"  "}
            </button>
            <a href="Utkarshfw19_Resume.pdf" download="Utkarsh_Resume">
              <button className='btn highlighted-btn'>
                    Get Resume
              </button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
  
    </div>
  )
}
