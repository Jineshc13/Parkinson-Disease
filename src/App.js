// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tp from './components/Tp';
import Updates from './components/Updates';
import DietsAndExercises from './components/DietsAndExercises';
import Login from './components/Login';
import  Detection from './components/Detection';
import Consultancy from './components/Consultancy';

function App() {
  return (
    <Router>
      <div>
        {/* Common layout elements can be placed here */}
        <Routes>
          <Route path="/" element={<Tp />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/DietsAndExercises" element={<DietsAndExercises />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Detection" element={<Detection />} />
          <Route path="/consultancy" element={<Consultancy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
