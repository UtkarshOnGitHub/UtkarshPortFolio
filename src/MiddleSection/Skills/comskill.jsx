import meter1 from "../../Assets/Home/meter1.svg";
import meter2 from "../../Assets/Home/meter2.svg";
import meter3 from "../../Assets/Home/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../../Assets/Home/arrow1.svg";
// import arrow2 from "../../Assets/Home/arrow2.svg";


import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "./skills.css"
import { useEffect } from "react";
import { Text } from "@chakra-ui/react";

const ComSkills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464,min:360},
      items: 1
    }
  };
  useEffect(()=>{
    AOS.init({ duration:2000})
  },[])

  return (

    <section className="skill" id="skills" data-aos="fade-up">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <Text fontSize={"40px"} as="em">Interpersonal Skills</Text>
                        <p><br></br></p>
                        <Carousel responsive={responsive} arrows={false} 
                        infinite={true} 
                        swipeable={true} 
                        autoPlay={true}
                         autoPlaySpeed={2000}
                        //   draggable={true}
                          // customTransition="all .5"
                          // transitionDuration={500}
                           className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Team Work</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Communication Skills</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Relationship Building.</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Problem Solving</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <div>
                                <h5>Leadership.</h5>
                                </div>
                                
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ComSkills