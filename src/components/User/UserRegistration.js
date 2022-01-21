import React,{ useRef } from 'react';

import classes from './UserRegistration.module.css';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const UserRegistration = (props) => {
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const registrationHandler = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        props.onAddNewUser(enteredName, enteredEmail, enteredPassword);
        nameInputRef.current.value ='';
        emailInputRef.current.value = '';
        passwordInputRef.current.value = '';
    }


    return (
        <Card className={classes.newUser}>
          <form onSubmit={registrationHandler}>            
              <input 
                type="text" 
                id="username" 
                placeholder="Enter Name" 
                ref={nameInputRef}
              />
              <input 
                type="userEmail" 
                id="userEmail" 
                placeholder="Enter E-Mail" 
                ref={emailInputRef}
              />
              <input 
                type="userPassword" 
                id="userPassword" 
                placeholder="Enter Password" 
                ref={passwordInputRef}
              />
              <Button type="submit">Submit</Button>
          </form>
      </Card>
    );
}

export default UserRegistration;
