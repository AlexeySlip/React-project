import React from 'react'
import HomeArticlesArray from './HomeArticlesArray'
import HomeArticlesItem from './HomeArticlesItem'

const HomeArticles = () => {
    return (
        <>
            {HomeArticlesArray.map(
                ({ id, image, category, date, title, text, likes }) => (
                    <div className="col-xs-12 col-md-4 col-sm-4">
                        <div className="home-post">
                            <HomeArticlesItem
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

export default HomeArticles
