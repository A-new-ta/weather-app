import React from 'react';
import './Footer.scss';

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