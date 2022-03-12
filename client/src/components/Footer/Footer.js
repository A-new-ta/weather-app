import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div className='year'>
                &copy; {`${currentYear} `}
            </div>
        </footer>
    )
}

export default Footer;