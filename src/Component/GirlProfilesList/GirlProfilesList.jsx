import React, {useEffect, useState} from "react";
import GirlCard from "./GirlCard/GirlCard";
import classes from "./GirlProfilesList.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {sortList,scrollToElement} from './GirlCard/Redux/girlsSlice';

const GirlProfilesList = () => {
    let girl = useSelector(state => state.girls.sortArray)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(sortList('all'))
    }, []);


    const sortProfile = (by) => {
        dispatch(sortList(by));
    }
    const handleScrollToElement = () => {
        dispatch(scrollToElement());
    };
    return (
        <div className={classes.wrapperProfileList}>
            <h2><span>1000+</span> real Ukrainian Women profiles </h2>
            <div className={classes.filter}>
                <a onClick={() => sortProfile('all')}>All</a>
                <a onClick={() => sortProfile('favorite')}>Favorites</a>
                <a onClick={() => sortProfile('sweet')}>Sweet</a>
                <a>Without children</a>
                <a>18+</a>
                <a>24+</a>
                <a>40+</a>
            </div>
            <div className={classes.wrapperCard}>
                {girl.map((girl, index) => (
                    <GirlCard girl={girl} index={index} key={girl.id}/>
                ))}
            </div>
            <div className={classes.btnGroup}>
                <button  onClick={handleScrollToElement} className={'btn-primary'}>see more ladies</button>
                <button onClick={handleScrollToElement} className={classes.btnFilter + ' btn-primary'}>more filters</button>
            </div>
        </div>
    )
}

export default GirlProfilesList;