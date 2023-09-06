import React from 'react';
import "./css/main.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register/register.js'; // Updated import path
import Login from './Login/Login.js'; // Updated import path
import TodoPage from './components/TodoPage.js';
function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/todos" element={<TodoPage />} /> */}
        <Route path="/todos/:userId" component={TodoPage} />
      </Routes>
    </Router>
  );
}

export default App;
