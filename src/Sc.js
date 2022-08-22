import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import './Scrollbars.css';



const Sc = () => {

    return (
        <div>
            <Scrollbars
                thumbSize={85}
                renderTrackHorizontal={props => <div {...props} className="track-horizontal" />}
                renderTrackVertical={props => <div {...props} className="track-vertical" />}
                renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" />}
                renderThumbVertical={props => <div {...props} className="thumb-vertical" />}
                renderView={props => <div {...props} className="view" />}>
            </Scrollbars>
        </div>
    )
};




export default Sc;