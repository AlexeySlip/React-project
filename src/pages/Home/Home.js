import React from 'react'
import Alps from '../../components/Alps/Alps'
import LastNews from '../../components/LastNews/LastNews'
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery'
import HomePromoSection from '../../components/PromoSection/HomePromoSection'
import ReactSlick from '../../components/ReactSlick/ReactSlick'
import WhatYouNeed from '../../components/WhatYouNeed/WhatYouNeed'

const Home = () => {
    return (
        <>
            <HomePromoSection />
            <Alps />
            <LastNews />
            <WhatYouNeed />
            <ReactSlick />
            <PhotoGallery />
        </>
    )
}

export default Home
