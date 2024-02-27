import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
  const user = null;

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
