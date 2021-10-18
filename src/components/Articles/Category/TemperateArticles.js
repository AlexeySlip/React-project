import React from 'react'
import HomeArticlesArray from '../ArticlesArray'
import BlogArticlesItem from '../BlogArticlesItem'

const TemperateArticles = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    {HomeArticlesArray.filter(
                        (item) => item.category === 'Temperate'
                    ).map(
                        ({ id, image, category, date, title, text, likes }) => (
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

export default TemperateArticles
