import React from 'react'
import { Link } from 'react-router-dom'
import { FavoriteBorder, Favorite } from '@mui/icons-material'
import { connect } from 'react-redux'
import DescriptionIcon from '@mui/icons-material/Description'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const BlogArticlesItem = ({
    id,
    image,
    category,
    date,
    title,
    text,
    url,
    likes,
    isLiked = false,
    addLike,
    removeLike,
}) => {
    return (
        <>
            <div className="col-xs-12 col-md-5 col-sm-6">
                <div className="blog-post-image ">
                    <Link to={`/SingleArticle/${url}`}>
                        <img src={image} alt="" />
                    </Link>
                </div>
            </div>
            <div className="col-xs-12 col-md-7 col-sm-6">
                <div className="blog-post-text">
                    <div className="blog-post-head">
                        <span className="green-text">Category: </span>
                        <Link to={`/Blog/${category}`}>{category}</Link>
                        <span> at</span>
                        <AccessTimeIcon fontSize="small" />
                        <span> {date}</span>
                    </div>
                    <div className="blog-post-title">
                        <h2>
                            <Link to={`/SingleArticle/${url}`}>{title}</Link>
                        </h2>
                    </div>
                    <div className="blog-post-excerpt">{text}</div>
                    <div className="blog-post-footer">
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogArticlesItem)
