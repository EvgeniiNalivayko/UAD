import React from "react";
import classes from "./JoinSection.module.scss";
import SignupForm from "../SignupForm/SignupForm";


const JoinSection = () => {
    return (
        <div className={classes.wrapperJoin}>
            <div className={classes.wrapperTitle}>
                <h2>Join for free and get the opportunity</h2>
                <div className={classes.registrationBenefits}>
                    <div><span><p>1000+</p>
                    verified profiles</span></div>
                    <div><span><p>Free</p>bonuses to start communicating</span></div>
                    <div><span><p>24/7</p>friendly support</span></div>
                </div>
            </div>
            <div className={classes.registerImg}>
                <div className={classes.wrapperForm}>
                    <SignupForm/>
                </div>
                <div className={classes.wrapperImg}></div>
            </div>
        </div>
    );
};

export default JoinSection;