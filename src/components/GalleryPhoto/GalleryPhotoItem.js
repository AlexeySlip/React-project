import React from 'react'
import GalleryPhotoArray from './GalleryPhotoArray'

const GalleryPhotoItem = () => {
    return (
        <>
            {GalleryPhotoArray.map(({ id, image }) => (
                <div className="col-xs-12 col-md-4 col-sm-6" key={id}>
                    <div className="gallery-photo">
                        <img src={image} alt="" />
                    </div>
                </div>
            ))}
        </>
    )
}
export default GalleryPhotoItem
