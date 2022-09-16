import React from 'react'
import "./mfooter.css";
import { AiFillGithub , AiFillYoutube} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Mainfooter = () => {
  return (
    <div className='Parent'>
        <div className='child'>
            <h1>Follow Me On</h1>
            <div className='Icons'>
                <AiFillGithub/>
                <FaLinkedinIn/>
                <AiFillYoutube/>
            </div>
        </div>
    </div>
  )
}

export default Mainfooter
