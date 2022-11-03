import { Box, SimpleGrid, Wrap } from "@chakra-ui/react";
import SingleProject from "./SingleProject";
import asos from "../Assets/Home/asos.png"
import modesens from "../Assets/Home/modesens.png"
import everhour from "../Assets/Home/everhour.png"
import travelocity from "../Assets/Home/travelocity.png"
const projects = [
    {
        hero: asos,
        name: "Asos Clone",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Chakra UI",],
        about: 'ASOS plc is a British online fashion and cosmetic retailer. The company was founded in 2000 in London, primarily aimed at young adults.',
        status: 'An Individual project, executed in 4 days.',
        github: 'https://github.com/UtkarshOnGitHub/wretched-grass-6317',
        live: 'https://asos-lake.vercel.app/',
    },
    {
        hero: everhour,
        name: "Ever-Hour Clone",
        skills: ["JavaScript", "React JS", "Redux", "Redux Thunk" ,"Chakra UI", "NodeJS", "ExpressJS", "MongoDB"],
        about: 'Everhour is a time tracking software, which can be Integrated with many kinds of business tools.',
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
        name: "Travelocity Clone",
        skills: ["HTML", "CSS", "JavaScript", "JSON"],
        about: 'Travelocity.com is an online travel agency owned by Expedia Group. It has 12.4 million monthly unique visitors, making it the third most popular website',
        status: 'A collaborative project built by a team of 5, executed in 4 days.',
        github: 'https://github.com/UtkarshOnGitHub/ossified-paper-8820',
        live: 'https://timely-zuccutto-a4829c.netlify.app/',
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