import React from 'react';
import "./AdvertisementFour.css"

function AdvertisementFour(props) {
    return (
        <div className="AdvertisementOne__main">
            <div className="AdvertisementOne__header">
            {props?.definition?.title}

            </div>
            <div className="AdvertisementOne__body">
            {/* <img src={props?.definition?.thumbnail} width="300px" /> */}

                <img src={props?.definition?.thumbnail} className="ad_fourImage" />
                <img src={props?.definition?.thumbnail} className="ad_fourImage" />
                <img src={props?.definition?.thumbnail} className="ad_fourImage" />
                <img src={props?.definition?.thumbnail} className="ad_fourImage" />

                <img src={props.definition.thumbnail[1]} className="ad_fourImage" />
                <img src={props.definition.thumbnail[2]} className="ad_fourImage" />
                <img src={props.definition.thumbnail[3]} className="ad_fourImage" />
             </div>
            <div className="AdvertisementOne__footer">
                See more
            </div>
        </div>
    );
}

export default AdvertisementFour;