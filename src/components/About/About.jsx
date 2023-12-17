import React from 'react'
import './About.css'
import ME from '../../assets/qww.png'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        
        <div className="container about_container">
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

              <p>An aspiring MERN developer with strong passion for web development. I have a strong foundation in JavaScript and good knowledge of the MERN stack. I am currently seeking exciting opportunities to apply my skills and contribute to innovative web projects.</p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
          </div>
    </section>
  )
}

export default About
