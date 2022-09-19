import React from 'react'
import "./mfooter.css";
import { AiFillGithub , AiFillYoutube} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";

const Mainfooter = () => {
  return (
    <div className='Parent'>
        <div className='childF'>
            <h1>Follow Me On</h1>
            <div className='Icons'>
                <a href="https://github.com/UtkarshOnGitHub#"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/utkarsh-sharma-879799236/"><FaLinkedinIn/></a>
                <a href="https://www.youtube.com/channel/UChyrBxBe5e0KbBMnrSxq41w"><AiFillYoutube/></a>
                <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=GTvVlcRzDfkCjkwzmJtdWLlnpfgcwKzzFnvzwDWpxsBcksCgjpPVMfDDCXWhKhwqLGGlvffvQLjnG" target="blank"><GrMail/></a>
                <a href="tel:8278721220"><BiPhoneCall/></a>
            </div>
        </div>
    </div>
  )
}

export default Mainfooter
