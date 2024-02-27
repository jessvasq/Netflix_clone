import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(() => {
    // if the user is logged in, we'll set the user to the user that we get from the auth object.
    // if the user is logged out, we'll set the user to null.
      const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        if(userAuth) {
          //user is logged in
          console.log(userAuth);
        } else {
          //user is logged out
        }
      });
      return unsubscribe;
  }, []);

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
          </Routes>
         )}; 
      </Router>
    </div>
  );
}

export default App;
