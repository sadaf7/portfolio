import React from 'react'
import Cta from './Cta'
import ME from '../../assets/pp.jpg'
import HeaderSocials from './HeaderSocials'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Sadaf Hossain</h1>
      <h5 className='text-light'>Full-Stack Developer | MERN | WordPress</h5>
      <Cta/>
      <HeaderSocials/>
      <p>------</p>

      {/* <div>
        <img src={ME} alt="" />
      </div> */}

      <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
