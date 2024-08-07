import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import React from 'react'
import HeroSection from './heroSection/HeroSection'

function HomePage() {
  return (
    <div style={{    backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '50vw auto',
        backgroundImage: "url('https://websitedemos.net/childcare-blog-02/wp-content/uploads/sites/760/2021/01/child-care-template-hero-img-bg.png')"}}>
        <Header/>
        <HeroSection/>
        <Footer/>
        </div>
  )
}

export default HomePage