import { combineReducers } from 'redux'
import articlesLikeReducer from './articlesLikeReducer'
import articlesReducer from './articlesReducer'

const rootReducer = combineReducers({
    articlesLikeState: articlesLikeReducer,
    article: articlesReducer,
})

export default rootReducer
