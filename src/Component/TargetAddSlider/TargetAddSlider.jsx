import React from 'react';
import Slider from 'react-slick';
import classes from './TargetAddSlider.module.scss'
import {useSelector, useDispatch} from 'react-redux';
import {scrollToElement} from '../GirlProfilesList/GirlCard/Redux/girlsSlice'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TargetAddSlider = () => {
    const dispatch = useDispatch()
    const handleScrollToElement = () => {
        dispatch(scrollToElement());
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
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
            <h2>Find love with ease</h2>
            <div className={classes.sliderWrapper}>
                <Slider{...settings}>
                    <div className={classes.sliderItem}>
                        <img src="/FindLoveComp/Welcome.svg" alt=""/>
                        <h3>Create profile</h3>
                        <p>Create your profile within few seconds with our easy sign-up steps. Don't forget to add a
                            photo! </p>
                    </div>
                    <div className={classes.sliderItem}>
                        <img src="/FindLoveComp/Hello.svg" alt=""/>
                        <h3>Confirm your profile</h3>
                        <p>Check your mail and follow the link from a letter. Confirmed members get additional bonuses! </p>
                    </div>
                    <div className={classes.sliderItem}>
                        <img src="/FindLoveComp/Hello.svg" alt=""/>
                        <h3>Start communicating</h3>
                        <p>Explore our Gallery of Ladies and find a woman who matches your criteria using filters. Write her a letter or invite to video chat, and start your love story! </p>
                    </div>
                    <div className={classes.sliderItem}>
                        <img src="/FindLoveComp/Couple3.svg" alt=""/>
                        <h3>Find love</h3>
                        <p>Communicate with your match and discover as much as possible about each other. Meet with your beloved and build serious relationship in real. </p>
                    </div>
                </Slider>
            </div>
            <button onClick={handleScrollToElement} className={`btn-primary`}>find love now</button>
        </div>)

}

export default TargetAddSlider;
