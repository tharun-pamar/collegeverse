import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Departments from './components/Departments';
import DepartmentDetail from './components/DepartmentDetail';
import Academics from './components/Academics';
import Library from './components/Library';
import Clubs from './components/Clubs';
import Placements from './components/Placements';
import Calendar from './components/Calendar';
import Dashboard from './components/Dashboard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:slug" element={<DepartmentDetail />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/library" element={<Library />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;