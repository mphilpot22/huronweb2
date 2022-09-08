import React, { useContext, useState } from 'react'
import './MblNavBtn.css'
import MenuIcon from '../../assets/svg/menu.svg'
import MenuOpenIcon from '../../assets/svg/menu-open.svg'
import { MblNavContext } from '../../contexts/NavBtnContext'

const MblNavBtn = () => {

  const btn = useContext(MblNavContext)

  return (
    <img 
      src={btn.click ? MenuIcon : MenuOpenIcon} 
      alt="Menu Icon" 
      id='mbl-nav-btn'
      onClick={btn.toggleMenu}/>
  )
}

export default MblNavBtn