import React from 'react';
import YouTube from 'react-youtube';

export default function youtube(props){
    function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    let width = window.innerWidth - 500
    const opts = {
        height: width/16*9,
        width: width,
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return <YouTube videoId={props.id} opts={opts} onReady={_onReady} />;

}