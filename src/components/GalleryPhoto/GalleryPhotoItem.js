import React from 'react'
import { connect } from 'react-redux'

const GalleryPhotoItem = ({ modalActive, GalleryPhotoArray }) => {
    return (
        <>
            {GalleryPhotoArray.map(({ id, image }) => (
                <div className="col-xs-12 col-md-4 col-sm-6" key={id}>
                    <div className="gallery-photo">
                        <img
                            src={image}
                            alt=""
                            onClick={() => modalActive(image)}
                        />
                    </div>
                </div>
            ))}
        </>
    )
}
const mapStateToProps = (state) => ({
    modal: state.modalImage,
    GalleryPhotoArray: state.gallery,
})
const mapDispatchToProps = (dispatch) => ({
    modalActive: (image) =>
        dispatch({
            type: 'MODAL_ACTIVE',
            image,
        }),
})
export default connect(mapStateToProps, mapDispatchToProps)(GalleryPhotoItem)
