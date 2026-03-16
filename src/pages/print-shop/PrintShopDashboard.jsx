import React, { useState } from 'react';
import { Printer, CheckCircle, Clock, Search, List, Activity, Settings, User } from 'lucide-react';
import { activePrintRequestsList } from '../../data/mockData';
import withRipple from '../../components/ui/withRipple';

const RippleButton = withRipple('button');

const PrintShopDashboard = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [jobs, setJobs] = useState([
    ...activePrintRequestsList.map(j => ({ ...j, status: 'Pending', time: '10 mins ago', user: 'V Sing' })),
    { id: 2, filename: 'CS301_Lecture_Notes.pdf', location: 'Library Main Floor', status: 'Pending', time: '25 mins ago', user: 'Mike R.' },
    { id: 3, filename: 'Project_Proposal.docx', location: 'Library Main Floor', status: 'Completed', time: '1 hour ago', user: 'Sarah J.' }
  ]);

  const handleCompleteJob = (id) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status: 'Completed' } : job));
  };

  const displayedJobs = activeTab === 'all' ? jobs : jobs.filter(j => j.status.toLowerCase() === activeTab);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title" style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>Print Shop Console</h1>
          <p className="page-subtitle" style={{ color: 'var(--text-muted)' }}>Manage incoming student print jobs.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <RippleButton className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Settings size={18} /> Settings
          </RippleButton>
          <RippleButton className="btn btn-primary" onClick={() => window.location.href='/login'}>
             Logout
          </RippleButton>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.8rem', background: 'rgba(239, 185, 149, 0.2)', borderRadius: 'var(--radius-md)', color: '#efb995' }}>
              <Clock size={24} />
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700 }}>{jobs.filter(j => j.status === 'Pending').length}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Pending Jobs</div>
            </div>
          </div>
        </div>
        
        <div className="glass-card" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.8rem', background: 'rgba(16, 185, 129, 0.2)', borderRadius: 'var(--radius-md)', color: '#10b981' }}>
              <CheckCircle size={24} />
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700 }}>{jobs.filter(j => j.status === 'Completed').length}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Completed Today</div>
            </div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ padding: '0.8rem', background: 'rgba(106, 104, 223, 0.2)', borderRadius: 'var(--radius-md)', color: '#6a68df' }}>
              <Printer size={24} />
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700 }}>Library Main</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Active Station</div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card" style={{ borderRadius: 'var(--radius-lg)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', borderBottom: '1px solid var(--border)' }}>
          <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <List size={20} className="text-primary"/> Job Queue
          </h3>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ display: 'flex', background: 'var(--bg-input)', borderRadius: 'var(--radius-md)', padding: '0.2rem' }}>
              <button onClick={() => setActiveTab('all')} style={{ padding: '0.4rem 1rem', border: 'none', background: activeTab === 'all' ? 'var(--bg-card)' : 'transparent', color: activeTab === 'all' ? 'var(--text-main)' : 'var(--text-muted)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500, fontSize: '0.85rem' }}>All</button>
              <button onClick={() => setActiveTab('pending')} style={{ padding: '0.4rem 1rem', border: 'none', background: activeTab === 'pending' ? 'var(--bg-card)' : 'transparent', color: activeTab === 'pending' ? 'var(--text-main)' : 'var(--text-muted)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500, fontSize: '0.85rem' }}>Pending</button>
              <button onClick={() => setActiveTab('completed')} style={{ padding: '0.4rem 1rem', border: 'none', background: activeTab === 'completed' ? 'var(--bg-card)' : 'transparent', color: activeTab === 'completed' ? 'var(--text-main)' : 'var(--text-muted)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', transition: 'all 0.2s', fontWeight: 500, fontSize: '0.85rem' }}>Completed</button>
            </div>
          </div>
        </div>

        <div style={{ padding: '1.5rem' }}>
          {displayedJobs.map(job => (
            <div key={job.id} className="ripple-surface" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'var(--bg-body)', borderRadius: 'var(--radius-md)', marginBottom: '1rem', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                 <div style={{ padding: '0.6rem', background: job.status === 'Completed' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(106, 104, 223, 0.1)', color: job.status === 'Completed' ? '#10b981' : '#6a68df', borderRadius: 'var(--radius-md)' }}>
                    <Printer size={20} />
                 </div>
                 <div>
                    <h4 style={{ margin: '0 0 0.3rem 0', fontWeight: 600, color: 'var(--text-main)' }}>{job.filename}</h4>
                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><User size={14}/> {job.user}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={14}/> {job.time}</span>
                    </div>
                 </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="badge" style={{ background: job.status === 'Completed' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 185, 149, 0.2)', color: job.status === 'Completed' ? '#10b981' : '#efb995' }}>{job.status}</span>
                {job.status === 'Pending' && (
                  <RippleButton className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }} onClick={() => handleCompleteJob(job.id)}>
                    Mark Done
                  </RippleButton>
                )}
              </div>
            </div>
          ))}
          {displayedJobs.length === 0 && <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '2rem 0' }}>No print jobs found.</p>}
        </div>
      </div>
    </div>
  );
};

export default PrintShopDashboard;
