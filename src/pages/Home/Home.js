import React from 'react'
import Alps from '../../components/Alps'
import LastNews from '../../components/LastNews'
import PhotoGallery from '../../components/PhotoGallery'
import PromoSection from '../../components/PromoSection'
import ReactSlick from '../../components/ReactSlick'
import WhatYouNeed from '../../components/WhatYouNeed'

const Home = () => {
    return (
        <>
            <PromoSection />
            <Alps />
            <LastNews />
            <WhatYouNeed />
            <ReactSlick />
            <PhotoGallery />
        </>
    )
}

export default Home
