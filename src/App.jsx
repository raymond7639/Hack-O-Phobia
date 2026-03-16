import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import UserProfile from './pages/profile/UserProfile';
import Dashboard from './pages/dashboard/Dashboard';
import NotesList from './pages/notes/NotesList';
import PrintRequests from './pages/print/PrintRequests';
import SkillMarketplace from './pages/skills/SkillMarketplace';
import QuestionFeed from './pages/forum/QuestionFeed';
import Notifications from './pages/notifications/Notifications';
import AIAssistant from './components/ai/AIAssistant';
import PrintShopDashboard from './pages/print-shop/PrintShopDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <AIAssistant />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes wrapped in Layout */}
        <Route element={<DashboardLayout toggleTheme={toggleTheme} currentTheme={theme} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notes" element={<NotesList />} />
          <Route path="/print" element={<PrintRequests />} />
          <Route path="/skills" element={<SkillMarketplace />} />
          <Route path="/forum" element={<QuestionFeed />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
        
        {/* Role-specific Portals */}
        <Route path="/print-shop" element={<PrintShopDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
