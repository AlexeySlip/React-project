import React from 'react'
import Menu from './Menu/Menu'

const Header = () => {
    return (
        <>
            <header>
                <div className="header-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-4 col-sm-4">
                                <div class="logo">
                                    <a href="*">
                                        <img src="/images/wanderer.png"></img>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-8 col-sm-8">
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
