import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Printer, GraduationCap, MessageSquare, User, LogOut } from 'lucide-react';
import './sidebar.css';

const Sidebar = () => {
  const navItems = [
    { path: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/notes',     icon: <FileText size={20} />,        label: 'Campus Notes' },
    { path: '/print',     icon: <Printer size={20} />,         label: 'Print Hub' },
    { path: '/skills',    icon: <GraduationCap size={20} />,   label: 'Skill Exchange' },
    { path: '/forum',     icon: <MessageSquare size={20} />,   label: 'Q&A Forum' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">
          <GraduationCap size={22} color="white" />
        </div>
        <h2>UniHub</h2>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/profile" className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}>
          <span className="nav-icon"><User size={20} /></span>
          <span className="nav-label">Profile Settings</span>
        </NavLink>
        <NavLink to="/login" className="nav-item nav-danger">
          <span className="nav-icon"><LogOut size={20} /></span>
          <span className="nav-label">Sign Out</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
