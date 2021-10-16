import React from 'react'
import { Link } from 'react-router-dom'

const PhotoGallery = () => {
    return (
        <>
            <section className="photo-gallery">
                <div className="container">
                    <div className="row">
                        <div className="photo-gallery-content">
                            <h2>Photo gallery</h2>
                            <p>
                                Phasellus fermentum in, over{' '}
                                <span className="green-text">
                                    10’000 photos
                                </span>
                                . Pellentesque facilisis. Nulla imperdiet sit
                                amet magna. Vestibulum dapibus, mauris nec
                                malesuada fames ac turpis velit.
                            </p>
                            <div className="photo-gallery-btns">
                                <Link to="/Gallery">Show photos</Link>
                                <Link to="/">Instagram</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="photo-gallery-image">
                    <img src="./images/home_behind_pic9.jpg" alt="" />
                </div>
            </section>
        </>
    )
}
export default PhotoGallery
