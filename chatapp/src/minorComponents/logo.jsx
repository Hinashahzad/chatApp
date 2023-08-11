import React from 'react';

const Logo = ({ size, img }) => {
    return (
        
        <img src={ img }
            alt="Chat logo"
            className={ `rounded-full ${ size } cursor-pointer` } />
        
    );
};

export default Logo;
