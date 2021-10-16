import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-data">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-6 col-sm-6">
                                <div className="ащщеук-information">
                                    <Link to="/">
                                        <img
                                            src="/images/wanderer.png"
                                            alt=""
                                        ></img>
                                    </Link>
                                    <div className="footer-text">
                                        <p>
                                            Phasellus fermentum in. Pellentesque
                                            facilisis. Nulla imperdiet sit amet
                                            magna. Vestibulum dapibus, mauris
                                            nec malesuada fames ac turpis velit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-3 col-sm-3">
                                <ul className="footer-links">
                                    <li>
                                        <a href="*">Morbi accum</a>
                                    </li>
                                    <li>
                                        <a href="*">Nam tellus</a>
                                    </li>
                                    <li>
                                        <a href="*">Class taciti velit</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-md-3 col-sm-3">
                                <ul className="footer-links">
                                    <li>
                                        <a href="*">Class taciti velit</a>
                                    </li>
                                    <li>
                                        <a href="*">Mauris justo</a>
                                    </li>
                                    <li>
                                        <a href="*">Morbi accum</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="under-line">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-6 col-sm-6">
                                <p> © 2021 By Alexey Slipchenko </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
