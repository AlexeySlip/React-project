import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TelegramIcon from '@mui/icons-material/Telegram'

const Menu = () => {
    const [navMobileMenu, setNavMobileMenu] = useState('nav-mobile-menu')

    const [navigation, setNavigation] = useState('navigation')

    const activeMenu = () => {
        setNavMobileMenu(
            navMobileMenu === 'nav-mobile-menu'
                ? 'nav-mobile-menu active-menu'
                : 'nav-mobile-menu'
        )

        setNavigation(
            navigation === 'navigation'
                ? 'navigation active-menu'
                : 'navigation'
        )
    }

    return (
        <>
            <div className={navigation}>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/AboutMe">About me</Link>
                        </li>
                        <li>
                            <Link to="/Blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/SingleArticle/Aliquam-sem">
                                Single article
                            </Link>
                        </li>
                        <li>
                            <Link to="/Gallery">Gallery</Link>
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
                // className="nav-mobile-menu "
                className={navMobileMenu}
                onClick={activeMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}
export default Menu
