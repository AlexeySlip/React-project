const modalImageReducer = (state = { active: false }, action) => {
    switch (action.type) {
        case 'MODAL_ACTIVE':
            return {
                image: [action.image],
                active: true,
            }

        case 'MODAL_NOT_ACTIVE':
            return { active: false }

        default:
            return state
    }
}

export default modalImageReducer
