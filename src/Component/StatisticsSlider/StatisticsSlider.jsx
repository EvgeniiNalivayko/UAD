import React from 'react';
import Slider from 'react-slick';
import classes from '../StatisticsSlider/SliderStyles.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const StatisticsSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint:  992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint:  768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className={classes.sliderContainer}>
            <Slider {...settings}>
                <div className={classes.sliderItem}>
                    <h3>+250</h3>
                    <p>new members</p>
                    <span>every month</span>
                </div>
                <div className={classes.sliderItem}>
                    <h3>17+</h3>
                    <p>years</p>
                    <span>in dating business!</span>
                </div>
                <div className={classes.sliderItem}>
                    <h3>100%</h3>
                    <p>verified members</p>
                    <span>with our Anti-scam policy!</span>
                </div>
                <div className={classes.sliderItem}>
                    <h3>Free</h3>
                    <p>letters and chat</p>
                    <span>let ladies know more about you</span>
                </div>
            </Slider>
        </div>)

}

export default StatisticsSlider;
