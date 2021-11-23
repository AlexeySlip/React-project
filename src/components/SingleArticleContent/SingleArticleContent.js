import React from 'react'
import { Link } from 'react-router-dom'
import { FavoriteBorder, Favorite } from '@mui/icons-material'
import { connect } from 'react-redux'
import PersonIcon from '@mui/icons-material/Person'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import TelegramIcon from '@mui/icons-material/Telegram'

const SingleArticleContent = ({
    id,
    likes,
    isLiked = false,
    addLike,
    removeLike,
}) => {
    return (
        <>
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
                                    sed, vestibulum id, eleifend justo vel
                                    bibendum sapien massa ac turpis faucibus
                                    orci luctus non, consectetuer. Maecenas
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
                                    Lorem ipsum dolor sit amet enim. Etiam
                                    ullamcorper. Suspendisse a pellentesque dui,
                                    non felis. Maecenas malesuada elit lectus
                                    felis, malesuada ultricies. Curabitur et
                                    ligula. Ut molestie a, ultricies porta urna.
                                    Vestibulum commodo volutpat a, convallis ac,
                                    laoreet enim.
                                </p>
                                <div className="single-article-quotes">
                                    <p>
                                        Nulla ipsum dolor lacus, suscipit
                                        adipiscing. Cum sociis natoque penatibus
                                        et ultrices volutpat. Nullam wisi
                                        ultricies a, gravida vitae, dapibus
                                        risus ante sodales lectus blandit eu,
                                        tempor diam pede cursus vitae, ultricies
                                        eu
                                    </p>
                                    <Link to="#" className="green-text">
                                        <PersonIcon fontSize="medium" />
                                        Nullam Risus
                                    </Link>
                                </div>
                                <p>
                                    Phasellus fermentum in, dolor. Pellentesque
                                    facilisis. Nulla imperdiet sit amet magna.
                                    Vestibulum dapibus, mauris nec malesuada
                                    fames ac turpis velit, rhoncus eu, luctus et
                                    interdum adipiscing wisi. Aliquam erat ac
                                    ipsum. Integer aliquam purus. Quisque lorem
                                    tortor fringilla sed, vestibulum id,
                                    eleifend justo vel bibendum sapien massa ac
                                    turpis faucibus orci luctus non,
                                    consectetuer.
                                </p>
                                <p>
                                    Integer ultrices posuere cubilia Curae,
                                    Nulla ipsum dolor lacus, suscipit
                                    adipiscing. Cum sociis natoque penatibus et
                                    ultrices volutpat. Nullam wisi ultricies a,
                                    gravida vitae, dapibus risus ante sodales
                                    lectus blandit eu, tempor diam pede cursus
                                    vitae, ultricies eu, faucibus quis,
                                    porttitor eros cursus lectus, pellentesque
                                    eget, bibendum a, gravida ullamcorper quam.
                                    Nullam viverra consectetuer.
                                </p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-12 col-sm-12">
                            <div className="single-article-content-footer">
                                <div className="share-block">
                                    <span>Share</span>
                                    <div>
                                        <a href="*">
                                            <FacebookIcon
                                                fontSize="small"
                                                className="facebook-icon"
                                            />
                                        </a>
                                        <a href="*">
                                            {' '}
                                            <InstagramIcon
                                                fontSize="small"
                                                className="instagram-icon"
                                            />
                                        </a>
                                        <a href="*">
                                            {' '}
                                            <TwitterIcon
                                                fontSize="small"
                                                className="twitter-icon"
                                            />
                                        </a>

                                        <a href="*">
                                            {' '}
                                            <TelegramIcon
                                                fontSize="small"
                                                className="telegram-icon"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="post-like">
                                    <div
                                        className="like"
                                        onClick={() =>
                                            isLiked
                                                ? removeLike(id)
                                                : addLike(id)
                                        }
                                    >
                                        {isLiked ? (
                                            <Favorite fontSize="small" />
                                        ) : (
                                            <FavoriteBorder fontSize="small" />
                                        )}
                                    </div>

                                    <p>{likes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const mapStateToProps = (state, { id }) => ({
    isLiked: state.articlesLikeState[id],
})

const mapDispatchToProps = (dispatch) => ({
    addLike: (id) =>
        dispatch({
            type: 'LIKE',
            id,
        }),
    removeLike: (id) =>
        dispatch({
            type: 'DISLIKE',
            id,
        }),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleArticleContent)
