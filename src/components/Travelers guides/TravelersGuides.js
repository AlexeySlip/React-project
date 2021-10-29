import React from 'react'

const TravelersGuides = () => {
    return (
        <>
            <section className="about-me-travelers-guides">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-sm-6">
                            <div className="travelers-guides-text">
                                <h2>
                                    Traveler's guides{' '}
                                    <span className="green-text">$19.00</span>
                                </h2>
                                <p>
                                    Phasellus fermentum in, dolor. Pellentesque
                                    facilisis. Nulla imperdiet sit amet magna.
                                    Vestibulum dapibus, mauris nec malesuada
                                    fames ac turpis velit, rhoncus eu, luctus et
                                    interdum adipiscing wisi.
                                </p>
                                <p className="check">
                                    Quisque lorem tortor fringilla sed
                                </p>
                                <p className="check">
                                    Vestibulum id, eleifend justo vel bibendum
                                    sapien massa
                                </p>
                                <div className="travelers-guides-btn">
                                    <a href="/AboutMe">Buy now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-sm-6">
                            <div className="travelers-guides-image">
                                <img
                                    src="./images/home_behind_about2.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TravelersGuides
