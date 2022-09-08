import React from 'react'
import { Link } from 'react-router-dom'
import './PricingBtn.css'

const PricingBtn = (props) => {
  return (
    <Link to="/plans-and-pricing" className='pricing-btn'>{props.pricingBtnText}</Link>
  )
}

export default PricingBtn