import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill's I Have</h5>
      <h2>Tools and Technologies</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icons' />
              <div>
                <h4>REACT JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icons' />
              <div>
                <h4>HTML5</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icons' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icons' />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icons' />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
            <div className="experience_content">

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details_icons' />
                <div>
                  <h4>NODE JS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details_icons' />
                <div>
                  <h4>MONGO DB</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details_icons' />
                <div>
                  <h4>EXPRESS JS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details_icons' />
                <div>
                  <h4>SOCKET.IO</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
