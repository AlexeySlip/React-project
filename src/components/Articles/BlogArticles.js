import React from 'react'
import ArticlesArray from './ArticlesArray'
import BlogArticlesItem from './BlogArticlesItem'

const BlogArticles = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    {ArticlesArray.map(
                        ({
                            id,
                            image,
                            category,
                            date,
                            title,
                            text,
                            url,
                            likes,
                        }) => (
                            <div
                                className="col-xs-12 col-md-12 col-sm-12"
                                key={id}
                            >
                                <div className="blog-post">
                                    <BlogArticlesItem
                                        id={id}
                                        image={image}
                                        category={category}
                                        date={date}
                                        title={title}
                                        text={text}
                                        url={url}
                                        likes={likes}
                                    />
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    )
}

export default BlogArticles
