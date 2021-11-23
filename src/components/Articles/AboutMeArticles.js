import React from 'react'
import { connect } from 'react-redux'
import AboutMeArticlesItem from './AboutMeArticlesItem'

const AboutMeArticles = ({ ArticlesArray }) => {
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
const mapStateToProps = (state) => ({
    ArticlesArray: state.article,
})

export default connect(mapStateToProps)(AboutMeArticles)
