import React, { useContext } from 'react';

import Login from './components/Login/Login';
import MainHeader from './components/Header/MainHeader';
import Home from './components/Home/Home';
import AuthContext from './store/auth-context';
import './App.css';

// import AuthContext from './store/auth-context';

const App = () => {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const userLoggedInInfo = localStorage.getItem('isLoggedIn');
  //   if(userLoggedInInfo === '1'){
  //     setIsLoggedIn(true)
  //   }
  // }, [])

  // const loginHandler = (email, password) => {
  //   localStorage.setItem('isLoggedIn', '1');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  const ctx = useContext(AuthContext);

  return (
    <div className="App">
      {/* <Header className={`header`}/>
      <Container className={`main-container`}>
        <AddUser onAddUser={addUserHandler} />
        <UserList users={usersList} />
      </Container>
      <Footer className={`footer fixed-header`}/> */}


      {/* <AuthContext.Provider 
        value={{
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler
        }}
      > */}

        <MainHeader  />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home />}
        </main>

     {/*  </AuthContext.Provider> */}
    </div>
  );
}

export default App;
