import React from 'react'
import './FAQ.css'

// Icons
import FAQIcon from '../../assets/svg/faq.svg'

// Components
import FAQCard from '../../components/faq-card/FAQCard'
import ActNow from '../../components/act-now-box/ActNow'

const FAQ = () => {
  return (
    <>
    <article id='faq'>
      <h1>Frequently Asked Questions</h1>
      <img src={FAQIcon} alt="faq-icon" className='faq-icon'/>
      <div className="card-wrap">
        <FAQCard heading="How long does this process usually take?" info="This process can take anywhere between 2-4 weeks depending upon the size of the project. Smaller websites are completed much faster than larger ones."/>
        <FAQCard heading="Can you modify my existing website?" info="We cannot modify your exising website. Because of the nature of web design it would be much more complicated to try to change someone else's code rather than start over and make it from scratch."/>
        <FAQCard heading="Do you build ECommerce websites? (Online shopping websites)" info="We do not build ECommerce websites. We used to do those in the past, but these websites are typically much larger in design scope and we've decided not to tackle them at this time."/>
        <FAQCard heading="What kind of gaurantee or warranty do you offer?" info="We offer a 30 day, money-back guarantee. You may cancel any time within that period if you do not wish to continue services."/>
        <FAQCard heading="Is there a required term for services?" info="Required with every service plan is a 12 month term for your website. You may cancel any time after that or within your 30 day, money-back guarantee period if you are unsatisfied."/>
        <FAQCard heading="What happens if I cancel service before the end of my 12 month term?" info="You may choose to cancel service before the end of your 12 month term but you will not receive ownership rights to your website. If you wish to pause services for a while and pick back up at a later time, you may do that as well."/>
        <FAQCard heading="Who owns the website once it is completed?" info="Once you've completed your 12 month term with us the website will be entirely owned by you."/>
      </div>
    </article>
    <ActNow />
    </>
  )
}

export default FAQ