import React from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const RelatedPostsItem = ({ image, url, date, title }) => {
    return (
        <>
            <div className="related-post">
                <div className="related-post-image">
                    <Link to={`/SingleArticle/${url}`}>
                        <img src={image} alt="" />
                    </Link>
                </div>

                <p>
                    <AccessTimeIcon />
                    {date}
                </p>
                <Link to={`/SingleArticle/${url}`}>
                    <h4>{title}</h4>
                </Link>
                <div className="post-btn">
                    <Link to={`/SingleArticle/${url}`}>
                        <DashboardIcon fontSize="small" />
                        Read more
                    </Link>
                </div>
            </div>
        </>
    )
}
export default RelatedPostsItem
