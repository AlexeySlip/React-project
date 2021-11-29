import { combineReducers } from 'redux'
import articlesLikeReducer from './articlesLikeReducer'
import articlesReducer from './articlesReducer'
import modalImageReducer from './modalImageReducer'

const rootReducer = combineReducers({
    articlesLikeState: articlesLikeReducer,
    article: articlesReducer,
    modalImage: modalImageReducer,
})

export default rootReducer
