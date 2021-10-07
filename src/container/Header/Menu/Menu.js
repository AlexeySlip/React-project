import React, { useState } from 'react'

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
                            <a href="*">Home</a>
                        </li>
                        <li>
                            <a href="*">About me</a>
                        </li>
                        <li>
                            <a href="*">Blog</a>
                        </li>
                        <li>
                            <a href="*">Single article</a>
                        </li>
                        <li>
                            <a href="*">Gallery</a>
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
