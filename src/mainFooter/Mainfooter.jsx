import React from 'react'
import "./mfooter.css";
import { AiFillGithub , AiFillYoutube} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Mainfooter = () => {
  return (
    <div className='Parent'>
        <div className='childF'>
            <h1>Follow Me On</h1>
            <div className='Icons'>
                <a href="https://github.com/UtkarshOnGitHub#"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/utkarsh-sharma-879799236/"><FaLinkedinIn/></a>
                <a href="https://www.youtube.com/channel/UChyrBxBe5e0KbBMnrSxq41w"><AiFillYoutube/></a>
            </div>
        </div>
    </div>
  )
}

export default Mainfooter
