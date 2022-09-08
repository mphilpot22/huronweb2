import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Home.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// Components
import IncludedCard from '../../components/included-card/IncludedCard'
import CheckCard from '../../components/check-card/CheckCard'
import ActNow from '../../components/act-now-box/ActNow'

// Images
import KlenowsFull from '../../assets/png/klenows-full-page.png'
import DCFull from '../../assets/png/dc-full-page.png'
import DCLaptop from '../../assets/png/dc-laptop-1.png'
import DCPhone from '../../assets/png/dc-phone-1.png'
import HeroImage from '../../assets/jpg/hero.jpg'

// Icons
import WebDesignIcon from '../../assets/svg/design2.svg'
import SEOIcon from '../../assets/svg/seo.svg'
import HostingIcon from '../../assets/svg/hosting.svg'
import UpdateIcon from '../../assets/svg/allincluded.svg'
import SupportIcon from '../../assets/svg/consult.svg'
import AnalyticsIcon from '../../assets/svg/analytics.svg'
import PPCIcon from '../../assets/svg/ppc.svg'
import AnalysisIcon from '../../assets/svg/analysis.svg'
import Arrow from '../../assets/svg/arrow-forward.svg'

const Home = () => {

  return (
    <>
      <main>
        <div className="main-wrap">
          <div className="cta-wrap">
            <p className='gaurantee'>30 day money-back gaurantee!</p>
            {/* <PricingBtn pricingBtnText='Plans & Pricing'/> */}
            <div className="header-wrap">
              <h1>No Obligation.</h1>
              <h1>No large up front costs.</h1>
              <h1>Love your website or you <strong>pay nothing.</strong></h1>
            </div>
            <p className='desktop-text'>Backed by a 30 day money-back-guarantee. Get a modern, fully managed website all at one low and predictable monthly price.</p>
            <div className="cta-btn-wrap">
              <Link to="/#whats-included" className='main-cta-btn'>What's Included</Link>
              <Link to="/portfolio" className='main-cta-btn'>Portfolio</Link>
            </div>
          </div>

          <div className="main-illustration-wrap">
            <img src={KlenowsFull} alt='Laptop Illustration' />
            <img src={DCFull} alt='Phone Illustration' />
          </div>
        </div>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 600 480" xmlSpace="preserve" className="triangle-img triangle-img--align-right">
              <g>
                <path className="st0" d="M232.16,108.54,76.5,357.6C43.2,410.88,81.5,480,144.34,480H455.66c62.83,0,101.14-69.12,67.84-122.4L367.84,108.54C336.51,58.41,263.49,58.41,232.16,108.54Z" fill=""></path>
                <path className="st0" d="M232.16,108.54,76.5,357.6C43.2,410.88,81.5,480,144.34,480H455.66c62.83,0,101.14-69.12,67.84-122.4L367.84,108.54C336.51,58.41,263.49,58.41,232.16,108.54Z" fill="url(#triangle-gradient)" fillOpacity="0.7"></path>
              </g>
              <defs>
                <pattern id="img1" patternUnits="userSpaceOnUse" width="650" height="650">
                  <image xlinkHref={HeroImage} x="0" y="00" width="550" height="650"></image>
                </pattern>
        
                <linearGradient id="triangle-gradient" y2="100%" x2="0" y1="50%" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#4C86E7"></stop>
                <stop offset="1" stopColor="#B939E5"></stop>
                </linearGradient>
              </defs>    
        </svg>
      </main>

      <article id="whats-included">
        <h1>Get a fully managed website <span>without any hidden fees or large startup cost.</span></h1>
        <div className="card-wrap">
          <IncludedCard icon={WebDesignIcon} heading="Custom Website Design" info="No complicated, overused and bulky templates. Get a modern, fast and responsive website made from scratch.">
            <Link to="/services/custom-website-design" className='learn-more-btn'>
              Learn More
              <img src={Arrow} alt="arrow" />
            </Link>
          </IncludedCard>
          <IncludedCard icon={SEOIcon} heading="Search Engine Optimization" info="Rank higher in local search results! SEO helps improve your website's ranking online in popular search engines like Google.">
            <Link to="/services/search-engine-optimization" className='learn-more-btn'>
              Learn More
              <img src={Arrow} alt="arrow" />
            </Link>
          </IncludedCard>
          <IncludedCard icon={HostingIcon} heading="Fully Managed Web Hosting" info="Never worry about security updates, backups or the technical aspects of your website. Everything is fully managed in every service plan.">
            <Link to="/services/website-management" className='learn-more-btn'>
              Learn More
              <img src={Arrow} alt="arrow" />
            </Link>
          </IncludedCard>
          <IncludedCard icon={UpdateIcon} heading="Monthly Update Requests" info="Major update requests are alloted for your website based on your service plan. Change, add or remove existing information to keep your website up to date."/>
          <IncludedCard icon={SupportIcon} heading="Unlimited Technical Support" info="Call us within normal business hours or email us any time if you have any questions or issues with your website. We are here to keep your website up and running."/>
          <IncludedCard icon={AnalyticsIcon} heading="Traffic Data & Analytics" info="Traffic information on your website is monitored to help us continune to find ways to improve it."/>
        </div>
      </article>

      <article id="additional-services">
        <h1>Additional Services</h1>
        <div className="card-wrap">
          <IncludedCard icon={PPCIcon} heading="Pay-Per-Click Advertising" info="Set your own budget and reach a larger target audience by advertising on popular platforms like Google and Facebook.">
            <Link to="/services/pay-per-click-advertising" className='learn-more-btn'>
              Learn More
              <img src={Arrow} alt="arrow" />
            </Link>
          </IncludedCard>
          <IncludedCard icon={AnalysisIcon} heading="$10 Website Analysis" info="Already have a website? Get a $10 personalized report card of your current website's performance. Note: We do not modify existing websites, we only create new ones.">
            <Link to="/services/website-analysis" className='learn-more-btn'>
              Learn More
              <img src={Arrow} alt="arrow" />
            </Link>
          </IncludedCard>
        </div>
      </article>

      <article id="made-for-small-business">
        <h1>Modern Design For Small Businesses</h1>
        <p>No matter your industry we can create a stunning, modern website just for you. We've taken pride in creating a variety of small business websites since 2015.</p>
        <div className="made-wrap">
          <div className="device-illustration-wrap">
            <img src={DCLaptop} alt="Website Img" />
            <img src={DCPhone} alt="Website Img" />
          </div>
          <div className="check-card-wrap">
            <CheckCard heading="Optimized For Performance"/>
            <CheckCard heading="Works On All Device Types"/>
            <CheckCard heading="Compelling Copywrite"/>
          </div>
        </div>
        {/* <Link to="/why-be-online" className='why-be-online-btn'>Why Be Online</Link> */}
      </article>

      <article id="reviews">
        <h1>Hear what our customers have to say.</h1>
        {/* <!-- Slider main container --> */}
        <Swiper pagination={{dynamicBullets: true}} modules={[Pagination]}className="swiper">
          {/* <!-- Additional required wrapper --> */}
          <div className="swiper-wrapper">
            {/* <!-- Slides --> */}
            <SwiperSlide className="swiper-slide">
              <p className="review-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium accusamus voluptates at in nemo repellat!</p>
              <p className="review-name">- Daisy Candles Company</p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <p className="review-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium accusamus voluptates at in nemo repellat!</p>
              <p className="review-name">- Daisy Candles Company</p>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <p className="review-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium accusamus voluptates at in nemo repellat!</p>
              <p className="review-name">- Daisy Candles Company</p>
            </SwiperSlide>
          </div>
          {/* <!-- If we need pagination --> */}
          <div className="swiper-pagination"></div>

          {/* <!-- If we need navigation buttons --> */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </article>

      <ActNow />
    </>
  )
}

export default Home