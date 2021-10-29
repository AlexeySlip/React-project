import React from 'react'
import ArticlesArray from './ArticlesArray'
import AboutMeArticlesItem from './AboutMeArticlesItem'

const AboutMeArticles = () => {
    return (
        <>
            {ArticlesArray.filter((item) => item.aboutMe === 'true').map(
                ({ id, image, category, date, title, url, likes }) => (
                    <div className="col-xs-12 col-md-6 col-sm-6" key={id}>
                        <AboutMeArticlesItem
                            image={image}
                            category={category}
                            date={date}
                            title={title}
                            url={url}
                        />
                    </div>
                )
            )}
        </>
    )
}

export default AboutMeArticles
