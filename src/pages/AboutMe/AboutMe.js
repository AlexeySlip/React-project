import React from 'react'
import AboutMeUpperSection from '../../components/UpperSection/AboutMeUpperSection'
import AboutMeLastNews from '../../components/LastNews/AboutMeLastNews'
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery'
import TravelersGuides from '../../components/Travelers guides/TravelersGuides'

const AboutMe = () => {
    return (
        <>
            <AboutMeUpperSection />
            <AboutMeLastNews />
            <TravelersGuides />
            <PhotoGallery />
        </>
    )
}

export default AboutMe
