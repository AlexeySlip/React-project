import React from 'react'
import { useParams } from 'react-router'
import ArticlesArray from '../ArticlesArray'
import BlogArticlesItem from '../BlogArticlesItem'

const CategoryArticles = () => {
    let { category } = useParams()
    return (
        <>
            <div className="container">
                <div className="row">
                    {ArticlesArray.filter(
                        (item) => item.category === category
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

export default CategoryArticles
