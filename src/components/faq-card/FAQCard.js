import React from 'react'
import './FAQCard.css'

const FAQCard = (props) => {
  return (
    <div className='faq-card'>
        <h2>{props.heading}</h2>
        <p>{props.info}</p>
    </div>
  )
}

export default FAQCard