import React from 'react';

import classes from './UserList.module.css';

const UserList = (props) => {

    return (
        <div className={classes.users}>
        <ul className={classes.list}>
            <li className={classes.row}>
                <span className={classes.col}>Sr No</span>
                <span className={classes.col}>Name</span>
                <span className={classes.col}>Contacts</span>
                <span className={classes.col}>Email</span>
                <span className={classes.col}>Edit</span>
                <span className={classes.col}>Delete</span>        
            </li>
            {props.users.map((user, index) => (
            <li key={index} className={classes.row}>
                <span className={classes.col}>{index + 1}</span>
                <span className={classes.col}>{user.name}</span>
                <span className={classes.col}>{user.contact}</span>                
                <span className={classes.col}>{user.email}</span>
                <span className={classes.col}></span>
                <span className={classes.col}></span>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default UserList;
