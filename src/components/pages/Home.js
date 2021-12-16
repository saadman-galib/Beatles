import React from 'react'
import Welcome from '../Welcome'
import '../../App.scss'
import Navbar from '../Navbar'
import HeroSection from '../HeroSection'
import About from '../About'

function Home() {
    return (
        <>
        <Welcome />
        <Navbar />
        <HeroSection />
        <About />
            
        </>
    )
}

export default Home
