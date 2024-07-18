import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill's I Have</h5>
      <h2>Tools and Technologies</h2>

      <div className="container experience_container">
        
        <div className="experience_backend">
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
                  <h4>REACT JS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details_icons' />
                <div>
                  <h4>WORDPRESS</h4>
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
                  <h4>HTML</h4>
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
                  <h4>MATERIAL UI</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details_icons' />
                <div>
                  <h4>MONGOOSE</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details_icons' />
                <div>
                  <h4>GIT</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsPatchCheckFill className='experience_details_icons' />
                <div>
                  <h4>REDUX</h4>
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
