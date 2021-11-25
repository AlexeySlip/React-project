import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TelegramIcon from '@mui/icons-material/Telegram'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-data">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-6 col-sm-6">
                                <div className="footer-information">
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
                            <p> © 2021 By Alexey Slipchenko </p>
                            <div>
                                <a href="*">
                                    <FacebookIcon
                                        fontSize="small"
                                        className="facebook-icon"
                                    />
                                </a>
                                <a href="*">
                                    {' '}
                                    <InstagramIcon
                                        fontSize="small"
                                        className="instagram-icon"
                                    />
                                </a>
                                <a href="*">
                                    {' '}
                                    <TwitterIcon
                                        fontSize="small"
                                        className="twitter-icon"
                                    />
                                </a>
                                <a href="*">
                                    {' '}
                                    <YouTubeIcon
                                        fontSize="small"
                                        className="you-tube-icon"
                                    />
                                </a>
                                <a href="*">
                                    {' '}
                                    <TelegramIcon
                                        fontSize="small"
                                        className="telegram-icon"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
