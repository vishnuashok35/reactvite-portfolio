import React from 'react'
import './Hero.css'
import DP from "../../assets/dp.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import cv from '../../assets/VISHNU ASHOK cv.pdf'
const Hero = () => {
  return (
    <div className='hero'>
        <img className='dp' src={DP} alt="img" />
        <h1><span>I'm Vishnu ashok, </span>web developer from INDIA</h1>
        <p>I'm a full stack web developer , MERN</p>
        <div className="hero-actiion">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink> </div>
          <div className="hero-resume"><a className='cv' href={cv} download="resume"> My resume</a></div>
        </div>

    </div>
  )
}

export default Hero