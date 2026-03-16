import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Printer, Star, TrendingUp, MessageSquare, ArrowRight, BookOpen, Clock } from 'lucide-react';
import withRipple from '../../components/ui/withRipple';
import './dashboard.css';
import { dashboardStats, recentNotesList, activePrintRequestsList, trendingSkillsList, currentUser } from '../../data/mockData';

const RippleButton = withRipple('button');
const RippleLink = withRipple(Link);

const Dashboard = () => {
  return (
    <div className="dashboard-grid">
      {/* Welcome Section */}
      <div className="col-span-12 page-header">
        <div>
          <h1 className="page-title">Welcome back, {currentUser.name.split(' ')[0]}</h1>
          <p className="page-subtitle">Here's what's happening around campus today.</p>
        </div>
        <RippleButton className="btn btn-primary">
          <Printer size={18} /> New Print Queue
        </RippleButton>
      </div>

      <div className="col-span-12 stats-grid">
        {dashboardStats.map(stat => (
          <div key={stat.id} className="stat-card ripple-surface">
            <div className={`stat-icon ${stat.type === 'questions' ? 'questions-bg' : stat.type === 'skill' ? 'skill-bg' : ''}`}
                 style={
                   stat.type === 'questions' ? {background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899'} :
                   stat.type === 'skill' ? { background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' } : {}
                 }>
              {stat.type === 'notes' && <FileText size={24} />}
              {stat.type === 'rating' && <Star size={24} />}
              {stat.type === 'questions' && <MessageSquare size={24} />}
              {stat.type === 'skill' && <TrendingUp size={24} />}
            </div>
            <div className="stat-info">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Areas */}
      <div className="col-span-8 glass-card">
        <div className="flex justify-between items-center mb-4" style={{ marginBottom: '1.5rem' }}>
          <h3>Recent Notes</h3>
          <RippleLink to="/notes" className="text-primary flex items-center gap-2" style={{ fontSize: '0.9rem', fontWeight: 500 }}>
            View all <ArrowRight size={16} />
          </RippleLink>
        </div>
        <div className="item-list">
          {recentNotesList.map(note => (
            <div key={note.id} className="list-item ripple-surface">
              <FileText size={20} className="item-icon" />
              <div className="item-content flex-1">
                <h4>{note.title}</h4>
                <p>Uploaded by {note.uploader} • {note.major}</p>
                <div className="item-meta">
                  <span className="badge" style={{ background: 'rgba(4, 120, 87, 0.1)', color: 'var(--primary)' }}>{note.course}</span>
                  <span>{note.rating} ★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="col-span-4 flex-col gap-4">
        <div className="glass-card flex-1">
          <h3 style={{ marginBottom: '1.5rem' }}>Active Print Requests</h3>
          <div className="item-list">
            {activePrintRequestsList.map(req => (
              <div key={req.id} className="list-item ripple-surface" style={{ alignItems: 'center' }}>
                <Printer size={20} className="item-icon" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.1)' }} />
                <div className="item-content flex-1">
                  <h4>{req.filename}</h4>
                  <p>{req.location}</p>
                </div>
                <span className="badge" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>{req.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card flex-1">
          <h3 style={{ marginBottom: '1.5rem' }}>Trending Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {trendingSkillsList.map(skill => (
              <span key={skill} className="skill-tag ripple-surface">{skill}</span>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
