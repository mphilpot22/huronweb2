import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-contact-info">
        <Link to="/#">
        <h1>Huron Web Design</h1></Link>
        {/* <p>P.O. Box 999999 #99999</p> */}
        <p>Tawas City, Michigan</p>
        {/* <br /> */}
        {/* <p>(800) 999-9999</p> */}
        <a href="mailto:huronwebofficial@gmail.com">huronwebofficial@gmail.com</a>
      </div>

      <div className="footer-services">
        <h2>Services</h2>
        <Link to="/services/custom-website-design">Custom Website Design</Link>
        <Link to="/services/website-management">Website & Hosting Management</Link>
        <Link to="/services/search-engine-optimization">Search Engine Optimization</Link>
        <Link to="/services/pay-per-click-advertising">Pay-Per-Click Advertising</Link>
        <Link to="/services/website-analysis">$10 Website Analysis</Link>
      </div>

      <div className="footer-sitemap">
        <h2>Sitemap</h2>
        <Link to="/">Home</Link>
        <Link to="/why-be-online">Why Be Online</Link>
        <Link to="/whats-included">What's Included</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/plans-and-pricing">Plans & Pricing</Link>
        <Link to="/faq">FAQ</Link>
      </div>

      <div className="footer-company">
        <h2>Company</h2>
        <Link to="/contact">Contact</Link>
        <Link to="/terms-of-service">Terms Of Service</Link>
        {/* <Link to="/privacy-policy">Privacy Policy</Link> */}
      </div>
    </footer>
  )
}

export default Footer