import React from 'react'
import './WebsiteAnalysis.css'

// Components
import CheckCard from '../../../components/check-card/CheckCard'
import ActNow from '../../../components/act-now-box/ActNow'
import GuidedNavBox from '../../../components/guided-nav-box/GuidedNavBox'

// Images
import Analysis from '../../../assets/jpg/analysis.jpg'

const WebsiteAnalysis = () => {
  return (
    <article id='website-analysis'>
      <h1>Already have a website? Let us show you how we could improve it.</h1>
      <img src={Analysis} alt="website-analysis" className='analysis-illustration'/>
      <p className='analysis-text'>Get a personalized report card of your website's performance. <i>Note: We do not update existing websites, we only create new ones.</i></p>
      <div className="card-wrap">
        <CheckCard heading="Speed" info="First thing we check when analyzing a website is it's performance on different network types. How fast your website loads can have a huge impact on whether people stay to browse it."/>
        <CheckCard heading="User-Friendliness" info="User-friendliness can go a long way in seeing your visitors all the way through the sales process. If your website is unorderly and it is difficult to find your way around, you could be losing valuable leads."/>
        <CheckCard heading="SEO" info="Search Engine Optimization is your website's ability to rank higher in local search engines like Google. If your website isn't optimized correctly for good SEO, it's likely you're not showing up in search results where you should be."/>
      </div>
      <GuidedNavBox path1={"/services/pay-per-click-advertising"} linkName1="Pay-Per-Click Advertising" path2={"/plans-and-pricing"} linkName2="Plans & Pricing" />
      <ActNow />
    </article>
  )
}

export default WebsiteAnalysis