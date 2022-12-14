import meter1 from "../../Assets/Home/html.png";
import meter2 from "../../Assets/Home/css.png";
import meter3 from "../../Assets/Home/js2.png";
import meter4 from "../../Assets/Home/rct.png";
import meter5 from "../../Assets/Home/mon.png";
import meter6 from "../../Assets/Home/node1.png";
import meter7 from "../../Assets/Home/gitt.png";
import meter8 from "../../Assets/Home/redux.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "./skills.css"
import { useEffect } from "react";
import { Text } from "@chakra-ui/react";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 501 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 350 },
      items: 1,
      showDots:false
    },
  };

    AOS.init({ duration:2000})

  return (
    <section className="skill" id="skills" data-aos="fade-up">
        <div className="container">
            
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <Text fontSize={"40px"} as="em">Technical Skills</Text>
                        <p><br></br> 
                        </p>
                        <Carousel responsive={responsive} showDots={true} arrows={false} draggable={true}
                         autoPlay={true} autoPlaySpeed={1000}
                          infinite={true}
                           className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>REACT JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>MONGO DB</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Github</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>Redux</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills