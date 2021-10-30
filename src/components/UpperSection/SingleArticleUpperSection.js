import React from 'react'
import { Link } from 'react-router-dom'

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
                                <p>{author}</p>
                                <p>at</p>
                                <p>{date}</p>
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
