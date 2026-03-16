import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, Moon, Sun } from 'lucide-react';
import withRipple from '../ui/withRipple';

const RippleButton = withRipple('button');
const RippleLink = withRipple(Link);

const Navbar = ({ toggleTheme, currentTheme }) => {
  return (
    <header className="navbar">
      <div className="navbar-search">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search notes, skills, users..." className="search-input" />
      </div>

      <div className="navbar-actions">
        <RippleButton className="icon-btn" onClick={toggleTheme} title="Toggle Theme">
          {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </RippleButton>
        <RippleLink to="/notifications" className="icon-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </RippleLink>
        <div className="user-profile-sm ripple-surface">
          <img src="https://ui-avatars.com/api/?name=V+Sing&background=047857&color=fff" alt="User Avatar" className="avatar" />
          <div className="user-info">
            <span className="user-name">V Sing</span>
            <span className="user-role">Student</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
