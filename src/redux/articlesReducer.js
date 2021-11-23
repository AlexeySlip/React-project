const articlesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ARTICLE_SUCCESS':
            return action.article

        default:
            return state
    }
}
export default articlesReducer
