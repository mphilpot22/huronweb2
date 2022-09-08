import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MblNavContext } from '../../contexts/NavBtnContext'
import './Dropdown.css'

const Dropdown = () => {
    
    const btn = useContext(MblNavContext)
    
  return (
    <ul id='nav-dropdown'>
        <li>
            <Link to="/services/custom-website-design" onClick={btn.toggleMenu}>Custom Website Design</Link>
        </li>
        <li>
            <Link to="/services/website-management" onClick={btn.toggleMenu}>Website & Hosting Management</Link>
        </li>
        <li>
            <Link to="/services/search-engine-optimization" onClick={btn.toggleMenu}>Search Engine Optimization</Link>
        </li>
        <li>
            <Link to="/services/pay-per-click-advertising" onClick={btn.toggleMenu}>Pay-Per-Click-Advertising</Link>
        </li>
        <li>
            <Link to="/services/website-analysis" onClick={btn.toggleMenu}>Website Analysis</Link>
        </li>
    </ul>
  )
}

export default Dropdown