import React from 'react'
import HeadArticlesArray from './HeadArticlesArray'
import HeadArticlesItem from './HeadArticlesItem'

const HeadArticles = () => {
    return (
        <>
            {HeadArticlesArray.map(
                ({ id, image, category, date, title, text, likes }) => (
                    <div className="col-xs-12 col-md-4 col-sm-4">
                        <div className="home-post">
                            <HeadArticlesItem
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
        </>
    )
}

export default HeadArticles
