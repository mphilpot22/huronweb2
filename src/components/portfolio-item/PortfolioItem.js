import React from 'react'
import './PortfolioItem.css'

const PortfolioItem = (props) => {
  return (
    <div className='portfolio-item'>
        <div className="portfolio-item-header">
            <img src={props.image} alt="portfolio image" />
        </div>
        <div className="portfolio-item-info">
            <p>{props.name}</p>
            <p className='portfolio-item-location'>{props.location}</p>
            <a href={props.link} className='portfolio-item-link' target="_blank">Visit Site</a>
        </div>
    </div>
  )
}

export default PortfolioItem