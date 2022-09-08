import React from 'react'
import './Portfolio.css'

// Components
import PortfolioItem from '../../components/portfolio-item/PortfolioItem'
import ActNow from '../../components/act-now-box/ActNow'

// Images
import DCFull from '../../assets/png/dc-full-page.png'
import KlenowsFull from '../../assets/png/klenows-full-page.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>Check out some of our work.</h1>
      <div className="portfolio-wrap">
        <PortfolioItem image={DCFull} name="Daisy Candles Company" location="Tawas City, MI" link="https://www.daisycandles.com"/>
        <PortfolioItem image={KlenowsFull} name="Klenow's Market" location="East Tawas City, MI" link="https://www.klenowsmarket.com"/>
      </div>
      <ActNow />
    </section>
  )
}

export default Portfolio