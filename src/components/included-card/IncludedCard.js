import React from 'react'
import './IncludedCard.css'

const IncludedCard = (props) => {
  return (
    <div className="included-card">
        <div className="card-header">
            <img src={props.icon} alt="Card Icon" />
            <h2>{props.heading}</h2>
        </div>
        <p className="card-info">
            {props.info}
        </p>
        {props.children}
    </div>
  )
}

export default IncludedCard