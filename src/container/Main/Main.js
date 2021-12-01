import React, { useRef, useState } from 'react'
import { Route, Switch } from 'react-router'
import AboutMe from '../../pages/AboutMe/AboutMe'
import Blog from '../../pages/Blog/Blog'
import Category from '../../pages/Category/Category'
import Gallery from '../../pages/Gallery/Gallery'
import Home from '../../pages/Home/Home'
import SingleArticle from '../../pages/SingleArticle/SingleArticle'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const Main = () => {
    const GoTop = (props) => {
        const [thePosition, setThePosition] = useState('')

        const timeoutRef = useRef(null)

        document.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setThePosition('active')
            } else {
                setThePosition('')
            }
        })

        const onScrollStep = () => {
            if (window.pageYOffset === 0) {
                clearInterval(timeoutRef.current)
            }
            window.scroll(0, window.pageYOffset - props.scrollStepInPx)
        }

        const scrollToTop = () => {
            timeoutRef.current = setInterval(onScrollStep, props.delayInMs)
        }

        const renderGoTopIcon = () => {
            return (
                <button
                    className={`go-top ${thePosition}`}
                    onClick={scrollToTop}
                >
                    <KeyboardArrowUpIcon />
                </button>
            )
        }

        return <React.Fragment>{renderGoTopIcon()}</React.Fragment>
    }
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
                <Route
                    path="/SingleArticle/:url"
                    children={<SingleArticle />}
                    exact
                ></Route>
            </Switch>
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    )
}

export default Main
