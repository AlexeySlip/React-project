import { combineReducers } from 'redux'
import articlesLikeReducer from './articlesLikeReducer'
import articlesReducer from './articlesReducer'
import galleryReducer from './galleryReducer'
import modalImageReducer from './modalImageReducer'

const rootReducer = combineReducers({
    articlesLikeState: articlesLikeReducer,
    article: articlesReducer,
    modalImage: modalImageReducer,
    gallery: galleryReducer,
})

export default rootReducer
