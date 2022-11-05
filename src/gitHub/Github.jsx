import React from "react";
import GitHubCalendar from "react-github-calendar";
// import "./GitHub.css";
import { Box, Image, Text } from "@chakra-ui/react";
import stat from "../Assets/Home/githubstat.png"
import sttreak from "../Assets/Home/streak.png"
import "./github.css"
import AOS from 'aos';
const GitHub = () => {
  AOS.init({ duration:2000})
  const github = {
    margin: "auto",
    border: "5px solid #A3E900",
    padding: "20px",
    borderRadius: "10px",
  };
  return (
    <div data-aos="zoom-in-down">
      <Text mt="6%" textAlign={"center"} fontSize="4xl">DAYS I CODE</Text>
      <Box
        w={["85%", "85%", "75%"]}
        style={github}
        className="github_Calender"
      >
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="UtkarshOnGitHub"
          year={new Date().getFullYear()}
        />
        <Box className="gitstat">
          <Image w="50%" src={stat}/>
          <Image w="50%" src={sttreak}/>
        </Box>
      </Box>
    </div>
  );
};
export default GitHub;

