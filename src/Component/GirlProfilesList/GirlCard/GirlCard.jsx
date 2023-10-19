import React, {useEffect, useState} from 'react';
import classes from './GirlCard.module.scss';
import favoriteOff from "../../../assets/image/favorite_off.svg";
import favoriteOn from "../../../assets/image/favorite_on.svg";
import like from "../../../assets/image/like.svg";
import birthdayIcon from "../../../assets/image/birthday-icon.svg";
import {useSelector, useDispatch} from 'react-redux';
import {isFavorite, isLiked,scrollToElement} from './Redux/girlsSlice';


const GirlCard = ({girl, index}) => {
    const dispatch = useDispatch();
    const [isBirthdaySoon, setIsBirthdaySoon] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isConnection, setIsConnection] = useState(false)
    const [day, month, year] = girl.birthday.split('.').map(Number);
    const dateInMilliseconds = new Date(year, month - 1, day).getTime();




    const handleScrollToElement = () => {
        dispatch(scrollToElement());
    };

    const toggleFavorite = () => {
        if (girl.isFavorite && !girl.like) {

            dispatch(isLiked(index));
            return
        }
        if (!girl.isFavorite) {
            dispatch(isFavorite(index));
            return
        } else {
            dispatch(isFavorite(index));
            dispatch(isLiked(index));
            return
        }

    }


    useEffect(() => {
        setIsBirthdaySoon(new Date(dateInMilliseconds).getDay() > new Date().getDay());
    }, [dateInMilliseconds]);
    //
    const handleMouseEnter = () => {
        setIsShow(true);
    };
    const showConnection = () => {
        setIsConnection(true)
    }


    return (

        <div
            onMouseLeave={() => setIsShow(false)}
            className={`${classes.girlCard} ${isShow ? classes.show : ''}`}
            style={{backgroundImage: `url(${girl.photo})`}}
            onMouseEnter={handleMouseEnter}>
            {isShow && (
                <div className={classes.wrapperBirthday}>
                    {(isConnection ? <div><span style={{background: "#45B61D"}}>Online</span></div> : (isBirthdaySoon ?
                        <div>
                            <span>soon</span>
                            <span><img src={birthdayIcon} alt=""/> Birthday</span>
                        </div> : ''))
                    }
                    <div>
                        {!girl.isFavorite && !girl.like && (
                            <div className={classes.reactionContainer}>
                                <img onClick={toggleFavorite} src={favoriteOff}
                                     alt="Favorite Off"/>
                            </div>
                        )}
                        {girl.isFavorite && !girl.like && (
                            <div className={classes.reactionContainer}>
                                <img onClick={toggleFavorite} src={favoriteOn} alt="Favorite On"/>
                            </div>

                        )}
                    </div>
                    <div>
                        {girl.like && (
                            <div className={classes.reactionContainer}>
                                <img onClick={toggleFavorite} src={like} alt="Like"/>
                            </div>
                        )}
                    </div>
                    {!isConnection
                        ? <div className={classes.wrapperBirthdayBtnGroup}>
                            <button onClick={showConnection} className={' btn-primary' + ' btn-orange'}>want to chat
                            </button>
                            <a>
                                <img src="/BirthdayButton.svg" alt="Give a gift"/>
                            </a>
                        </div>
                        : <div className={classes.wrapperBirthdayBtnGroup + ` ${classes.showConnection}`}>
                            <button onClick={handleScrollToElement} className={' btn-primary' + ' btn-blue'}><img
                                src="/First.svg" alt=""/>chat
                                now
                            </button>

                        </div>
                    }
                </div>

            )}
            {!isShow &&
                <div className={classes.girlInfo}>
                    <p>{girl.name}, <span>{new Date().getFullYear() - new Date(dateInMilliseconds).getFullYear()}</span>
                    </p>

                </div>
            }

        </div>
    );
};

export default GirlCard;
