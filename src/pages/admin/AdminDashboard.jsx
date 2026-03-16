import React from 'react';
import { Users, BookOpen, Activity, Shield, TrendingUp, Search } from 'lucide-react';
import withRipple from '../../components/ui/withRipple';

const RippleButton = withRipple('button');

const AdminDashboard = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title" style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>Admin Control Panel</h1>
          <p className="page-subtitle" style={{ color: 'var(--text-muted)' }}>Platform metrics and management.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <RippleButton className="btn btn-primary" onClick={() => window.location.href='/login'}>
             Logout
          </RippleButton>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Students</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)' }}>4,289</div>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(106, 104, 223, 0.2)', borderRadius: 'var(--radius-md)', color: '#6a68df' }}>
              <Users size={20} />
            </div>
          </div>
          <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
             <TrendingUp size={14}/> +12% this month
          </div>
        </div>
        
        <div className="glass-card" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Notes Shared</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)' }}>1,504</div>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(16, 185, 129, 0.2)', borderRadius: 'var(--radius-md)', color: '#10b981' }}>
               <BookOpen size={20} />
            </div>
          </div>
          <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
             <TrendingUp size={14}/> +45 this week
          </div>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Active Sessions</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-main)' }}>342</div>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(239, 185, 149, 0.2)', borderRadius: 'var(--radius-md)', color: '#efb995' }}>
              <Activity size={20} />
            </div>
          </div>
          <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
             Stable servers
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
        <h3 style={{ margin: 0, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Shield size={20} className="text-primary"/> Recent Platform Activity
        </h3>
        
        <div className="item-list">
          <div className="list-item ripple-surface" style={{ padding: '1rem', background: 'var(--bg-body)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            <div className="item-content flex-1">
              <h4 style={{ margin: '0 0 0.2rem 0', color: 'var(--text-main)' }}>New Print Shop registered</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>"Engineering Building Print Hub" was added to the system.</p>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>2 hrs ago</span>
          </div>

          <div className="list-item ripple-surface" style={{ padding: '1rem', background: 'var(--bg-body)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
            <div className="item-content flex-1">
              <h4 style={{ margin: '0 0 0.2rem 0', color: 'var(--text-main)' }}>Content Flagged</h4>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>A user flagged a forum post in CS301 for review.</p>
            </div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>5 hrs ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
