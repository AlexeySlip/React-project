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
                <h2> Videos</h2>
                <Slider {...settings}>
                    <div className="slick-image">
                        <img src="/images/home_behind_pic6.jpg" />
                    </div>
                    <div className="slick-image">
                        <img src="/images/home_behind_pic7.jpg" />
                    </div>
                    <div className="slick-image">
                        <img src="/images/home_behind_pic8.jpg" />
                    </div>
                </Slider>
            </div>
        )
    }
}

// export default class SimpleSlider extends React.Component {
//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1,
//         }
//         return (
//             <div>
//                 <h2> Single Item</h2>
//                 <Slider {...settings}>
//                     <div>
//                         <img src="/images/home_behind_pic8.jpg" />
//                     </div>
//                     <div>
//                         <img src="/images/home_behind_pic8.jpg" />
//                     </div>
//                     <div>
//                         <img src="/images/home_behind_pic8.jpg" />
//                     </div>
//                     <div>
//                         <h3>4</h3>
//                     </div>
//                     <div>
//                         <h3>5</h3>
//                     </div>
//                     <div>
//                         <h3>6</h3>
//                     </div>
//                 </Slider>
//             </div>
//         )
//     }
// }
