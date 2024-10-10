import React from 'react'
import './About.css'
import logo from './photo.jpeg';
import { Link } from 'react-router-dom';
export default function About() {
  return (
   <>
  {/*=============== REMIXICONS ===============*/}
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  {/*==================== ABOUT ====================*/}
  <section className="about section" id="about">
    <div className="about__container container grid">
      <h2 className="section__title-1">
        <span>About Me.</span>
      </h2>
      <div className="about__perfil">
        <div className="about__image">
          <img
            // src="https://images.unsplash.com/photo-1577565177023-d0f29c354b69?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3Njk4OTB8&ixlib=rb-4.0.3&q=85"
           src={logo}
           style={{height: '73vh'}}
            alt="image"
            className="about__img"
          />
          <div className="about__shadow" />
          <div className="geometric-box" />
          <div className="about__box" />
        </div>
      </div>
      <div className="about__info">
       <p className="about__description">
  Passionate about <b>Full Stack Development</b> and building 
  <b>Dynamic Web Applications</b>, I am focused on creating solutions that 
  enhance user experience. I have participated in multiple hackathons, constantly 
  learning and refining my skills through hands-on projects.
</p> 
        <ul className="about__list">
         <li className="about__item">
  <b>My Skills Are:</b> HTML, CSS, JavaScript, React, Node.js, Express.js, 
  mySQL, Git &amp; GitHub, Bootstrap, and cloud services like AWS.
</li>
        </ul>
        <div className="about__buttons">
          <Link to={'/contact'} className="button">
            <i className="ri-send-plane-line" /> Contact Me
          </Link>
          <a
            href="https://www.linkedin.com/in/aman-mansooree-5006662b6/"
            target="_blank"
            className="button__ghost"
          >
            <i className="ri-linkedin-box-line" />
          </a>
        </div>
      </div>
    </div>
  </section>
</>

  )
}