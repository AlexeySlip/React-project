import React from 'react'
import { connect } from 'react-redux'
import HomeArticlesItem from './HomeArticlesItem'

const HomeArticles = ({ ArticlesArray }) => {
    return (
        <>
            {ArticlesArray.filter((item) => item.home === 'true').map(
                ({ id, image, category, date, title, text, url, likes }) => (
                    <div className="col-xs-12 col-md-4 col-sm-4" key={id}>
                        <div className="home-post">
                            <HomeArticlesItem
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
        </>
    )
}

const mapStateToProps = (state) => ({
    ArticlesArray: state.article,
})

export default connect(mapStateToProps)(HomeArticles)
