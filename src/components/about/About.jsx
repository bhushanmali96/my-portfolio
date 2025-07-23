import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>B.E. Computer Engineering <br /><i>Savitribai Phule Pune University.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Percentage</h5>
                  <small>73</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Web App Development</li>
                      <li>Cloud Computing</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    A results-driven <b>Java developer</b> with 6+ years of experience in building scalable microservices using Spring Boot and cloud-native technologies. 
                    Google Cloud Certified with strong hands-on expertise in backend development, API integration, and performance optimization. 
                    Proven ability to manage complex projects and deliver high-quality solutions on time. 
                    Experienced in Agile methodologies and DevOps practices. Passionate about continuous learning, currently strengthening data structures and algorithms for system design excellence. A dependable team player with strong communication skills and a proactive mindset.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About