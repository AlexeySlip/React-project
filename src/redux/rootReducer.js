import { combineReducers } from 'redux'
import articlesLikeReducer from './articlesLikeReducer'

const rootReducer = combineReducers({
    articlesLikeState: articlesLikeReducer,
})

export default rootReducer
