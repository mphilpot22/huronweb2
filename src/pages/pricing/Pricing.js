import React from 'react'
import { Link } from 'react-router-dom'
import './Pricing.css'

const Pricing = () => {
  return (
    <section id='pricing'>
      <h1>Plans & Pricing</h1>
      <p className="pricing-notice">
        All plans are backed by a 30 day money-back guarantee. No hidden fees.
      </p>
      <div className="plan-wrap">
        <div className="plan">
          <h1>Startup</h1>
          <p className="price">$119/mo</p>
          <p className="no-fees">No startup fees</p>
          <ul>
            <li>Custom Website Design</li>
            <li>Up to <strong>8 Pages</strong></li>
            <li>Up to 4 Major Update Requests Per Month</li>
            <li>Managed Web Hosting</li>
            <li>Unlimited Technical Support</li>
            <li>Basic Search Engine Optimization (SEO)</li>
          </ul>
          <Link to="/contact" className='get-started-btn'>Get Started</Link>
        </div>

        <div className="plan plan-focus">
          <h1>Standard</h1>
          <p className="price">$139/mo</p>
          <span className="no-fees">No startup fees</span>
          <ul>
          <li>Custom Website Design</li>
            <li>Up to <strong>12 Pages</strong></li>
            <li>Up to 8 Major Update Requests Per Month</li>
            <li>Managed Web Hosting</li>
            <li>Unlimited Technical Support</li>
            <li>Basic Search Engine Optimization (SEO)</li>
          </ul>
          <Link to="/contact" className='get-started-btn'>Get Started</Link>
        </div>

        <div className="plan">
            <h1>Premium</h1>
            <p className="price">$199/mo</p>
            <span className="no-fees">No startup fees</span>
            <ul>
            <li>Custom Website Design</li>
            <li>Up to <strong>18 Pages</strong></li>
            <li>Unlimited Update Requests Per Month</li>
            <li>Managed Web Hosting</li>
            <li>Unlimited Technical Support</li>
            <li>Basic Search Engine Optimization (SEO)</li>
            </ul>
            <Link to="/contact" className='get-started-btn'>Get Started</Link>
        </div>
      </div>
      <h1>Additional Services</h1>
      <div className="additional-services-wrap">
        <div className="plan">
          <h1>Pay-Per-Click Advertising</h1>
          <p className="price">Custom</p>
          <p className='info'>Generate more leads and create more awareness with advertising campaigns through Google and/or Facebook ads.</p>
          <ul>
            <li>Set Your Own Daily Budget</li>
            <li>Scalable</li>
            <li>Analytics/Data Driven</li>
            <li>Cancel Any Time</li>
          </ul>
          <Link to="/contact" className='get-started-btn'>Get Started</Link>
        </div>
        <div className="plan">
          <h1>Website Analysis</h1>
          <p className="price">$10</p>
          <p className='info'>Get a custom report card on your current website to see areas we think need improvement. Areas we measure are the following:</p>
          <ul>
            <li>Speed & Performance</li>
            <li>User Friendliness</li>
            <li>Mobile Friendliness</li>
            <li>Messaging & Copywrite</li>
            <li>Search Engine Optimization</li>
          </ul>
          <Link to="/contact" className='get-started-btn'>Get Started</Link>
        </div>
      </div>
    </section>
  )
}

export default Pricing