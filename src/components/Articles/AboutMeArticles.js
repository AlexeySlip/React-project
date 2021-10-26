import React from 'react'
import ArticlesArray from './ArticlesArray'
import AboutMeArticlesItem from './AboutMeArticlesItem'

const AboutMeArticles = () => {
    return (
        <>
            {ArticlesArray.filter((item) => item.aboutMe === 'true').map(
                ({ id, image, category, date, title, text, likes }) => (
                    <div className="col-xs-12 col-md-6 col-sm-6" key={id}>
                        <AboutMeArticlesItem
                            id={id}
                            image={image}
                            category={category}
                            date={date}
                            title={title}
                        />
                    </div>
                )
            )}
        </>
    )
}

export default AboutMeArticles
