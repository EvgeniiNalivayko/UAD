import React, {useEffect, useState} from 'react';
import classes from './VideoChat.module.scss'

function VideoChat() {
    return (
        <div className={classes.wrapperChat}>
            <div>
                <h2>Start dating with video chat</h2>
                <p>Expand your online interactions and bring reality and closeness into your relationship.</p>
            </div>
            <div className={classes.isNote}></div>
        </div>
    );
}

export default VideoChat;
