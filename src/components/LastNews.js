import React from 'react'
import { Link } from 'react-router-dom'
import HeadArticles from './Articles/HeadArticles'

const LastNews = () => {
    return (
        <>
            <section className="last-news">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-12 col-sm-12">
                            <h2>Last news</h2>
                        </div>
                        {/*<div className="home-post">
                            <div className="col-xs-12 col-md-4 col-sm-4">
                                <div className="head-post-image">
                                    <Link>
                                        <img src="/images/home_behind_blog1-960x720.jpg" />
                                    </Link>
                                </div>
                                <div className="head-post-text">
                                    <div className="head-post-head">
                                        <i></i>
                                        <Link>Desert</Link>
                                        <span> at</span>
                                        <i></i>
                                        <span> Date</span>
                                    </div>
                                    <div className="head-post-title">
                                        <h2>
                                            <Link>
                                                Vestibulum dapibus mauris
                                            </Link>
                                        </h2>
                                    </div>
                                    <div className="head-post-excerpt">
                                        Lorem ipsum dolor sit amet enim. Etiam
                                        ullamcorper. Suspendisse a pellentesque
                                        dui, non felis. Maecenas malesuada elit
                                        lectus felis, malesuada ultricies.
                                        Curabitur et ligula. Ut molestie a,
                                        ultricies porta urna. Vestibulum commodo
                                        volutpat dolor.
                                    </div>
                                    <div className="head-post-footer">
                                        <Link>Read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <HeadArticles />
                    </div>
                </div>
            </section>
        </>
    )
}

export default LastNews
