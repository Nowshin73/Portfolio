import React from 'react'
import Intro from '../Components/Intro/Intro'
import Services from '../Components/Services/Services'
import Portfolio from '../Components/Portfolio/Portfolio'
import Contact from '../Components/Contact/Contact'

const Home = () => {
    return (
        <div>
            <Intro />
            <Services />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home