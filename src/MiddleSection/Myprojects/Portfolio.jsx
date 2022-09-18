import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Portfolio.css";
import "swiper/css/effect-coverflow";
import mode from "../../Assets/Home/mode.jpg"
import asos from "../../Assets/Home/asos.jpg"
import trav from "../../Assets/Home/trav.jpg"
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Portfolio() {

  AOS.init({ duration:2000})
  return (
    <div className="container1" data-aos="fade-up" id="projects">
      <div className="title_wrapper">
        <div className="title_">
          <h1>Projects</h1>
        </div>
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : 2}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 20,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        pagination={window.innerWidth < 568 ? false : true}
        className="mySwiper"
      >
        <SwiperSlide className="main-div">
        <div className="swiperDiv">
          <img src={asos} />
          </div >
          <div className="btn-div">
          <a href="https://asos-lake.vercel.app/" target="blank"><button>App Preview</button></a>
          <a href="https://github.com/UtkarshOnGitHub/wretched-grass-6317" target="blank"><button>Source Code</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main-div">
          <div className="swiperDiv">
            <img src={mode} />
          </div>
          <div className="btn-div">
          <a href="https://startling-frangipane-867a6a.netlify.app/" target="blank"><button>App Preview</button></a>
          <a href="https://github.com/sadhakvishu/Slytherin/tree/main/LINKING" target="blank"><button>Source Code</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main-div">
          <div className="swiperDiv">
            <img src={trav} />
            </div>
            <div className="btn-div">
            <a href="https://timely-zuccutto-a4829c.netlify.app/"><button>App Preview</button></a>
            <a href="https://github.com/UtkarshOnGitHub/ossified-paper-8820"><button>Source Code</button></a>
            </div>
        </SwiperSlide>
        {/* <SwiperSlide style={{borderRadius:"40px"}} className="main-div">
          <div  className="swiperDiv">
            <img src="https://www.colaborarlabs.com/images/software_project_mngnt.png" />
          </div>
          <div className="btn-div">
          <button>App Preview</button>
          <button>Source Code</button>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}