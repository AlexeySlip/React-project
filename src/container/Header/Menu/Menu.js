import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
                            <Link to="/SingleArticle">Single article</Link>
                        </li>
                        <li>
                            <Link to="/Gallery">Gallery</Link>
                        </li>
                    </ul>
                </div>
                <ul className="social"></ul>
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
