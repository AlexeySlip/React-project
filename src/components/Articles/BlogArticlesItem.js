import React from 'react'
import { Link } from 'react-router-dom'

const BlogArticlesItem = ({ image, category, date, title, text, likes }) => {
    return (
        <>
            <div className="col-xs-12 col-md-5 col-sm-6">
                <div className="blog-post-image ">
                    <Link>
                        <img src={image} alt="" />
                    </Link>
                </div>
            </div>
            <div className="col-xs-12 col-md-7 col-sm-6">
                <div className="blog-post-text">
                    <div className="blog-post-head">
                        <i></i>
                        <span className="green-text">Category: </span>
                        <Link to={category}>{category}</Link>
                        <span> at</span>
                        <i></i>
                        <span> {date}</span>
                    </div>
                    <div className="blog-post-title">
                        <h2>
                            <Link>{title}</Link>
                        </h2>
                    </div>
                    <div className="blog-post-excerpt">{text}</div>
                    <div className="blog-post-footer">
                        <Link>Read more</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogArticlesItem