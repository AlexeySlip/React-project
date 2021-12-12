import React, { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { connect, useDispatch } from 'react-redux'
import fetchData from '../redux/article.action'
import CloseIcon from '@mui/icons-material/Close'

function Modal({ modalNotActive, active, image }) {
    return active ? (
        <div className="modal" onClick={modalNotActive}>
            <div
                className="modal-block"
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="modal-close">
                    <CloseIcon onClick={modalNotActive} />
                </div>
                <img src={image} alt="" />
            </div>
        </div>
    ) : null
}

const App = ({ modal, modalNotActive }) => {
    useEffect(() => {
        dispatch(fetchData())
    })

    const dispatch = useDispatch()
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />

            <Modal
                modalNotActive={modalNotActive}
                active={modal.active}
                image={modal.image}
            />
        </>
    )
}
const mapStateToProps = (state) => ({
    modal: state.modalImage,
})

const mapDispatchToProps = (dispatch) => ({
    modalNotActive: (image) =>
        dispatch({
            type: 'MODAL_NOT_ACTIVE',
            image,
        }),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
