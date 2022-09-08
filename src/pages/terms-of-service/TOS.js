import React from 'react'
import { Link } from 'react-router-dom'
import './TOS.css'

const TOS = () => {
  return (
    <section id="terms">
      <div className='terms-wrap'>
        <h1>Terms Of Service</h1>
        <h2>1. WHAT YOU ARE PAYING FOR</h2>
        <ul>
            <li>Any agreed upon services including but not limited to: Web Design, Search Engine Optimization (SEO), Pay-Per-Click Advertising or a Website Analysis.</li>
            <li>Web Design Services will also include the following at no extra cost:</li>
            <li>Domain Name Registration</li>
            <li>Hosting Plan</li>
            <li>SSL Certificate</li>
        </ul>
    
        <h2>2. COST</h2>
        <p>Cost will be determined and agreed upon after a consulation process based upon your individual needs. Starting costs are available for services on our website <Link to="/plans-and-pricing">here</Link>.</p>
    
        <h2>3. PAYMENT</h2>
        <p>Payment will be agreed upon as follows: A monthly payment plan with a set monthly date to collect payment for a minimum of 12 months. You can choose to pay your entire 12 month term up front if you would like.</p>
    
        <p>Accepted forms of payment include: Cash, Official Check and Paypal. Accepted checks must clear processing before services begin and/or end.</p>
    
        <h2>4. DELIVERY</h2>
        <p>Once the final revision has been agreed upon, your site will go live and we will begin processing monthly payments.</p>
    
        <h2>5. OWNERSHIP</h2>
        <p>You will retain all rights of ownership to the website if all 12 payments of your first term have been made in FULL.</p>
      </div>
    </section>
  )
}

export default TOS