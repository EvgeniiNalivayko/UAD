import React from 'react';
import Slider from 'react-slick';
import classes from "./FeedBackSlider.module.scss";


const FeedBackSlider = () => {

    const settings = {
        dots: false, infinite: true, speed: 700, slidesToShow: 4, slidesToScroll: 1, responsive: [{
            breakpoint: 1100, settings: {
                slidesToShow: 4, slidesToScroll: 1, infinite: true, dots: true
            }
        }, {
            breakpoint: 992, settings: {
                slidesToShow: 2, slidesToScroll: 1, dots: true
            }
        }, {
            breakpoint: 576, settings: {
                slidesToShow: 1, slidesToScroll: 1, dots: true
            }
        }]
    };

    return (<div className={classes.sliderContainer}>
        <h2>What people say about UaBrand</h2>
        <Slider {...settings}>
            <div className={classes.card}>
                <div className={classes.title}>
                    <h3>Very useful system</h3>
                    <span>UaBrand has created very useful system where it’s possible to learn many details and character traits of any woman of interest. This helps in the search process so you have a sense of what kind of lady she is before contact. UaBrand seem to have an endless supply of beautiful women making it easier to take your time to find the right one for your personality.h</span>
                </div>
                <div className={classes.wrapperAuthorDetails}>
                    <img src='/feedBack/Picture3.svg' alt="name"/>
                    <span>Cory from United States</span>
                    <span>7 April 2023</span>
                </div>
            </div>
            <div className={classes.card}>
                <div className={classes.title}>
                    <h3>Support and services</h3>
                    <span>I would like to thank you for all your support and services in 2022, you have been very patient and understanding with translating my letters and video chats.You have many beautiful ladies here on your website but I am so happy to have met my lady who has really melted my heart, I just hope that she likes me as much as I like her.</span>
                </div>
                <div className={classes.wrapperAuthorDetails}>
                    <img src='/feedBack/Picture.svg' alt="name"/>
                    <span>Matt from United Kingdom</span>
                    <span>4 January 2023</span>
                </div>
            </div>
            <div className={classes.card}>
                <div className={classes.title}>
                    <h3>Recommend UaBrand</h3>
                    <span>Hi guys! I am writing this, to let you know with the help of UaBrand I got to meet amazing my lady. Me and my lady are very excited for our future.I highly recommend UaBrand, their service is perfect, the price structure is good, you know exactly what it costs.All the best guys in your search.</span>
                </div>
                <div className={classes.wrapperAuthorDetails}>
                    <img src='/feedBack/Picture1.svg' alt="name"/>
                    <span>Des from Australia</span>
                    <span>3 January 2023</span>
                </div>
            </div>
            <div className={classes.card}>
                <div className={classes.title}>
                    <h3>She is my lifelong</h3>
                    <span>I am very satisfied with the service! I helped us both a lot to facilitate the first contact and to exchange without barriers.I can wholeheartedly recommend UaBrand service. As for My Lady herself, I can only say that she is my lifelong dream and I hope that we will grow together step by step into a good and stable relationship.Thank you the whole team.</span>
                </div>
                <div className={classes.wrapperAuthorDetails}>
                    <img src='/feedBack/Picture2.svg' alt="name"/>
                    <span>Roland from Austria</span>
                    <span>21 February 2023</span>
                </div>
            </div>
        </Slider>
        <button className={`btn-primary`}>find love now</button>
    </div>)

}

export default FeedBackSlider;
