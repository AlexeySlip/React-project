const galleryReducer = (state = [], action) => {
    switch (action.type) {
        case 'GALLERY_SUCCESS':
            return action.gallery

        default:
            return state
    }
}
export default galleryReducer
