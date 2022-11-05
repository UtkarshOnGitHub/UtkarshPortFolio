import { Box, Button, Center, Flex, Image, SimpleGrid, Spacer, Text, WrapItem } from "@chakra-ui/react";
import { FaGithub, FaEye, FaExternalLinkAlt } from "react-icons/fa";
import AOS from 'aos';
import styles from "./project.module.css"
// import 'aos/dist/aos.css';
// import './project.css '
export default function SingleProject({ hero, name, skills, status, about, github, live, }) {

    const isDark = false
    AOS.init({ duration:2000})
    return (
        <Box data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" 
        _hover={{
            boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"
        }} style={
            isDark ? {
                color: 'white',
                background: "black",
            } : {
                background: "white"
            }
        } borderRadius={'10px'} px='10px' py={['10px', null, '20px']} flexDirection='column' >
            <Box style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            }} >
                <Box borderRadius="8px" overflow={'hidden'} borderBottom='0.5px solid ' height="210px">
                    <Image _hover={{ transform: 'scale(1.1)' }} style={{ transition: '.5s transform linear' }}  borderRadius="8px" cursor={'pointer'} src={hero} alt={name} />
                </Box>
                <Text fontSize={['1.5rem']} align={'center'}>{name}</Text>
                <Box pl={'9px'} border='1px solid transparent' >
                    <Box border='1px solid transparent' display={'flex'} flexDirection='column' gap={['10px', null, '15px']} >
                        <Text fontSize={['15px', '17px', '18px']} >
                            {about}
                        </Text>
                        <Text fontSize={['15px', '17px', '18px']} >
                            {status}
                        </Text>
                        <Text fontSize={['15px', '17px', '18px']} >
                            <Text as="mark">Tech Stack:</Text>  {skills.join(" | ")}
                        </Text>
                    </Box>
                    <Flex mt={['10px']}  mb='15px' letterSpacing='1px'>
                        <Button className={styles.demo} style={{
                            background: "#FF5823",
                            color: 'white',
                            border: '1.3px solid #FF5823 ',
                        }}
                            border='1px solid #4070f4'
                            onClick={() => window.open(github, '_blank')}>
                            Code Base <FaGithub />
                        </Button>
                        <Spacer/>
                        <Button className={styles.demo} style={{
                            background: "#FF5823",
                            color: 'white',
                            border: '1.3px solid #FF5823 '
                        }}
                            border='1px solid #4070f4'
                            onClick={() => window.open(live, '_blank')} >
                            Live Preview <FaExternalLinkAlt style={{ width: "15px" }} />
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
