import React from 'react'
import { Link } from 'react-router-dom'

const PromoSection = () => {
    return (
        <section className="promo-section">
            <container>
                <row>
                    <div className="promo-section-content">
                        <div className="col-xs-12 col-md-7 col-sm-9">
                            <h2>Get out and explore </h2>
                            <p>
                                Quisque lorem tortor fringilla sed, vestibulum
                                id, eleifend justo vel bibendum sapien massa ac
                                turpis faucibus orci luctus non, consectetuer
                                lobortis quis, varius in, purus. Integer
                                ultrices posuere cubilia Curae.
                            </p>
                            <div className="promo-btns">
                                <Link to="/AboutMe" className="promo-btn">
                                    Read more
                                </Link>
                                <Link to="/Blog" className="promo-btn">
                                    My blog
                                </Link>
                            </div>
                        </div>
                    </div>
                </row>
            </container>
        </section>
    )
}

export default PromoSection
