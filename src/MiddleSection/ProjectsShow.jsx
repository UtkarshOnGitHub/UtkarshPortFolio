import { Box, SimpleGrid, Wrap } from "@chakra-ui/react";
import SingleProject from "./SingleProject";
import asos from "../Assets/Home/asos.png"
import modesens from "../Assets/Home/modesens.png"
import everhour from "../Assets/Home/everhour.png"
import travelocity from "../Assets/Home/NOX.png"
const projects = [
    {
        hero: asos,
        name: "Asos Clone",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Chakra UI",],
        about: 'ASOS is a British online fashion and cosmetic retailer. The company was founded in 2000 in London, primarily aimed at young adults.',
        status: 'An Individual project, executed in 4 days.',
        github: 'https://github.com/UtkarshOnGitHub/wretched-grass-6317',
        live: 'https://asos-lake.vercel.app/',
    },
    {
        hero: everhour,
        name: "Ever-Hour Clone",
        skills: ["JavaScript", "React JS", "Redux", "Redux Thunk" ,"Chakra UI", "NodeJS", "ExpressJS", "MongoDB"],
        about: 'Everhour is a time tracking software, with time tracker and Integrated with many kinds of business tools.',
        status: 'A collaborative project built by  team of 5, executed in 4 days.',
        github: 'https://github.com/Madhukesh06/everhour.com-clone',
        live: 'https://clone-everhour.netlify.app/',
    },
    {
        hero: modesens,
        name: "ModeSens Clone",
        skills: ["HTML", "CSS", 'JavaScript'],
        about: 'ModeSens is your fashion shopping assistant for the smart and informed. ModeSens is led by a team of industry experts',
        status: 'A collaborative project built by team of 5, executed in 4 days.',
        github: 'https://github.com/sadhakvishu/Slytherin',
        live: 'https://sadhakvishu.github.io/Slytherin/',
    },
    {
        hero: travelocity,
        name: "Nox Player",
        skills: ["React", "CSS", "JavaScript"],
        about: 'Nox Player Is A Online Music Player Where You Can Enjoy Music Produced By Noxious Beats',
        status: 'A Solo project built executed in 1 day.',
        github: 'https://github.com/UtkarshOnGitHub/NoxPlayer',
        live: 'https://nox-player.vercel.app/',
    },
];
export default function ProjectsShow() {
    return (
        <SimpleGrid spacingX={['15px', '25px', '38px']} pb={['1rem', '2rem', '5rem']} spacingY={['18px', '27px', '30px']} columns={[1, 2, 3, 3]} w={['90%', '92%', '87%']} m='auto' marginTop={"100px"} id="projects">
            {
                projects.map((el) => (
                    <SingleProject key={el.name} hero={el.hero} name={el.name} skills={el.skills} status={el.status}  github={el.github} live={el.live} about={el.about} />
                ))
            }
        </SimpleGrid>
    )
}