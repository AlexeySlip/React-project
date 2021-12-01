import React, { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { connect, useDispatch } from 'react-redux'
import fetchData from '../redux/article.action'
import CloseIcon from '@mui/icons-material/Close'

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
            {modal.active ? (
                <div className="modal">
                    <div className="modal-block">
                        <div className="modal-close">
                            <CloseIcon onClick={modalNotActive} />
                        </div>
                        <img src={modal.image} alt="" />
                    </div>
                </div>
            ) : (
                ''
            )}
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
