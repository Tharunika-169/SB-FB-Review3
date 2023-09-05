import React from 'react';
import Front from './Front.png';

function Cakee() {
    const containerStyle = {
        backgroundImage: `url(${Front})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
        
    };

    return (
        <div>
            <div style={containerStyle}></div>
        </div>
    );
}

export default Cakee;
