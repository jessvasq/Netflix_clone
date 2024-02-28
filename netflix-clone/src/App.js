import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/counter/userSlice';
import Profile from './components/Profile/Profile';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // if the user is logged in, we'll set the user to the user that we get from the auth object.
    // if the user is logged out, we'll set the user to null.
      const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        if(userAuth) {
          //user is logged in
          console.log(userAuth);
          //we'll dispatch the login action and pass the user's uid and email to the payload. Dispatch is a function that we can use to dispatch actions to the redux store.
          dispatch( login({
            uid: userAuth.uid,
            email: userAuth.email,
          }));
        } else {
          //user is logged out
          dispatch(logout());
        }
      });
      return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
        <Router>
          {!user ? ( 
          <Routes>
            <Route path="/login" element={<Login />}/>
          </Routes>
       ) : ( 
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/profile" element={<Profile />}/>
          </Routes>
          
         )}; 
      </Router>
    </div>
  );
}

export default App;
