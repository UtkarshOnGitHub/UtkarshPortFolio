import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
// import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Portfolio.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

import first from "../../Assets/Home/1.jpg"

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Portfolio() {
  return (
    <div className="container1">
      <div className="title_wrapper">
        <div className="title_">
          <h1>Projects</h1>
        </div>
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : 3}
        loop={true}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 40,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true
        // }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        <SwiperSlide style={{borderRadius:"40px"}}>
          <a href="#" target="blank"><img src="https://www.colaborarlabs.com/images/software_project_mngnt.png" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"><img src="https://twproject.com/blog/wp-content/uploads/project-management-software-in-mother-tongue.png" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"><img src="https://backlog.com/wp-blog-app/uploads/2021/09/project-planner-backlog-blog.png" /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#"><img src="https://cdn.wedevs.com/uploads/2017/06/How_to_build_a_successful_remote_team_with_project_manager.png" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}