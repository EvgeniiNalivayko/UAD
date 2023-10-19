import React from 'react';
import "./assets/index.css";
import MainPage from "./Component/MainPage/MainPage";
import GirlProfilesList from "./Component/GirlProfilesList/GirlProfilesList";
import VideoChat from "./Component/VideoChat/VideoChat";
import JoinSection from "./Component/JoinSection/JoinSection";
import FooterSection from "./Component/FooterSection/FooterSection";
import StatisticsSlider from "./Component/StatisticsSlider/StatisticsSlider";
import TargetAddSlider from "./Component/TargetAddSlider/TargetAddSlider";
import FeedBackSlider from "./Component/FeedBackSlider/FeedBackSlider";



function App() {

    return (
        <div>
            <MainPage/>
            <div className={'container'}>
                <StatisticsSlider/>
                <GirlProfilesList/>
            </div>
            <TargetAddSlider/>
            <FeedBackSlider/>
            <VideoChat/>
            <JoinSection/>
            <FooterSection/>
        </div>
    );
}

export default App;
