import React from 'react';

import mcitylogo from '../../resources/images/logos/logo.jpg';

export const CityLogo = (props) => {

    const template = <div
        className="img_cover logox"
        style={{
            width: props.width,
            height: props.height,
            
            background:`url(${mcitylogo}) no-repeat`
        }}
    ></div>


    
        return template
    

}