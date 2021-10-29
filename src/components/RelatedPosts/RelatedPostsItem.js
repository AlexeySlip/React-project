import React from 'react'
import { Link } from 'react-router-dom'

const RelatedPostsItem = ({ image, url, date, title }) => {
    return (
        <>
            <div className="related-post">
                <div className="related-post-image">
                    <Link to={`/SingleArticle/${url}`}>
                        <img src={image} alt="" />
                    </Link>
                </div>

                <p>{date}</p>
                <Link to={`/SingleArticle/${url}`}>
                    <h4>{title}</h4>
                </Link>
                <div className="post-btn">
                    <Link to={`/SingleArticle/${url}`}>Read more</Link>
                </div>
            </div>
        </>
    )
}
export default RelatedPostsItem
