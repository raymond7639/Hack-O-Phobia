import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Building, BookOpen, GraduationCap, FileText, Printer, MessageSquare, Briefcase } from 'lucide-react';
import './auth.css';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-split-left">
        <div className="auth-brand">
          <GraduationCap size={32} />
          UniHub
        </div>
        <h1>Join the Campus Ecosystem</h1>
        <p>Create your student profile and unlock access to shared notes, cloud printing, skill exchanges, and the academic Q&A forum.</p>
        
        <div className="auth-features">
          <div className="auth-feat-item"><User size={20} /> Verified Profiles</div>
          <div className="auth-feat-item"><FileText size={20} /> Shared Notes</div>
          <div className="auth-feat-item"><Printer size={20} /> Cloud Printing</div>
          <div className="auth-feat-item"><MessageSquare size={20} /> Q&A Forum</div>
        </div>
      </div>

      <div className="auth-split-right">
        <div className="auth-card">
          <h2>Create Account</h2>
          <p>Sign up to start connecting with your campus.</p>

          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <User size={18} className="input-icon" />
                <input type="text" placeholder="John Doe" required />
              </div>
            </div>

            <div className="form-group">
              <label>University Email</label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input type="email" placeholder="student@university.edu" required />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Department</label>
                <div className="input-wrapper">
                  <Building size={18} className="input-icon" />
                  <input type="text" placeholder="e.g. Computer Science" required />
                </div>
              </div>
              <div className="form-group">
                <label>Semester</label>
                <div className="input-wrapper">
                  <BookOpen size={18} className="input-icon" />
                  <input type="number" min="1" max="10" placeholder="e.g. 5" required />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input type="password" placeholder="••••••••" required />
              </div>
            </div>

            <button type="submit" className="btn btn-primary auth-btn">
              Register
            </button>
          </form>

          <div className="auth-links">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
