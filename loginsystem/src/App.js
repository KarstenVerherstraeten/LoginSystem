import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; // Assuming you have a Dashboard component for the dashboard page
import Home from './pages/Home'; // Assuming you have a Home component for the landing page
import UpdateUser from './pages/UpdateUser'; // Assuming you have an UpdateUser component for the update user page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/update-user" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
}

export default App;