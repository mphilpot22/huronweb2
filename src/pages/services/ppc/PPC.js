import React from 'react'
import { Link } from 'react-router-dom'
import './PPC.css'

// Images
import PPCImage from '../../../assets/png/ppc.png'

// Components
import CheckCard from '../../../components/check-card/CheckCard'
import ActNow from '../../../components/act-now-box/ActNow'
import GuidedNavBox from '../../../components/guided-nav-box/GuidedNavBox'

const PPC = () => {
  return (
    <article id='ppc'>
      <h1>Get A Personalized Advertising Campaign</h1>
      <img src={PPCImage} alt="ppc image" className='ppc-illustration'/>
      <p className='ppc-text'>Reach a larger target audience online by advertising on popular platforms like Google and Facebook.</p>
      <Link to="/plans-and-pricing" className='ppc-cta'>View Our Service Plans</Link>
      <div className="card-wrap">
        <CheckCard heading="Select A Target Audience" info="Select and advertise to a specific demographic to make sure you're reaching the right people online."/>
        <CheckCard heading="Set Your Own Daily Budget" info="Spend only what you need. Advertise a little and spend a little, or spend more to really boost your presence online."/>
        <CheckCard heading="Advertise on Facebook & Google" info="Appear locally on the world's most used platforms!"/>
        <CheckCard heading="Cancel Any Time" info="No long term commitment required. Advertise as long or as short as you need."/>
      </div> 
      <GuidedNavBox path1={"/services/search-engine-optimization"} linkName1="Search Engine Optimization" path2={"/services/website-analysis"} linkName2="$10 Website Analysis" />
      <ActNow />
    </article>
  )
}

export default PPC