import React from 'react'
import Slider from 'react-slick'

export default class LazyLoad extends React.Component {
    render() {
        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
        }
        return (
            <div>
                <section className="videos">
                    <h2> Videos</h2>
                    <Slider {...settings}>
                        <div className="slick-image">
                            <img src="/images/home_behind_pic6.jpg" alt="" />
                        </div>
                        <div className="slick-image">
                            <img src="/images/home_behind_pic7.jpg" alt="" />
                        </div>
                        <div className="slick-image">
                            <img src="/images/home_behind_pic8.jpg" alt="" />
                        </div>
                    </Slider>
                </section>
            </div>
        )
    }
}
