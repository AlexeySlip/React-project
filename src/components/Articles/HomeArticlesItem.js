import React from 'react'
import { Link } from 'react-router-dom'

const HomeArticlesItem = ({
    id,
    image,
    category,
    date,
    title,
    text,
    url,
    likes,
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
                    <Link to={`/SingleArticle/${url}`}>Read more</Link>
                </div>
            </div>
        </>
    )
}

export default HomeArticlesItem
