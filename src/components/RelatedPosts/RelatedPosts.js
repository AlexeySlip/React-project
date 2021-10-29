import React from 'react'
import ArticlesArray from '../Articles/ArticlesArray'
import RelatedPostsItem from './RelatedPostsItem'

const RelatedPosts = () => {
    return (
        <>
            <section className="related-posts-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-12 col-sm-12">
                            <h4>Related posts</h4>
                        </div>
                        <div className="related-posts">
                            {ArticlesArray.filter(
                                (item) => item.singleArticle === 'true'
                            ).map(({ id, image, url, date, title }) => (
                                <div
                                    className="col-xs-12 col-md-4 col-sm-4"
                                    key={id}
                                >
                                    <RelatedPostsItem
                                        image={image}
                                        url={url}
                                        date={date}
                                        title={title}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default RelatedPosts
