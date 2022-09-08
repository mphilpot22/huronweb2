import React from 'react'
import './WhyBeOnline.css'

// Images
import DCLaptop from '../../assets/png/dc-laptop-1.png'
import DCPhone from '../../assets/png/dc-phone-1.png'

// Icons
import SearchIcon from '../../assets/svg/discover.svg'
import TimeIcon from '../../assets/svg/time.svg'
import ShowcaseIcon from '../../assets/svg/showcase.svg'
import CredibilityIcon from '../../assets/svg/credibility.svg'

// Components
import IncludedCard from '../../components/included-card/IncludedCard'
import ActNow from '../../components/act-now-box/ActNow'

const WhyBeOnline = () => {
  return (
    <article id='why-be-online'>
      <h1>Four reasons why we think your small business should have an online presence.</h1>
      <div className="device-illustration-wrap">
        <img src={DCLaptop} alt="Website Img" />
        <img src={DCPhone} alt="Website Img" />
      </div>
      <div className="card-wrap">
        <IncludedCard icon={SearchIcon} heading="Be seen online in local search results." info="According to Google, 50% of 'near me' or 'open now' searches result in a phone call or a physical store visit. In an age where everyone is searching for products and services online, having a well ranking website will have a direct impact on in-store traffic and leads."/>
        <IncludedCard icon={TimeIcon} heading="Save time and customer service." info="No different than a flyer, pamphlet or brochure, your digital storefront will remain online 24/7 answering a multitide of important questions for you."/>
        <IncludedCard icon={ShowcaseIcon} heading="Showcase your services, experience & qualifications." info="Having a place to showcase your prodcuts, services and qualifications can go a long way in helping you stand out from the crowd and build customer confidence."/>
        <IncludedCard icon={CredibilityIcon} heading="Credibility and trust." info="Having a well designed website will help build further credibility and trust as it shows customers that you are both professional and official. We stress 'well designed' too, as it might be the first impression some get of your business before deciding to make a purchase, call or visit."/>
      </div>
      <ActNow />
    </article>
  )
}

export default WhyBeOnline