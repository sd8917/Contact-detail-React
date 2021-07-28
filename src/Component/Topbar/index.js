import React from 'react';

const Topbar = () => {
    return ( <div id="header">

        <div className="logo-wrapper"> 
            <h1>getContact</h1>
        </div>
        <ul className="menu-item-wrapper">
            <li className="menu-item">Home</li>
            <li className="menu-item">About</li>
        </ul>
    </div> );
}
 
export default Topbar;