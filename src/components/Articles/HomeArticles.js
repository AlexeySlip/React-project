import React from 'react'
import ArticlesArray from './ArticlesArray'
import HomeArticlesItem from './HomeArticlesItem'

const HomeArticles = () => {
    return (
        <>
            {ArticlesArray.filter((item) => item.place === 'Home').map(
                ({ id, image, category, date, title, text, likes }) => (
                    <div className="col-xs-12 col-md-4 col-sm-4" key={id}>
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
