import React from 'react';
import { Link } from 'react-router-dom';



const Topbar = () => {
    return (
        <div id="header">

            <div className="logo-wrapper">
                <Link to="/"><h1>getContact</h1></Link>
            </div>
            <ul className="menu-item-wrapper">
                <Link to="/"><li className="menu-item">Home</li></Link>
                <Link to="/about"><li className="menu-item">About</li></Link>
            </ul>
        </div>
    );
}

export default Topbar;