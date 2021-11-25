import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu/Menu'

const Header = () => {
    const [scrollMenu, setScrollMenu] = useState('')

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (window.scrollY > 90) {
                setScrollMenu('scroll-menu')
            } else {
                setScrollMenu('')
            }
        })
    })
    return (
        <>
            <header>
                <div className={`header-container ${scrollMenu}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-3 col-sm-3">
                                <div className="logo">
                                    <Link to="/">
                                        <img
                                            src="/images/wanderer.png"
                                            alt=""
                                        ></img>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-9 col-sm-9">
                                <Menu />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
