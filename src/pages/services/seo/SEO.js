import React from 'react'
import './SEO.css'
import { Link } from 'react-router-dom'

// Images
import Google from '../../../assets/png/google1.png'
import Yelp from '../../../assets/png/yelp1.jpg'

// Components
import CheckCard from '../../../components/check-card/CheckCard'
import ActNow from '../../../components/act-now-box/ActNow'
import GuidedNavBox from '../../../components/guided-nav-box/GuidedNavBox'

const SEO = () => {
  return (
    <article id='seo'>
      <h1>Appear In Local Search Results.</h1>
      <p className='seo-explanation'>
        Search engine optimization (SEO), is the optimization of your website so that it will rank higher in local search results on popular search engines like Google. Get some of the best SEO for your website with our services listed below.
      </p>
      <div className="seo-illustration-wrap">
        <img src={Google} alt="google" className='google-illustration'/>
        <img src={Yelp} alt="yelp" className='yelp-illustration'/>
      </div>
      <div className="card-wrap">
        <CheckCard heading="Performance Optimization" info="One of the largest factors in SEO ranking is site speed and performance. We make sure your website follows Google's strict standards for performance optimization."/>
        <CheckCard heading="Online Business Registration" info="Your business will be registered and visible on the most popular search platforms - including Google, Bing, Apple Maps and Yelp."/>
        <CheckCard heading="Keyword Research" info="Included in every SEO strategy is relevant keyword research to help your website rank higher for certain search terms."/>
        <CheckCard heading="Traffic Analytics" info="We continue to monitor your website's traffic to see how users are reacting to different pages. This allows us to further hone our SEO strategy over time."/>
      </div>
      <div className="seo-act-now">
        <h1>A Personalized SEO Strategy</h1>
        <p>With our SEO strategies your business will be more visible online, is sure to rank higher in local search results and will also have a registered page on popular platforms like Google, Bing, Apple Maps and Yelp.</p>
        <Link to="/plans-and-pricing" className='seo-act-now-btn'>View Our Service Plans</Link>
      </div>
      <GuidedNavBox path1={"/services/website-management"} linkName1="Website & Hosting Management" path2={"/services/pay-per-click-advertising"} linkName2="Pay-Per-Click Advertising"/>
      <ActNow />
    </article>
  )
}

export default SEO