import React, {Component, useEffect, useState} from 'react';
import classes from './FooterSection.module.scss'


const FooterSection = () => {
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsShow(window.innerWidth >= 992);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={classes.wrapperFooter}>
            <h2>Chat With Ukrainian Single Women</h2>
            <div className={classes.flexContainer}>
                <div className={classes.column}>
                    <p>Premier Ukraine Dating: Dive into the world of Ukrainian dating with our cutting-edge
                        platform, designed to help you find your ideal match effortlessly.
                    </p>
                    <p> Connect Instantly: Engage in lively chats and exchanges with Ukraine women through our
                        user-friendly messaging system. Explore profiles, strike up conversations, and connect on a
                        deeper level with Ukrainian single ladies.</p>
                    <p>Eastern Europe's Finest Dating: Immerse yourself in the rich cultural tapestry of Eastern
                        Europe. Meet Ukrainian singles and ignite a spark with someone special who understands your
                        passions and aspirations.
                    </p>
                    <p>Ukraine's Gems: Our platform boasts a stunning array of Ukrainian singles, including the
                        mesmerizing 'Kyiv Queens' and the charming 'Odessa Beauties.' Explore their profiles and
                        find your perfect match among Ukrainian women personals.</p>
                </div>
                {isShow && <div className={classes.column}>
                    <p>Love Knows No Boundaries: Whether you're in search of hot Ukraine women or a Ukraine single
                        woman looking for a husband, our diverse community caters to various preferences and
                        aspirations.</p>
                    <p> Authenticity Matters: Say goodbye to worries about fake profiles. Our dedicated team
                        ensures
                        a safe and secure environment, so you can focus on forging genuine connections.
                        Join us today and unlock a world of dating possibilities!</p>
                    <p> Experience the magic of Ukraine dating sites, where every click brings you closer to a
                        heartfelt connection. Whether you're enchanted by the elegance of Slavic beauties,
                        intrigued
                        by Kiev dating prospects, or seeking the companionship of single women in Odessa, we're
                        here
                        to make your dreams a reality.</p>
                    <p>Sign up now and embark on an unforgettable journey to discover your Ukrainian soulmate!"</p>
                </div>}
                {!isShow && <a className={classes.isShow} onClick={() => setIsShow(true)}> Read More</a>}
            </div>


        </div>
    );
}

export default FooterSection
