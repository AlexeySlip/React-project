import React from 'react'
import { Route, Switch } from 'react-router'
import Blog from '../../pages/Blog/Blog'
import Temperate from '../../pages/Category/Temperate/Temperate'
import Tropical from '../../pages/Category/Tropical/Tropical'
import Winter from '../../pages/Category/Winter/Winter'
import Gallery from '../../pages/Gallery/Gallery'
import Home from '../../pages/Home/Home'

const Main = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/Blog" exact>
                    <Blog />
                </Route>
                <Route path="/Gallery" exact>
                    <Gallery />
                </Route>
                <Route path="/Winter" exact>
                    <Winter />
                </Route>
                <Route path="/Tropical" exact>
                    <Tropical />
                </Route>
                <Route path="/Temperate" exact>
                    <Temperate />
                </Route>
            </Switch>
        </>
    )
}

export default Main
