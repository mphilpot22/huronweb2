import React from 'react'
import { Link } from 'react-router-dom'
import './GuidedNavBox.css'

// Icons
import ArrowBack from '../../assets/svg/arrow-back.svg'
import ArrowForward from '../../assets/svg/arrow-forward.svg'

const GuidedNavBox = (props) => {
  return (
    <div className="guided-nav-wrap">
        <Link to={props.path1} className='l-r-nav-box'>
          <img src={ArrowBack} alt="arrow-back" />
          {props.linkName1}</Link>
        <Link to={props.path2} className='l-r-nav-box'>
          <img src={ArrowForward} alt="arrow-forward" />
          {props.linkName2}</Link>
      </div>
  )
}

export default GuidedNavBox