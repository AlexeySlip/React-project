import React from 'react'

const AboutMeUpperSection = () => {
    return (
        <>
            <div className="about-me-upper-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-8 col-sm-8">
                            <div className="about-me-upper-section-text">
                                <h1>About me</h1>
                                <h3>
                                    Quisque lorem tortor fringilla sed,
                                    vestibulum id, eleifend justo vel bibendum
                                    sapien massa ac turpis faucibus orci luctus
                                    non, consectetuer. Maecenas malesuada elit
                                    lectus felis, malesuada ultricies. In
                                    hendrerit nulla quam nunc.
                                </h3>
                            </div>
                            <div className="about-me-upper-section-arguments">
                                <div className="about-me-argument-1">
                                    <h3 className="green-text">+100</h3>
                                    <h4>Adventures</h4>
                                </div>
                                <div className="about-me-argument-2">
                                    <h3 className="green-text">+500</h3>
                                    <h4>Beautiful places</h4>
                                </div>
                                <div className="about-me-argument-3">
                                    <h3 className="green-text">+100 000</h3>
                                    <h4>Miles traveled</h4>
                                </div>
                                <div className="about-me-argument-4">
                                    <h3 className="green-text">+980</h3>
                                    <h4>Memories</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4 col-sm-4">
                            <img src="./images/home_behind_about1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMeUpperSection
