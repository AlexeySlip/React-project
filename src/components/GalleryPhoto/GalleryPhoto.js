import React from 'react'
import GalleryPhotoItem from './GalleryPhotoItem'

const GalleryPhoto = () => {
    return (
        <>
            <div className="gallery-photo-section">
                <div className="container">
                    <div className="row">
                        <GalleryPhotoItem />
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryPhoto
