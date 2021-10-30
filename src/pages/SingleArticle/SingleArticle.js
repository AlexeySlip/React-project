import React from 'react'
import { useParams } from 'react-router'
import ArticlesArray from '../../components/Articles/ArticlesArray'
import RelatedPosts from '../../components/RelatedPosts/RelatedPosts'
import SingleArticleUpperSection from '../../components/UpperSection/SingleArticleUpperSection'
import SingleArticleContent from '../../components/SingleArticleContent/SingleArticleContent'

const SingleArticle = () => {
    let { url } = useParams()
    return (
        <>
            <div className="single-article">
                {ArticlesArray.filter((item) => item.url === url).map(
                    ({ id, image, title, author, date, category, likes }) => (
                        <>
                            <div className="single-article">
                                <SingleArticleUpperSection
                                    image={image}
                                    title={title}
                                    author={author}
                                    date={date}
                                    category={category}
                                />
                                <SingleArticleContent id={id} likes={likes} />
                                <RelatedPosts id={id} />
                            </div>
                        </>
                    )
                )}
            </div>
        </>
    )
}

export default SingleArticle
