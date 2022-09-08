import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/home/Home'
import WhyBeOnline from './pages/why-be-online/WhyBeOnline'
import Portfolio from './pages/portfolio/Portfolio'
import CustomWebDesign from './pages/services/custom-web-design/CustomWebDesign'
import Management from './pages/services/management/Management'
import SEO from './pages/services/seo/SEO'
import PPC from './pages/services/ppc/PPC'
import WebsiteAnalysis from './pages/services/website-analysis/WebsiteAnalysis'
import FAQ from './pages/faq/FAQ'
import Contact from './pages/contact/Contact'
import Pricing from './pages/pricing/Pricing'
import TOS from './pages/terms-of-service/TOS';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';

// Components
import Navbar from './components/navbar/Navbar'
import NavMenu from './components/nav-menu/NavMenu'
import MblNavBtn from './components/mbl-nav-btn/MblNavBtn'
import Footer from './components/footer/Footer'

// Context Providers
import NavBtnContextProvider from './contexts/NavBtnContext';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavBtnContextProvider>
        <NavMenu />
        <MblNavBtn />
      </NavBtnContextProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/why-be-online" element={<WhyBeOnline />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/services/custom-website-design" element={<CustomWebDesign />}/>
        <Route path="/services/website-management" element={<Management />}/>
        <Route path="/services/search-engine-optimization" element={<SEO />}/>
        <Route path="/services/pay-per-click-advertising" element={<PPC />}/>
        <Route path="/services/pay-per-click-advertising" element={<PPC />}/>
        <Route path="/services/website-analysis" element={<WebsiteAnalysis />}/>
        <Route path="/faq" element={<FAQ />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/plans-and-pricing" element={<Pricing />}/>
        <Route path="/terms-of-service" element={<TOS />}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
