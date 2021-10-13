import React from 'react'
import { Link } from 'react-router-dom'

const HomeArticlesItem = ({
    id,
    image,
    category,
    date,
    title,
    text,
    likes,
}) => {
    return (
        <>
            <div className="home-post-image">
                <Link>
                    <img src={image} />
                </Link>
            </div>
            <div className="home-post-text">
                <div className="home-post-head">
                    <i></i>
                    <Link>{category}</Link>
                    <span> at</span>
                    <i></i>
                    <span> {date}</span>
                </div>
                <div className="home-post-title">
                    <h2>
                        <Link>{title}</Link>
                    </h2>
                </div>
                <div className="home-post-excerpt">{text}</div>
                <div className="home-post-footer">
                    <Link>Read more</Link>
                </div>
            </div>
        </>
    )
}

export default HomeArticlesItem
