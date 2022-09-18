import React from 'react';
import Typical from "react-typical";
import "./Profile.css"
import { HashLink as Link} from 'react-router-hash-link';

export default function Profile() {
  // const goToContact=()=>{
  //   console.log("Clicked");
  //   window.scrollTo({ bottom: 0, left: 0, behavior: "smooth" });
  // }
  return (
    <div className='profile-container' data-aos="fade-down" id='home'>
        <div className='profile-parent'>
          <div className='profile-details'>
              <div className='colz'>
                <div className='colz-icon'>
                  <a href="https://www.facebook.com/utkarsh.sharma.5872682/" target="blank">
                      <i className='fa fa-facebook-square'></i>
                  </a>
                  <a href="https://www.linkedin.com/in/utkarsh-sharma-879799236/" target="blank">
                      <i className='fa fa-linkedin-square'></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UChyrBxBe5e0KbBMnrSxq41w" target="blank">
                      <i className='fa fa-youtube-square'></i>
                  </a>
                  <a href="https://github.com/UtkarshOnGitHub#" target="blank">
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
                      "Ethusiastic Developer",2000,
                      "Full Stack Developer",2000,
                      "Mern Stack Developer",2000,
                      "React Developer",2000,
                    ]}
                    />
                </h1>
                <span className='profile-role-tagline'>
                  Knack Of Building application with front and backend operations.
                </span>
            </span>
          </div>
          <div className='profile-options'>
            <Link smooth to="#contact"><button className='btn primary-btn'>
              {"  "}
              Hire Me{"  "}
            </button></Link>
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
