import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div>
                &copy; {`${currentYear} `}
            </div>
        </footer>
    )
}

export default Footer;