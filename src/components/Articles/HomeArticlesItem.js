import React from 'react'
import { Link } from 'react-router-dom'
import { FavoriteBorder, Favorite } from '@mui/icons-material'
import { connect } from 'react-redux'
import DescriptionIcon from '@mui/icons-material/Description'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

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
                    <span className="green-text">Category: </span>
                    <Link to={`/Blog/${category}`}>{category}</Link>
                    <span> at</span>
                    <AccessTimeIcon fontSize="small" />
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
                            {isLiked ? (
                                <Favorite fontSize="small" />
                            ) : (
                                <FavoriteBorder fontSize="small" />
                            )}
                        </div>

                        <p>{isLiked ? likes + 1 : likes}</p>
                    </div>
                    <Link to={`/SingleArticle/${url}`}>
                        <DescriptionIcon fontSize="small" />
                        Read more
                    </Link>
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
