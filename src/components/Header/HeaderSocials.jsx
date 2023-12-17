import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './Header.css'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://github.com/sadaf7" target='_blank'><FaGithub/></a>
      <a href="https://www.linkedin.com/in/sadaf-hossain-3491a9148/" target='_blank'><FaLinkedin/></a>
    </div>
  )
}

export default HeaderSocials
