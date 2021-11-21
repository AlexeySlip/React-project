import React from 'react'
import { Link } from 'react-router-dom'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import MenuBookIcon from '@mui/icons-material/MenuBook'

const HomeUpperSection = () => {
    return (
        <section className="home-upper-section">
            <div className="container">
                <div className="row">
                    <div className="home-upper-section-content">
                        <div className="col-xs-12 col-md-9 col-sm-12">
                            <h2>Get out and explore </h2>
                            <p>
                                Quisque lorem tortor fringilla sed, vestibulum
                                id, eleifend justo vel bibendum sapien massa ac
                                turpis faucibus orci luctus non, consectetuer
                                lobortis quis, varius in, purus. Integer
                                ultrices posuere cubilia Curae.
                            </p>
                            <div className="home-upper-section-btns">
                                <Link
                                    to="/AboutMe"
                                    className="home-upper-section-btn"
                                >
                                    Read more
                                    <DoubleArrowIcon fontSize="small" />
                                </Link>
                                <Link
                                    to="/Blog"
                                    className="home-upper-section-btn"
                                >
                                    My blog
                                    <MenuBookIcon fontSize="small" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeUpperSection
