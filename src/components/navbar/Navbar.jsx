import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/vlogo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import open_menu from '../../assets/menu-open.png'
import close_menu from '../../assets/menu-close.png'

const Navbar = () => {

  const menRef=useRef()
  const openMenu=()=>{
    menRef.current.style.right="0"
  }
  const closeMenu=()=>{
    menRef.current.style.right="-350px"
  }
  return (
    <div className='navbar'>
       <img className='logo' src={logo} alt="" />
       <img src={open_menu} onClick={openMenu} alt="" className='nav-open'/>

       <ul ref={menRef} className="nav-menu">
        <img src={close_menu} onClick={closeMenu} alt="" className='nav-close'/>
        <li><AnchorLink className='anchor-link' offset={50} href='#'><p>home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p>About</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p>Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
       </ul>

       <div className="nav-connect">
       <AnchorLink className='anchor-link' offset={50} href='#contact'> connect me</AnchorLink> 
       </div>

    </div>
  )
}

export default Navbar