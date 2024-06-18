import React, { useState } from 'react';

const withToolTip = (Component, toolTipText) => {
    const EnhanceComponent = (props) => {
        const [showTooltip, setShowTooltip] = useState(false);
        const toolTipContent = toolTipText ?? "Some tooltip";
        const mouseOver = () => setShowTooltip(true);
        const mouseOut = () => setShowTooltip(false);
        return (
        <>
            <span onMouseOver={mouseOver} onMouseOut={mouseOut}><Component {...props} /></span>
            {showTooltip && <div><span className="border">{toolTipContent}</span></div>}
        </>
        );
    };
    return EnhanceComponent;
}

export default withToolTip;