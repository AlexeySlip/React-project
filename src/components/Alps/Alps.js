import React from 'react'
import { Link } from 'react-router-dom'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'

const Alps = () => {
    return (
        <>
            <section className="alps">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-sm-6">
                            <div className="alps-image">
                                <img src="/images/alps.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-sm-6">
                            <div className="alps-text">
                                <h3>Swiss Alps</h3>
                                <h6>EXPEDITION</h6>
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
                                <div className="alps-btn">
                                    <Link to="/AboutMe">
                                        Book tour
                                        <DoubleArrowIcon fontSize="small" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Alps
