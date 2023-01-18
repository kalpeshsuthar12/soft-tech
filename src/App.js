import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import FaqPage from './pages/FaqPage';
import ProjectsPage from './pages/ProjectsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import NotFoundPage from './pages/NotFoundPage';
import HowWeWorkPage from './pages/HowWeWorkPage';
import MissionPage from './pages/MissionPage';
import TeamPage from './pages/TeamPage';
import CareersPage from './pages/CareersPage';
import OurValuesPage from './pages/OurValuesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ServicesPage from './pages/ServicesPage';
import ProjectDetailPage from './pages/ProjectDetailPage';


function App() {
  useEffect(()=>{
    window.addEventListener('load',function(){
      document.querySelector('body').classList.add("loaded")
    });
  },[])  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/home" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/services" element={<ServicesPage/>}></Route>
        <Route path="/service/:slug" element={<ServiceDetailPage/>}></Route>
        <Route path="/case-studies" element={<ProjectsPage/>}></Route>
        <Route path="/case-study/:slug" element={<ProjectDetailPage/>}></Route>
        <Route path="/blogs" element={<BlogPage/>}></Route>
        <Route path="/blog/:slug" element={<BlogDetailPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
        <Route path="/faq" element={<FaqPage/>}></Route>
        <Route path="/careers" element={<CareersPage/>}></Route>
        <Route path="/our-value" element={<OurValuesPage/>}></Route>
        <Route path="/our-team" element={<TeamPage/>}></Route>
        <Route path="/mission-vision" element={<MissionPage/>}></Route>
        <Route path="/how-we-work" element={<HowWeWorkPage/>}></Route>        
        <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}></Route>
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage/>}></Route>
        <Route path="/*" element={<NotFoundPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
