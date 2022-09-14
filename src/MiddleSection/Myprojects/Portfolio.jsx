import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
// import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Portfolio.css";
import "swiper/css/effect-coverflow"
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
    <div className="container1" data-aos="fade-up">
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
        pagination={{
          clickable: true,
          
        }}
        className="mySwiper"
      >
        <SwiperSlide style={{borderRadius:"40px"}}>
          <div  className="swiperDiv">
            <img src="https://www.colaborarlabs.com/images/software_project_mngnt.png" />
          </div>
          <div className="btn-div">
          <button>App Preview</button>
          <button>Source Code</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiperDiv">
          <img src="https://twproject.com/blog/wp-content/uploads/project-management-software-in-mother-tongue.png" />
          </div >
          <div className="btn-div">
          <a href="https://asos-lake.vercel.app/" target="blank"><button>App Preview</button></a>
          <a href="https://github.com/UtkarshOnGitHub/wretched-grass-6317" target="blank"><button>Source Code</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperDiv">
            <img src="https://backlog.com/wp-blog-app/uploads/2021/09/project-planner-backlog-blog.png" />
          </div>
          <div className="btn-div">
          <button>App Preview</button>
          <button>Source Code</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperDiv">
            <img src="https://cdn.wedevs.com/uploads/2017/06/How_to_build_a_successful_remote_team_with_project_manager.png" />
            </div>
            <div className="btn-div">
            <button>App Preview</button>
            <button>Source Code</button>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}