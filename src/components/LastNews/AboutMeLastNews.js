import React from 'react'
import AboutMeArticles from '../Articles/AboutMeArticles'

const HomeLastNews = () => {
    return (
        <>
            <section className="about-me-last-news">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-12 col-sm-12">
                            <h2>Last news</h2>
                        </div>
                        <AboutMeArticles />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeLastNews
