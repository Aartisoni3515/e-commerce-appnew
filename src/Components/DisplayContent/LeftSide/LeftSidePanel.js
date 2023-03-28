import React from 'react';
import "./LeftSide.css";

function LeftSidePanel(props) {
    return (
        <div className="LeftSize__main">
            <div className="leftSide__header">
                Brand
            </div>
            <div className="leftSide__brandname">
                <label className="brandname">
                    <input type="checkbox" value="Apple" />Kitchen
                </label>
                <label className="brandname">
                    <input type="checkbox" value="Samsung" />Mobiles
                </label>
                <label className="brandname">
                    <input type="checkbox" value="MI" />Clothes
                </label>
                <label className="brandname">
                    <input type="checkbox" value="MI" />Clothes
                </label>
            </div>
        </div>
    );
}

export default LeftSidePanel;