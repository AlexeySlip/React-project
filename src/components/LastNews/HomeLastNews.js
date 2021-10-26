import React from 'react'
import HomeArticles from '../Articles/HomeArticles'

const HomeLastNews = () => {
    return (
        <>
            <section className="home-last-news">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-12 col-sm-12">
                            <h2>Last news</h2>
                        </div>
                        <HomeArticles />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeLastNews
