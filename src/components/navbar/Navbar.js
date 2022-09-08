import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Navbar.css'

const Navbar = () => {

  return (
    <nav id="main-nav">
      <Link to="/#" className='logo-link'>Huron Web</Link>
      <ul className="link-wrap">
        <Link to="/#whats-included">What's Included</Link>
        <Link to="/why-be-online">Why Be Online</Link>
        <a href="#" className='drop-down-btn'>Services</a>
        <ul className='drown-down-content'>
          <li>
              <Link to="/services/custom-website-design">Custom Website Design</Link>
          </li>
          <li>
              <Link to="/services/website-management">Website & Hosting Management</Link>
          </li>
          <li>
              <Link to="/services/search-engine-optimization">Search Engine Optimization</Link>
          </li>
          <li>
              <Link to="/services/pay-per-click-advertising">Pay-Per-Click-Advertising</Link>
          </li>
          <li>
              <Link to="/services/website-analysis">Website Analysis</Link>
          </li>
        </ul>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </ul>
      <Link to="plans-and-pricing" className='pnp-btn'>Plans & Pricing</Link>
    </nav>
  )
}

export default Navbar