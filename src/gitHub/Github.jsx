import React from "react";
import GitHubCalendar from "react-github-calendar";
// import "./GitHub.css";
import { Box, Text } from "@chakra-ui/react";
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
        w={["85%", "85%", "65%"]}
        style={github}
        className="github_Calender"
      >
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="UtkarshOnGitHub"
          year={new Date().getFullYear()}
        />
      </Box>
    </div>
  );
};
export default GitHub;

