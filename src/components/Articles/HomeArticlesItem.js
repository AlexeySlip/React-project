import React from 'react'
import { Link } from 'react-router-dom'
import { FavoriteBorder, Favorite } from '@mui/icons-material'
import { connect } from 'react-redux'

const HomeArticlesItem = ({
    id,
    image,
    category,
    date,
    title,
    text,
    url,
    likes,
    isLiked = false,
    removeLike,
    addLike,
}) => {
    return (
        <>
            <div className="home-post-image">
                <Link to={`/SingleArticle/${url}`}>
                    <img src={image} alt="" />
                </Link>
            </div>
            <div className="home-post-text">
                <div className="post-head">
                    <i></i>
                    <span className="green-text">Category: </span>
                    <Link to={`/Blog/${category}`}>{category}</Link>
                    <span> at</span>
                    <i></i>
                    <span> {date}</span>
                </div>
                <div className="home-post-title">
                    <h2>
                        <Link to={`/SingleArticle/${url}`}>{title}</Link>
                    </h2>
                </div>
                <div className="home-post-excerpt">{text}</div>
                <div className="home-post-footer">
                    <div className="post-like">
                        <div
                            className="like"
                            onClick={() =>
                                isLiked ? removeLike(id) : addLike(id)
                            }
                        >
                            {isLiked ? <Favorite /> : <FavoriteBorder />}
                        </div>

                        <p>{likes}</p>
                    </div>
                    <Link to={`/SingleArticle/${url}`}>Read more</Link>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeArticlesItem)
