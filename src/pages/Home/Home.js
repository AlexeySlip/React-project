import React from 'react'
import Alps from '../../components/Alps/Alps'
import HomeLastNews from '../../components/LastNews/HomeLastNews'
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery'
import HomeUpperSection from '../../components/UpperSection/HomeUpperSection'
import ReactSlick from '../../components/ReactSlick/ReactSlick'
import WhatYouNeed from '../../components/WhatYouNeed/WhatYouNeed'

const Home = () => {
    return (
        <>
            <HomeUpperSection />
            <Alps />
            <HomeLastNews />
            <WhatYouNeed />
            <ReactSlick />
            <PhotoGallery />
        </>
    )
}

export default Home
