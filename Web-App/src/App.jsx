import { useState } from 'react'
import './App.css'
import NavBar from './components/pages/NavBar'
import HeroSection from './components/pages/HeroSection'
import WorkPage from './components/pages/WorkPage'
import BlogPage from './components/pages/BlogPage'
import TeamPage from './components/pages/TeamPage'
import ContactPage from './components/pages/ContactPage'
import ProductSection from './components/pages/ProductSection'
import Footer from './components/pages/Footer'
import TesTimonial from './components/pages/TesTimonial'
import ServicesSection from './components/pages/ServicesSection'

function App() {

  return (
    
    <div>
      <NavBar/>
      
      <HeroSection/>
      <ProductSection/>
      <ServicesSection/>
      <WorkPage/>
      <TesTimonial/>
      <BlogPage/>
      <TeamPage/>
      <ContactPage/>
      <Footer/>
      </div>
    
  )
}

export default App
