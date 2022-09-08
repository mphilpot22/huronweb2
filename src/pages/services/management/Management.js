import React from 'react'
import { Link } from 'react-router-dom'
import './Management.css'

// Images
import Server from '../../../assets/png/server.png'

// Components
import CheckCard from '../../../components/check-card/CheckCard'
import ActNow from '../../../components/act-now-box/ActNow'
import GuidedNavBox from '../../../components/guided-nav-box/GuidedNavBox'

const Management = () => {
  return (
    <article id='website-management'>
      <h1>Never worry about your website's technical details.</h1>
      <img src={Server} alt="Server Illustration" className='server-illustration'/>
      <div className="cta-wrap">
        <h1>Web Hosting Is Included With All Service Plans</h1>
        <p>Never pay extra for your domain name (web address), hosting or SSL Certificate. All hosting services are included in every service plan we offer.</p>
        <Link to="/plans-and-pricing" className='service-btn'>View Our Service Plans</Link>
      </div>
      <div className="card-wrap">
        <CheckCard heading="Monthly Update Requests" info="Get a specific number of major update requests per month based on your service plan. Minor updates like changing your phone number and address are free."/>
        <CheckCard heading="Data Analytics" info="We collect important user information to help us continue to improve your website for further use. This guarantees you are getting the most from your service."/>
        <CheckCard heading="Software Updates" info="Web hosting often requires software and security updates that we will manage."/>
        <CheckCard heading="Regular Backups" info="Regular backups ensure that if anything were to happen to your website we could have it back up and running in minutes."/>
      </div>
      <GuidedNavBox path1={"/services/custom-website-design"} linkName1="Custom Website Design" path2={"/services/search-engine-optimization"} linkName2="Search Engine Optimization"/>
      <ActNow />
    </article>
  )
}

export default Management