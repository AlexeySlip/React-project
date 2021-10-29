import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ArticlesArray from '../../components/Articles/ArticlesArray'
import RelatedPosts from '../../components/RelatedPosts/RelatedPosts'
import { FavoriteBorder, Favorite } from '@mui/icons-material'
import { connect } from 'react-redux'

const SingleArticle = () => {
    let { url } = useParams()
    return (
        <>
            <div className="single-article">
                {ArticlesArray.filter((item) => item.url === url).map(
                    ({
                        id,
                        image,
                        title,
                        author,
                        date,
                        category,
                        likes,
                        isLiked = false,
                    }) => (
                        <>
                            <section
                                className="single-article-upper-section"
                                style={{ backgroundImage: `url(${image})` }}
                                key={id}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="single-article-upper-content">
                                            <h1>{title}</h1>
                                            <div className="single-article-upper-information">
                                                <p>{author}</p>
                                                <p>at</p>
                                                <p>{date}</p>
                                                <Link to={`/Blog/${category}`}>
                                                    {category}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="single-article-content-section">
                                <div className="container">
                                    <div className="row">
                                        <div className="single-article-content-entry">
                                            <div className="col-xs-12 col-md-8 col-sm-10">
                                                <h3>
                                                    Quisque{' '}
                                                    <span className="green-text">
                                                        lorem tortor fringilla
                                                    </span>{' '}
                                                    sed, vestibulum id, eleifend
                                                    justo vel bibendum sapien
                                                    massa ac turpis faucibus
                                                    orci luctus non,
                                                    consectetuer. Maecenas
                                                    malesuada elit lectus felis.
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="single-article-content">
                                            <div className="col-xs-12 col-md-6 col-sm-6">
                                                <img
                                                    src="/images/articles/home_behind_blog3-960x720.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="col-xs-12 col-md-6 col-sm-6">
                                                <img
                                                    src="/images/articles/home_behind_blog2-960x720.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="single-article-text">
                                            <div className="col-xs-12 col-md-8 col-sm-10">
                                                <p>
                                                    Lorem ipsum dolor sit amet
                                                    enim. Etiam ullamcorper.
                                                    Suspendisse a pellentesque
                                                    dui, non felis. Maecenas
                                                    malesuada elit lectus felis,
                                                    malesuada ultricies.
                                                    Curabitur et ligula. Ut
                                                    molestie a, ultricies porta
                                                    urna. Vestibulum commodo
                                                    volutpat a, convallis ac,
                                                    laoreet enim.
                                                </p>
                                                <div className="single-article-quotes">
                                                    <p>
                                                        Nulla ipsum dolor lacus,
                                                        suscipit adipiscing. Cum
                                                        sociis natoque penatibus
                                                        et ultrices volutpat.
                                                        Nullam wisi ultricies a,
                                                        gravida vitae, dapibus
                                                        risus ante sodales
                                                        lectus blandit eu,
                                                        tempor diam pede cursus
                                                        vitae, ultricies eu
                                                    </p>
                                                    <Link
                                                        to="#"
                                                        className="green-text"
                                                    >
                                                        Nullam Risus
                                                    </Link>
                                                </div>
                                                <p>
                                                    Phasellus fermentum in,
                                                    dolor. Pellentesque
                                                    facilisis. Nulla imperdiet
                                                    sit amet magna. Vestibulum
                                                    dapibus, mauris nec
                                                    malesuada fames ac turpis
                                                    velit, rhoncus eu, luctus et
                                                    interdum adipiscing wisi.
                                                    Aliquam erat ac ipsum.
                                                    Integer aliquam purus.
                                                    Quisque lorem tortor
                                                    fringilla sed, vestibulum
                                                    id, eleifend justo vel
                                                    bibendum sapien massa ac
                                                    turpis faucibus orci luctus
                                                    non, consectetuer.
                                                </p>
                                                <p>
                                                    Integer ultrices posuere
                                                    cubilia Curae, Nulla ipsum
                                                    dolor lacus, suscipit
                                                    adipiscing. Cum sociis
                                                    natoque penatibus et
                                                    ultrices volutpat. Nullam
                                                    wisi ultricies a, gravida
                                                    vitae, dapibus risus ante
                                                    sodales lectus blandit eu,
                                                    tempor diam pede cursus
                                                    vitae, ultricies eu,
                                                    faucibus quis, porttitor
                                                    eros cursus lectus,
                                                    pellentesque eget, bibendum
                                                    a, gravida ullamcorper quam.
                                                    Nullam viverra consectetuer.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-12 col-sm-12">
                                            <div className="single-article-content-footer">
                                                <div className="share-block">
                                                    <span>Share</span>
                                                </div>
                                                <div className="post-like">
                                                    {isLiked ? (
                                                        <Favorite />
                                                    ) : (
                                                        <FavoriteBorder />
                                                    )}
                                                    <p>{likes}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <RelatedPosts id={id} />
                        </>
                    )
                )}
            </div>
        </>
    )
}

const mapStateToProps = (state, { id }) => ({ isLiked: state[id] })

export default connect(mapStateToProps)(SingleArticle)
