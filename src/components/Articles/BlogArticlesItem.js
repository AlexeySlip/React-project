import React from 'react'
import { Link } from 'react-router-dom'
import { FavoriteBorder, Favorite } from '@mui/icons-material'
import { connect } from 'react-redux'

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
                        <i></i>
                        <span className="green-text">Category: </span>
                        <Link to={`/Blog/${category}`}>{category}</Link>
                        <span> at</span>
                        <i></i>
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
                            {isLiked ? <Favorite /> : <FavoriteBorder />}
                            <p>{likes}</p>
                        </div>
                        <Link to={`/SingleArticle/${url}`}>Read more</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state, { id }) => ({ isLiked: state[id] })

export default connect(mapStateToProps)(BlogArticlesItem)
