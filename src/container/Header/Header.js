import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu/Menu'

const Header = () => {
    return (
        <>
            <header>
                <div className="header-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-5 col-sm-3">
                                <div className="logo">
                                    <Link to="/">
                                        <img
                                            src="/images/wanderer.png"
                                            alt=""
                                        ></img>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-7 col-sm-9">
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
