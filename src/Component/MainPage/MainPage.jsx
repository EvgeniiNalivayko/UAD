import React from 'react';
import classes from './MainPage.module.scss'
import SignupForm from "../SignupForm/SignupForm";


const MainPage = () => {

    return (
        <div className={classes.mainPage}>
            <div className={classes.wrapperPage + ' container'}>
                <div className={classes.counter}>
                    <span>2500+</span>
                    <span>Happy couples</span>
                </div>
                <div className={classes.header}>
                    <p>UaDreams</p>
                    <button className={'btn-primary'}>Sign Up</button>
                </div>
                <div className={classes.content}>
                    <div className={classes.left}>
                        <h2>Dating Ukrainian Single Ladies</h2>
                        <div className={classes.description}>
                            <span>Join for free and start chatting.</span>
                            <span>More than a thousand single women are ready for a serious relationship and are waiting for your message.
                    </span>
                        </div>
                        <button className={classes.btn + ' btn-primary'}>View profiles</button>
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
