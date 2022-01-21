import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header  className={`${classes.header} ${props.className}`}>
            <a href='#' className={`${classes.logo}`}>Logo</a>
            <div className={`${classes.title}`}>Page Title</div>
        </header>
    )
}

export default Header;
