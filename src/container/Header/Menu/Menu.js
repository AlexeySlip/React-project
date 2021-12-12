import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TelegramIcon from '@mui/icons-material/Telegram'

const Menu = () => {
    const [activeMenu, setActiveMenu] = useState('')

    const activeMenuClick = () => {
        setActiveMenu(activeMenu === '' ? 'active-menu' : '')
    }

    return (
        <>
            <div className={`navigation ${activeMenu}`}>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/" onClick={activeMenuClick}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/AboutMe" onClick={activeMenuClick}>
                                About me
                            </Link>
                        </li>
                        <li>
                            <Link to="/Blog" onClick={activeMenuClick}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/SingleArticle/Aliquam-sem"
                                onClick={activeMenuClick}
                            >
                                Single article
                            </Link>
                        </li>
                        <li>
                            <Link to="/Gallery" onClick={activeMenuClick}>
                                Gallery
                            </Link>
                        </li>
                    </ul>
                    <div className="menu-icons">
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
            <div
                className={`nav-mobile-menu ${activeMenu}`}
                onClick={activeMenuClick}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}
export default Menu
