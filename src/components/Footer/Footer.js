import React from 'react';
import classes from'./Footer.module.css';

const Footer = (props) => {
    return (
        <footer  className={`${classes.footer} ${props.className}`}>
            <span className={`${classes.copyright}`}>COPYRIGHT &copy; 2022, All rights are reserved.</span>
        </footer>
    )
}

export default Footer;
