import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Typed from 'typed.js'; // Import Typed.js here
import './Home.css';

export default function Home() {
  useEffect(() => {
    const options = {
      strings: ['<i>Wellcome to my</i> portfolio.', 'Googal cloud learner.','GDG group member.','Computer Science Engineer.'],
      typeSpeed: 50,
    };
    const typed = new Typed('#element', options);

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
  <>
    <div className="main-container">
      <div className="blur-circle1"></div>
      <div className="blur-circle2"></div>
      {/* Start Landing Page */}
      <div className="landing-page">
        <header>
          <div className="container">
            <Link to="/" className="logo">
              Your <b>Website</b>
            </Link>
            <ul className="links">
              <li><Link to={'/'} style={{color:'white'}}>Home</Link></li>
              <li><Link to={'/about'} className='conect'>About Us</Link></li>
              {/* <li><Link to={'/work'} className='conect'>Work</Link></li> */}
              <li><Link to={'/contact'} className='conect'  >Contact</Link></li>

           <li className='conect'>
  <a href='https://github.com/Mansuriamn' target="_blank" rel="noopener noreferrer">
    Github <i className="fa-brands fa-github" />

  </a>
</li>

            </ul>
          </div>
        </header>
        <div className="content">
          <div className="container">
            <div className="info">
              <h1><span id="element"></span></h1>
              <p>
              Hello my name is  ' Aman Mansuri '. I am B.Tech student in Computer Science, passionate about full stack development and innovative software projects. He is actively involved in hackathons and learning new technologies like Gen AI and cloud computing.
              </p>
              <button><Link to={'/skill'}>My Skill Is</Link></button>
            </div>
            <div className="image">
              <img
                className="main-image"
                src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp"
                alt="Businessman using VR technology"
              />
            </div>
          </div>
        </div>
      </div>
      {/* End Landing Page */}
    </div>


    
 
  </>
  );
}
