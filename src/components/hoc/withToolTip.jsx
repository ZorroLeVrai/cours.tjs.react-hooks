import React, { useState } from 'react';

const withToolTip = (Component, toolTipText = "Some tooltip") => {
    const EnhanceComponent = (props) => {
        const [showTooltip, setShowTooltip] = useState(false);
        const mouseOver = () => setShowTooltip(true);
        const mouseOut = () => setShowTooltip(false);
        return (
        <>
            <span onMouseOver={mouseOver} onMouseOut={mouseOut}><Component {...props} /></span>
            {showTooltip && <div><span className="border">{toolTipText}</span></div>}
        </>
        );
    };
    return EnhanceComponent;
}

export default withToolTip;