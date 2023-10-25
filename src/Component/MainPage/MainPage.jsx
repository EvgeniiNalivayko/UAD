import React from 'react';
import classes from './MainPage.module.scss'
import SignupForm from "../SignupForm/SignupForm";
import {useSelector, useDispatch} from 'react-redux';
import {scrollToElement} from '../GirlProfilesList/GirlCard/Redux/girlsSlice'


const MainPage = () => {
    const dispatch = useDispatch()
    const handleScrollToElement = () => {
        dispatch(scrollToElement());
    };
    return (
        <div className={classes.mainPage}>
            <div className={classes.wrapperPage + ' container'}>
                <div className={classes.header}>
                    <p><span>Ua</span>Dreams</p>
                    <button onClick={handleScrollToElement} className={'btn-primary'}>Sign Up</button>
                </div>
                <div className={classes.wrapperContent}>
                    <div className={classes.content}>
                        <h2>Dating Ukrainian Single Ladies</h2>
                        <div className={classes.description}>
                            <span>Join for free and start chatting.</span>
                            <span>More than a thousand single women are ready for a serious relationship and are waiting for your message.</span>
                            <div className={classes.counter}>
                                <span>2500+</span>
                                <span>Happy couples</span>
                            </div>
                        </div>
                        <button onClick={handleScrollToElement} className={classes.btn + ' btn-primary'}>View profiles</button>
                    </div>

                    <div className={classes.wrapperLogin}>
                        <SignupForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
