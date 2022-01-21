import React, { useState, useRef } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/ErrorModal/ErrorModal';
import classes from "./AddUser.module.css"

const AddUser = (props) => {
    const nameInputRef = useRef();
    const contactInputRef = useRef();
    const emailInputRef = useRef();

    const [error, setError] = useState()

    const addUserHandler = (e) => {
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredContact = contactInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        
        if(enteredName.trim().length === 0 || enteredContact.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            })
            return;
        }
        if(+enteredContact < 10){
            setError({
                title: 'Invalid contact number',
                message: 'Please enter a valid contact number'
            })
            return;
        }
        props.onAddUser(enteredName, enteredContact, enteredEmail);
        nameInputRef.current.value ='';
        contactInputRef.current.value = '';
        emailInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null)
    }


  return (
      <React.Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.userForm}>
          <form onSubmit={addUserHandler}>            
              <input 
                type="text" 
                id="username" 
                placeholder="Enter Name" 
                ref={nameInputRef}
              />
              <input 
                type="tel" 
                id="contact" 
                placeholder="Enter Contact Number" 
                ref={contactInputRef}
              />
              <input 
                type="email" 
                id="email" 
                placeholder="Enter E-Mail id" 
                ref={emailInputRef}
              />
              <Button type="submit">Add User</Button>
          </form>
      </Card>
      </React.Fragment>
  )
}

export default AddUser;
