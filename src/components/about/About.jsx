import React from 'react'
import './About.css'
import dp2 from '../../assets/dp2.jpg'
const About = () => {
  return (
    <div>
        <div id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-sectiion">
                <div className="about-left">
                    <img className='cappic' src={dp2} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>As a MERN stack developer, I bring a strong foundation in JavaScript, React, Node.js, Express, and MongoDB. While I may be new to the field, my dedication, adaptability, and willingness to learn make me an asset to any team.
                        </p>
                        <p>I am a Btech graduate and i eager to contribute my technical skills and passion for coding to projects, while also actively seeking opportunities for growth and improvement. With a positive attitude and a commitment to continuous learning, I am ready to embark on a successful career in MERN stack development.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML,CSS</p><hr style={{width:'60%'}} /></div>
                        <div className="about-skill"><p>JAVA SCRIPT</p><hr style={{width:'80%'}} /></div>
                        <div className="about-skill"><p>NODE JS</p><hr style={{width:'70%'}} /></div>
                        <div className="about-skill"><p>REACT JS</p><hr style={{width:'80%'}} /></div>
                        <div className="about-skill"><p>EXPRESS JS</p><hr style={{width:'60%'}} /></div>
                        <div className="about-skill"><p>MONGODB</p><hr style={{width:'80%'}} /></div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About