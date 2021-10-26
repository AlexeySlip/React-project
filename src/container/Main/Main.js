import React from 'react'
import { Route, Switch } from 'react-router'
import AboutMe from '../../pages/AboutMe/AboutMe'
import Blog from '../../pages/Blog/Blog'
import Category from '../../pages/Category/Category'
import Gallery from '../../pages/Gallery/Gallery'
import Home from '../../pages/Home/Home'

const Main = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/AboutMe" exact>
                    <AboutMe />
                </Route>
                <Route path="/Blog" exact>
                    <Blog />
                </Route>
                <Route path="/Gallery" exact>
                    <Gallery />
                </Route>
                <Route
                    path="/Blog/:category"
                    children={<Category />}
                    exact
                ></Route>
            </Switch>
        </>
    )
}

export default Main
