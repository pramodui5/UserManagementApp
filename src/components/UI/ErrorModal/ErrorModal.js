import React from 'react';
import ReactDom from 'react-dom';

import Button from '../Button/Button';
import Card from '../Card/Card';

import classes from './ErrorModal.module.css'

const Overlay = (props) => {
  return (<div className={classes.overlay} onClick={props.onConfirm} />)
}
const Modal = (props) => {
  return (
    <Card className={classes.modal}>
          <header className={classes.header}>
              <h2>{props.title}</h2>
          </header>
          <div className={classes.content}> 
              <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
      </Card>
  )
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>     
      {ReactDom.createPortal(
        <Overlay  onConfirm={props.onConfirm} />, 
        document.getElementById('overlay-root')
      )}
      {ReactDom.createPortal(
        <Modal  
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />, 
        document.getElementById('modal-root')
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
