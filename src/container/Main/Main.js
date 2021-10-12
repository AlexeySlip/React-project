import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../../pages/Home/Home'

const Main = () => {
    return (
        <>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </>
    )
}

export default Main
