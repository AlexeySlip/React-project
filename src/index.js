import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './container/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import productsLikeReducer from './redux/productsLikeReducer'

const store = createStore(productsLikeReducer)

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
