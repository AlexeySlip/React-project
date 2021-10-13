import React from 'react'
import { Link } from 'react-router-dom'

const HeadArticlesItem = ({
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
            <div className="head-post-image">
                <Link>
                    <img src={image} />
                </Link>
            </div>
            <div className="head-post-text">
                <div className="head-post-head">
                    <i></i>
                    <Link>{category}</Link>
                    <span> at</span>
                    <i></i>
                    <span> {date}</span>
                </div>
                <div className="head-post-title">
                    <h2>
                        <Link>{title}</Link>
                    </h2>
                </div>
                <div className="head-post-excerpt">{text}</div>
                <div className="head-post-footer">
                    <Link>Read more</Link>
                </div>
            </div>
        </>
    )
}

export default HeadArticlesItem
