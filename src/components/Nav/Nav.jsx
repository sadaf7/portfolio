import React from 'react'
import { AiOutlineHome, AiOutlineUser  } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { RiContactsBook2Line, RiServiceFill  } from "react-icons/ri";
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><CiBookmark/></a>
      <a href="#portfolio"><RiServiceFill /></a>
      <a href="#contact"><RiContactsBook2Line/></a>
    </nav>
  )
}

export default Nav
