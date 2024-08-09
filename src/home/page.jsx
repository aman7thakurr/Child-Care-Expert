import React from 'react'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import HeroSection from './heroSection/HeroSection'
import DirectorSection from './DirectorSection/DirectorSection'
import Newsletter from './newsletter/newsletter'
import FeaturedSection from './featuredSection'
import TopicsSection from './topicsSection'
import FeedbackSection from './feedback'
import ExpertSection from './expertSection'

function HomePage() {
  return (
    <div style={{    backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '50vw auto',
        backgroundImage: "url('https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/child-care-template-hero-img-bg.png')"}}>
        <Header/>
        <HeroSection/>
        <DirectorSection/>
        <FeaturedSection/>
        <TopicsSection/>
        <FeedbackSection/>
        <ExpertSection/>
        <Newsletter/>
        <Footer/>
        </div>
  )
}

export default HomePage;