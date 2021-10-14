import React from 'react'
import Alps from '../../components/Alps'
import LastNews from '../../components/LastNews'
import PromoSection from '../../components/PromoSection'
import Videos from '../../components/Videos'
import WhatYouNeed from '../../components/WhatYouNeed'

const Home = () => {
    return (
        <>
            <PromoSection />
            <Alps />
            <LastNews />
            <WhatYouNeed />
            <Videos />
        </>
    )
}

export default Home
