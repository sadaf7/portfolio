import React from 'react'
import './About.css'
import ME from '../../assets/qww.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  // initializing Aos and setting default animation duration
 

  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        
        <div  className="container about_container">
          <div className="about_me">
            <div className="about_me_img">
              <img src={ME} alt="" />
            </div>
            </div>

            <div className="about_content">

              {/* <div className="about_cards">
                <article className="about_card">

                </article>
              </div> */}

              <p>A dedicated web developer with a  specialization in the MERN stack and WordPress. With a passion for building efficient, scalable, and visually appealing web solutions.</p>
              

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
          </div>
    </section>
  )
}

export default About
