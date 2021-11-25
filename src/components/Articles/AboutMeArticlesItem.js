import React from 'react'
import { Link } from 'react-router-dom'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const AboutMeArticlesItem = ({ image, category, date, url, title }) => {
    return (
        <>
            <div className="about-me-post">
                <Link to={`/SingleArticle/${url}`}>
                    <div
                        className="about-me-post-image"
                        style={{ backgroundImage: `url(${image})` }}
                    >
                        <div className="post-head">
                            <span className="green-text">Category: </span>
                            <Link to={`/Blog/${category}`}>{category}</Link>
                            <span> at</span>
                            <AccessTimeIcon fontSize="small" />
                            <span> {date}</span>
                        </div>
                        <div className="about-me-post-title">
                            <Link to={`/SingleArticle/${url}`}>
                                <h2>{title}</h2>
                            </Link>
                        </div>
                        <div className="about-me-post-line" />
                        <div className="about-me-post-dark" />
                    </div>
                </Link>
            </div>
        </>
    )
}

export default AboutMeArticlesItem
