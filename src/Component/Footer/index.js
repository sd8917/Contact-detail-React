import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id="footer">
            <ul className="footer-item-wrapper">
                <Link to="./career"><li className="footer-item">Career</li></Link>
                <Link to="./contact"><li className="footer-item">ContactUs</li></Link>
                <Link to="./privacy"><li className="footer-item">Privacy</li></Link>
                <Link to="./about"><li className="footer-item">About</li></Link>
            </ul>
        </div>
    );
}

export default Footer;