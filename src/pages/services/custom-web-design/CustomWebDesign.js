import React from 'react'
import { Link } from 'react-router-dom'
import './CustomWebDesign.css'

// Images
import DCFull from '../../../assets/png/dc-full-page.png'
import KlenowsFull from '../../../assets/png/klenows-full-page.png'

// Components
import CheckCard from '../../../components/check-card/CheckCard'
import ActNow from '../../../components/act-now-box/ActNow'
import GuidedNavBox from '../../../components/guided-nav-box/GuidedNavBox'

const CustomWebDesign = () => {
  return (
    <article id='custom-website-design'>
      <h1>Get A Custom, Modern Website.</h1>
      <div className="illustration-wrap">
        <img src={DCFull} alt="Website Illustration" />
        <img src={KlenowsFull} alt="Website Illustration" />
      </div>
      <div className="check-card-wrap">
        <CheckCard heading="Built From Scratch" info="Get a custom website built unlike any other. Our websites are built from scratch rather than using slow and bulky templates other designers might use."/>

        <CheckCard heading="Optimized For Performance" info="Our performance optimization techniques help make sure visitors are getting the best user experience. Never worry about a slow or buggy website."/>

        <CheckCard heading="Compelling Copywrite" info="All content on your website wil be written with clear, concise and impactful messaging in order to help market your products and/or services effectively."/>

        {/* <CheckCard heading="Search Engine Optimization" info="Keep up with the competition by having your business information appear on popular online platforms such as Google, Bing and Yelp. Optimized SEO will also help your website appear higher in local search results."/> */}

        <CheckCard heading="Fully Responsive Design" info="Know that your website will work seamlessly across all device types - phones, tablets, laptops, desktops and more."/>
      </div>
      <GuidedNavBox path1={"/"} linkName1="Home" path2={"/services/website-management"} linkName2="Website & Hosting Management"/>
      <ActNow />
    </article>
  )
}

export default CustomWebDesign