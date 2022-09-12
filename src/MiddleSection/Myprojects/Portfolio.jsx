import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../Assets/Home/2.jpg";
import  Ecommerce from "../../Assets/Home/2.jpg";
import HOC from "../../Assets/Home/2.jpg";
import MusicApp from "../../Assets/Home/2.jpg";
// import { themeContext } from "../../Context";
const Portfolio = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      {/* <span style={{color: darkMode?'white': ''}}>Recent Projects</span> */}
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;