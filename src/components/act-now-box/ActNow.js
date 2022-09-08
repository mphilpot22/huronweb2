import React from 'react'
import { Link } from 'react-router-dom'
import './ActNow.css'

const ActNow = () => {
  return (
    <div className="act-now-wrap">
        <div className="info-wrap">
            <p>No obligation, no large startup costs.</p>
            <p>30 day money-back-guarantee.</p>
            <p>Pay nothing if you don't love your website.</p>
        </div>
        <Link to="/plans-and-pricing" className='plans-and-pricing-btn'>Plans & Pricing</Link>
    </div>
  )
}

export default ActNow