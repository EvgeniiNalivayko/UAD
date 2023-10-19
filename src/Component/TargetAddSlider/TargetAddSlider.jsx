import React from 'react';
import Slider from 'react-slick';
import classes from './TargetAddSlider.module.scss'
import {useSelector, useDispatch} from 'react-redux';
import {scrollToElement} from '../GirlProfilesList/GirlCard/Redux/girlsSlice'

const TargetAddSlider = () => {
    const dispatch = useDispatch()
    const handleScrollToElement = () => {
        dispatch(scrollToElement());
    };
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
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
                        <h3>Create profile</h3>
                        <img src="/FindLoveComp/Hello.svg" alt=""/>
                        <p>Create your profile within few seconds with our easy sign-up steps. Don't forget to add a
                            photo! </p>
                    </div>
                    <div className={classes.sliderItem}>
                        <h3>2</h3>
                        <img src="/FindLoveComp/Hello.svg" alt=""/>
                        <p>Create your profile within few seconds with our easy sign-up steps. Don't forget to add a
                            photo! </p>
                    </div>
                    <div className={classes.sliderItem}>
                        <h3>3</h3>
                        <img src="/FindLoveComp/Hello.svg" alt=""/>
                        <p>Create your profile within few seconds with our easy sign-up steps. Don't forget to add a
                            photo! </p>
                    </div>
                    <div className={classes.sliderItem}>
                        <h3>4</h3>
                        <img src="/FindLoveComp/Hello.svg" alt=""/>
                        <p>Create your profile within few seconds with our easy sign-up steps. Don't forget to add a
                            photo! </p>
                    </div>
                </Slider>


            </div>
            <button onClick={handleScrollToElement} className={`btn-primary`}>find love now</button>
        </div>)

}

export default TargetAddSlider;
