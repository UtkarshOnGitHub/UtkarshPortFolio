import { Box, SimpleGrid, Wrap } from "@chakra-ui/react";
import SingleProject from "./SingleProject";
// import asos from "../Assets/Home/asos.jpg"
const projects = [
    {
        hero: "https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTc4MzYxOTk0MzA1ODA3OTc2/stores-like-asos.png",
        name: "Toggl Track Clone",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Chakra UI", "NodeJS", "ExpressJS", "MongoDB"],
        about: 'Toggl Track is a time tracking app that allows you to track your daily activities across different platforms.',
        status: 'A collaborative project built by a team of 5, executed in 4 days.',
        github: 'https://github.com/Amanyadav2030/minor-crowd-1344',
        live: 'https://toggl-time-tracking.vercel.app/',
    },
    {
        hero: "https://amanyadav2030.github.io/amanyadav/static/media/togglImg.e31812cf369352f998c5.png",
        name: "Bellavitaorganic Clone",
        skills: ["React", "CSS", 'JavaScript', "Chakra UI"],
        about: 'Bellavitaorganic which is an e-commerce website, where users can buy organic products.',
        status: 'An individual project built by me, executed in 4 days.',
        github: 'https://github.com/Amanyadav2030/Bellavitaorganic-Clone',
        live: 'https://bellavitaorganic-clone.vercel.app/',
    },
    {
        hero: "https://amanyadav2030.github.io/amanyadav/static/media/togglImg.e31812cf369352f998c5.png",
        name: "Airgarage Clone",
        skills: ["HTML", "CSS", "JavaScript"],
        about: 'Airgarage is a well-being startup, which offers available parking anywhere else in the world.',
        status: 'A collaborative project built by a team of 5, executed in 4 days.',
        github: 'https://github.com/Amanyadav2030/Airgarage-Clone',
        live: 'https://airgarage-clone.vercel.app/',
    },
    {
        hero: "https://amanyadav2030.github.io/amanyadav/static/media/togglImg.e31812cf369352f998c5.png",
        name: "Toggl Track Clone2",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Chakra UI", "NodeJS", "ExpressJS", "MongoDB"],
        about: 'Toggl Track is a time tracking app that allows you to track your daily activities across different platforms.',
        status: 'A collaborative project built by a team of 5, executed in 4 days.',
        github: 'https://github.com/Amanyadav2030/minor-crowd-1344',
        live: 'https://toggl-time-tracking.vercel.app/',
    },
];
export default function ProjectsShow() {
    return (
        <SimpleGrid spacingX={['15px', '25px', '38px']} pb={['1rem', '2rem', '5rem']} spacingY={['18px', '27px', '30px']} columns={[1, 2, 3, 3]} w={['90%', '92%', '87%']} m='auto' marginTop={"100px"}>
            {
                projects.map((el) => (
                    <SingleProject key={el.name} hero={el.hero} name={el.name} skills={el.skills} status={el.status}  github={el.github} live={el.live} about={el.about} />
                ))
            }
        </SimpleGrid>
    )
}