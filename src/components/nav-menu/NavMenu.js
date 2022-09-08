import React, { useContext, useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './NavMenu.css'
import { MblNavContext } from '../../contexts/NavBtnContext'

// Components
import Dropdown from '../dropdown/Dropdown'

// Icons
import CallIcon from '../../assets/svg/call.svg'
import EmailIcon from '../../assets/svg/email.svg'
import DownArrow from '../../assets/svg/down-arrow.svg'

const NavMenu = () => {

    const btn = useContext(MblNavContext)

  return (
    <div id='mbl-nav-menu'>
        <div className="contact-bar">
            {/* <img src={CallIcon} alt="call" onClick={btn.toggleMenu}/> */}
            <a href="mailto:someone@yoursite.com">
                <img src={EmailIcon} alt="email" onClick={btn.toggleMenu}/>
            </a> 
            
        </div>
        <Link to="plans-and-pricing" className='pnp-btn' onClick={btn.toggleMenu}>Plans & Pricing</Link>
        <ul>
            <li>
                <Link to="/" onClick={btn.toggleMenu}>Home</Link>
            </li>
            <li>
                <Link to="/#whats-included" onClick={btn.toggleMenu}>What's Included</Link>
            </li>
            <li>
                <Link to="/why-be-online" onClick={btn.toggleMenu}>Why Be Online</Link>
            </li>
            <li>
                <Link to="/portfolio" onClick={btn.toggleMenu}>Portfolio</Link>
            </li>
            <li onClick={btn.toggleDropdown}>
                <a className='services-nav-btn'>Services <img src={DownArrow} alt="" /></a>
            </li>
                {btn.dropdown && <Dropdown />}
            <li>
                <Link to="/faq" onClick={btn.toggleMenu}>FAQ</Link>
            </li>
            <li>
                <Link to="/contact" onClick={btn.toggleMenu}>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavMenu