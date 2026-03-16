import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './layout.css';

const DashboardLayout = ({ toggleTheme, currentTheme }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="main-content">
        <Navbar toggleTheme={toggleTheme} currentTheme={currentTheme} />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
