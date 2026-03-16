import React from 'react';
import { User, Mail, Building, BookOpen, Settings, Edit3, Heart, MessageSquare, Printer, FileText } from 'lucide-react';
import withRipple from '../../components/ui/withRipple';
import './profile.css';
import { currentUser } from '../../data/mockData';

const RippleButton = withRipple('button');

const UserProfile = () => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'forum': return <MessageSquare size={18}/>;
      case 'note': return <BookOpen size={18}/>; 
      case 'print': return <Printer size={18}/>;
      default: return <MessageSquare size={18}/>;
    }
  };

  return (
    <div className="profile-container">
      
      {/* Header Card */}
      <div className="profile-header-card ripple-surface">
        <img src={currentUser.avatar} alt="Profile Vector" className="profile-avatar-large" />
        
        <div className="profile-info">
          <h1>{currentUser.name}</h1>
          
          <div className="profile-meta">
            <div className="meta-item"><Building size={16} /> {currentUser.major}</div>
            <div className="meta-item"><BookOpen size={16} /> {currentUser.semester}</div>
            <div className="meta-item"><User size={16} /> {currentUser.level}</div>
          </div>
          
          <div className="profile-stats">
            <div className="stat-box">
              <span className="count">{currentUser.stats.notesUploaded}</span>
              <span className="label">Notes Uploaded</span>
            </div>
            <div className="stat-box">
              <span className="count">{currentUser.stats.answers}</span>
              <span className="label">Answers</span>
            </div>
            <div className="stat-box">
              <span className="count">{currentUser.stats.reputation}</span>
              <span className="label">Reputation</span>
            </div>
          </div>
        </div>

        <div style={{ marginLeft: 'auto', alignSelf: 'flex-start' }}>
          <RippleButton className="btn btn-outline">
            <Edit3 size={16} /> Edit Profile
          </RippleButton>
        </div>
      </div>

      <div className="profile-grid">
        {/* About Section */}
        <div className="glass-card">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems:'center', gap: '0.5rem' }}><User size={20} className="text-primary"/> About Me</h3>
          <p className="text-muted" style={{ lineHeight: 1.6 }}>
            {currentUser.about}
          </p>
          
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Mail size={16} className="text-muted"/>
              <span style={{ fontWeight: 500 }}>{currentUser.email}</span>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems:'center', gap: '0.5rem' }}><Heart size={20} className="text-primary"/> Recent Activity</h3>
          
          {currentUser.activity.map(item => (
            <div key={item.id} className="activity-item ripple-surface">
              <div className="activity-icon">{getActivityIcon(item.type)}</div>
              <div className="activity-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default UserProfile;
