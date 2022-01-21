import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import classes from './Login.module.css'
import AuthContext from '../../store/auth-context';


const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return { value: action.val, isValid: action.val.includes('@') }
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false }
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = (props) => {

    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
      value: '',
      isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
      value: '',
      isValid: null,
    });

    useEffect(() => {
      console.log('EFFECT RUNNING');

      return() => {
        console.log('EFFECT CLEANUP')
      }
    }, []);

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
      const identifier = setTimeout(() => {
        console.log('Checking form validity!');
        setFormIsValid(emailIsValid && passwordIsValid);
      }, 500);

      return () => {
        console.log('CLEANUP');
        clearTimeout(identifier);
      };
    }, [emailIsValid, passwordIsValid]);

    const authCtx = useContext(AuthContext);

    const submitHandler = (e) => {
        e.preventDefault();
        authCtx.onLogin(emailState.value, passwordState.value);
    }

    const emailChangeHandler = (e) => {
      dispatchEmail({ type: 'USER_INPUT', val: e.target.value });       
    }
    const passwordChangeHandler = (e) => {
      dispatchPassword({ type: 'USER_INPUT', val: e.target.value });
    }

    const validateEmailHandler = () => {
      dispatchEmail({ type: 'INPUT_BLUR' });
    }
    const validatePasswordHandler = () => {
      dispatchPassword({ type: 'INPUT_BLUR' });
    }


  return (
      <React.Fragment>
      <Card className={classes.login}>
          <h2 className={classes.heading_02} > Login </h2>
          <h3 className={classes.heading_03} > Welcome back, please login to your account.</h3>
          
          <form onSubmit={submitHandler}>
            <Input 
              type="email" 
              id="email" 
              label="E-Mail:"
              isValid={emailIsValid} 
              placeholder="Enter Your Email" 
              value={emailState.value}
              onChange={emailChangeHandler} 
              onBlur={validateEmailHandler}  
            />

            <Input 
              type="password" 
              id="password" 
              label="Password:"
              isValid={passwordIsValid} 
              placeholder="Enter Your Password" 
              value={passwordState.value}
              onChange={passwordChangeHandler} 
              onBlur={validatePasswordHandler}  
            />

            <Button type="submit" className={classes.btn} disabled={!formIsValid}>Login</Button>

          </form>
      </Card>
      </React.Fragment>
  )
}

export default Login;
