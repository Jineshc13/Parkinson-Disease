// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Tp from './components/Tp';
import Updates from './components/Updates';
import DietsAndExercises from './components/DietsAndExercises';
import Login from './components/Login/index';
import Signup from './components/Signup/index';
import  Detection from './components/Detection';
import Consultancy from './components/Consultancy';
import Profile from './components/profile/profile';

function App() {
  const user = localStorage.getItem("token");

  return (
    <Router>
      <div>
        <Routes>
          {user && <Route path="/"exact element={<Tp/>} />}
          <Route path="/signup" exact element={<Signup />} />
			    <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/DietsAndExercises" element={<DietsAndExercises />} />
          <Route path="/Detection" element={<Detection />} />
          <Route path="/consultancy" element={<Consultancy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
