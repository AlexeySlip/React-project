import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import BlogArticlesItem from '../BlogArticlesItem'

const CategoryArticles = ({ ArticlesArray }) => {
    let { category } = useParams()
    return (
        <>
            <div className="container">
                <div className="row">
                    {ArticlesArray.filter(
                        (item) => item.category === category
                    ).map(
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

const mapStateToProps = (state) => ({
    ArticlesArray: state.article,
})

export default connect(mapStateToProps)(CategoryArticles)
