import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, GraduationCap, FileText, Printer, MessageSquare, Briefcase, Shield, Store } from 'lucide-react';
import withRipple from '../../components/ui/withRipple';
import './auth.css';

const RippleButton = withRipple('button');
const RippleLink = withRipple(Link);

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('student');

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'student') navigate('/dashboard');
    else if (role === 'printshop') navigate('/print-shop');
    else navigate('/admin');
  };

  return (
    <div className="auth-page">
      <div className="auth-split-left">
        <div className="auth-brand">
          <GraduationCap size={32} />
          UniHub
        </div>
        <h1>Your Complete Campus Ecosystem</h1>
        <p>Connect, share notes, print documents, and exchange skills all in one integrated platform designed exclusively for students.</p>
        
        <div className="auth-features">
          <div className="auth-feat-item"><FileText size={20} /> Shared Notes</div>
          <div className="auth-feat-item"><Printer size={20} /> Cloud Printing</div>
          <div className="auth-feat-item"><Briefcase size={20} /> Skill Exchange</div>
          <div className="auth-feat-item"><MessageSquare size={20} /> Q&A Forum</div>
        </div>
      </div>

      <div className="auth-split-right">
        <div className="auth-card" style={{ maxWidth: '440px' }}>
          <h2>Welcome back</h2>
          <p>Please select your role and enter your credentials.</p>

          <div className="role-selector" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', padding: '0.3rem', background: 'var(--bg-input)', borderRadius: 'var(--radius-md)' }}>
            <button 
              type="button"
              className={`role-btn ${role === 'student' ? 'active' : ''}`}
              onClick={() => setRole('student')}
              style={{ flex: 1, padding: '0.6rem', border: 'none', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', background: role === 'student' ? 'var(--bg-card)' : 'transparent', color: role === 'student' ? 'var(--text-main)' : 'var(--text-muted)', boxShadow: role === 'student' ? '0 2px 5px rgba(0,0,0,0.05)' : 'none', transition: 'all 0.2s' }}
            >
              <GraduationCap size={16} /> Student
            </button>
            <button 
              type="button"
              className={`role-btn ${role === 'printshop' ? 'active' : ''}`}
              onClick={() => setRole('printshop')}
              style={{ flex: 1, padding: '0.6rem', border: 'none', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', background: role === 'printshop' ? 'var(--bg-card)' : 'transparent', color: role === 'printshop' ? 'var(--text-main)' : 'var(--text-muted)', boxShadow: role === 'printshop' ? '0 2px 5px rgba(0,0,0,0.05)' : 'none', transition: 'all 0.2s' }}
            >
              <Store size={16} /> Print Shop
            </button>
            <button 
              type="button"
              className={`role-btn ${role === 'admin' ? 'active' : ''}`}
              onClick={() => setRole('admin')}
              style={{ flex: 1, padding: '0.6rem', border: 'none', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', background: role === 'admin' ? 'var(--bg-card)' : 'transparent', color: role === 'admin' ? 'var(--text-main)' : 'var(--text-muted)', boxShadow: role === 'admin' ? '0 2px 5px rgba(0,0,0,0.05)' : 'none', transition: 'all 0.2s' }}
            >
              <Shield size={16} /> Admin
            </button>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>
                {role === 'student' ? 'University Email' : role === 'printshop' ? 'Shop Email / ID' : 'Admin Email'}
              </label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input 
                  type={role === 'printshop' ? 'text' : 'email'} 
                  placeholder={role === 'student' ? 'student@university.edu' : role === 'printshop' ? 'shop@unihub.edu' : 'admin@unihub.edu'} 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input type="password" placeholder="••••••••" required />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', margin: 0 }}>
                <input type="checkbox" style={{ width: 'auto' }} /> Remember me
              </label>
              <a href="#" style={{ color: 'var(--primary)', fontWeight: 500 }}>Forgot password?</a>
            </div>

            <RippleButton type="submit" className="btn btn-primary auth-btn">
              Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}
            </RippleButton>
          </form>

          {role === 'student' && (
            <div className="auth-links">
              Don't have an account? <Link to="/register">Create one</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
