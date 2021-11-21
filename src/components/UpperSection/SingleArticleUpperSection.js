import React from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import DashboardIcon from '@mui/icons-material/Dashboard'

const SingleArticleUpperSection = ({
    image,
    title,
    author,
    date,
    category,
}) => {
    return (
        <>
            <section
                className="single-article-upper-section"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="single-article-upper-content">
                            <h1>{title}</h1>
                            <div className="single-article-upper-information">
                                <PersonIcon fontSize="small" />
                                <p>{author}</p>
                                <p>at</p>
                                <AccessTimeIcon fontSize="small" />
                                <p>{date}</p>
                                <DashboardIcon fontSize="small" />
                                <Link to={`/Blog/${category}`}>{category}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleArticleUpperSection
