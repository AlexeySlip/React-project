import React from 'react'
import { Link } from 'react-router-dom'

const AboutMeArticlesItem = ({ id, image, category, date, title }) => {
    return (
        <>
            <div className="about-me-post">
                <div
                    className="about-me-post-image"
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="post-head">
                        <i></i>
                        <span className="green-text">Category: </span>
                        <Link to={`/Blog/${category}`}>{category}</Link>
                        <span> at</span>
                        <i></i>
                        <span> {date}</span>
                    </div>
                    <div className="about-me-post-title">
                        <Link to={`/${category}/${id}`}>
                            <h2>{title}</h2>
                        </Link>
                    </div>
                    <div className="about-me-post-line" />
                </div>
            </div>
        </>
    )
}

export default AboutMeArticlesItem
