import React from 'react'
import './CheckCard.css'

// Icons
import CheckIcon from '../../assets/svg/check.svg'

const CheckCard = (props) => {
  return (
    <div className='check-card'>
        <div className="card-header">
            <img src={CheckIcon} alt="Check Icon" />
            <h2>{props.heading}</h2>
        </div>
        <p>{props.info}</p>
    </div>
  )
}

export default CheckCard