import React, {useState, useContext} from 'react';
import AuthContext from '../../store/auth-context';

import Container from '../UI/Container/Container';
import AddUser from '../User/AddUser';
import UsersList from '../User/UserList';
import UserRegistration from '../User/UserRegistration';

import classes from './Home.module.css';

const Home = (props) => {
  const authCtx = useContext(AuthContext);

  const [usersList, setUsersList] = useState([]);
  const [newUsersList, setNewUsersList] = useState([]);
  const addUserHandler = (uName, uContact, uEmail) => {
      setUsersList((prevUsersList) => {
          return [...prevUsersList, { name: uName, contact: uContact, email: uEmail }];  
      })
  }

  const AddNewUserHandler = (userName, userEmail, userPassword) => {
      setNewUsersList((prevNewUsersList) => {
          return [...prevNewUsersList, { name: userName, userEmail: userEmail, userPass: userPassword }];  
      })
  }

  return (
    <Container className={classes.home}>
      <h1>Welcome back!</h1>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
      {/* <UserRegistration onAddNewUser={AddNewUserHandler} /> */}
    </Container>
  );
};

export default Home;
