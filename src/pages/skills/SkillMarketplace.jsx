import React, { useState } from 'react';
import { Plus, Search, PlusCircle } from 'lucide-react';
import withRipple from '../../components/ui/withRipple';
import './skills.css';
import { marketplaceSkillsList } from '../../data/mockData';

const RippleButton = withRipple('button');

const SkillMarketplace = () => {
  const [activeTab, setActiveTab] = useState('offer');
  const [skills, setSkills] = useState(marketplaceSkillsList);
  const [showModal, setShowModal] = useState(false);
  const [newSkill, setNewSkill] = useState({ type: 'offer', title: '', details: '', tags: '' });

  const handlePostSkill = (e) => {
    e.preventDefault();
    if (!newSkill.title) return;

    const skillEntry = {
      id: Date.now(),
      type: newSkill.type,
      title: newSkill.title,
      owner: 'V Sing', // Logged in user
      avatar: 'https://ui-avatars.com/api/?name=V+Sing&background=6A68DF&color=fff',
      tags: newSkill.tags.split(',').map(t => t.trim()).filter(t => t),
      details: newSkill.details
    };

    setSkills([skillEntry, ...skills]);
    setShowModal(false);
    setNewSkill({ type: 'offer', title: '', details: '', tags: '' });
    setActiveTab(newSkill.type); // Switch to the tab where they just posted
  };

  const displaySkills = skills.filter(s => s.type === activeTab);

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Skill Exchange</h1>
          <p className="page-subtitle">Trade knowledge with fellow students.</p>
        </div>
        <RippleButton className="btn btn-primary" onClick={() => setShowModal(true)}>
          <Plus size={18} /> Post a Skill
        </RippleButton>
      </div>

      <div className="skills-layout">
        
        {/* Tabs */}
        <div className="skills-tabs">
          <button
            className={`tab-btn ${activeTab === 'offer' ? 'active' : ''}`}
            onClick={() => setActiveTab('offer')}
          >
            Skills Offered
          </button>
          <button
            className={`tab-btn ${activeTab === 'request' ? 'active' : ''}`}
            onClick={() => setActiveTab('request')}
          >
            Skills Requested
          </button>
        </div>

        {/* Search */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'var(--bg-card)', border: '1.5px solid var(--border)', padding: '0.6rem 1rem', borderRadius: 'var(--radius-full)', maxWidth: '400px' }}>
            <Search size={18} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            <input type="text" placeholder="Search skills..." style={{ background: 'transparent', border: 'none', outline: 'none', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '0.875rem', color: 'var(--text-main)', padding: 0 }} />
          </div>
        </div>

        {/* Grid */}
        <div className="skills-grid">
          {displaySkills.map(skill => (
            <div key={skill.id} className="skill-card ripple-surface">
              <div className="skill-card-header">
                <img src={skill.avatar} alt={skill.owner} className="skill-avatar" />
                <div>
                  <div className="skill-name">{skill.owner}</div>
                  <span className="badge" style={{ background: skill.type === 'offer' ? 'rgba(74,222,128,0.12)' : 'rgba(239,68,68,0.1)', color: skill.type === 'offer' ? '#16a34a' : '#ef4444', fontSize: '0.68rem' }}>
                    {skill.type === 'offer' ? '✓ Offering' : '? Requesting'}
                  </span>
                </div>
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.details}</p>
              <div className="skill-tags">
                {skill.tags.map(tag => (
                  <span key={tag} className="skill-tag-sm">{tag}</span>
                ))}
              </div>
              <div className="skill-footer">
                <RippleButton className="btn btn-primary" style={{ height: '38px', fontSize: '0.83rem' }}>
                  {skill.type === 'offer' ? 'Book Session' : 'Offer Help'}
                </RippleButton>
              </div>
            </div>
          ))}

          {displaySkills.length === 0 && (
           <p style={{ color: 'var(--text-muted)', gridColumn: '1/-1', textAlign: 'center', padding: '3rem' }}>
             No skills currently listed here.
           </p>
          )}
        </div>
      </div>

      {/* Post Skill Modal */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '500px', padding: '2rem', background: 'var(--bg-card)' }}>
            <h2 style={{ marginTop: 0, marginBottom: '1.5rem', color: 'var(--text-main)' }}>Post to Skill Exchange</h2>
            <form onSubmit={handlePostSkill}>
              
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Post Type</label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)' }}>
                    <input type="radio" name="skillType" value="offer" checked={newSkill.type === 'offer'} onChange={() => setNewSkill({...newSkill, type: 'offer'})} />
                    I am offering help
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)' }}>
                    <input type="radio" name="skillType" value="request" checked={newSkill.type === 'request'} onChange={() => setNewSkill({...newSkill, type: 'request'})} />
                    I am requesting help
                  </label>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Headline</label>
                <input required type="text" className="form-input" value={newSkill.title} onChange={e => setNewSkill({...newSkill, title: e.target.value})} placeholder={newSkill.type === 'offer' ? "e.g. I will tutor you in Physics" : "e.g. Need help with essay writing"} />
              </div>
              
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Details & Availability</label>
                <textarea required className="form-input" rows="3" value={newSkill.details} onChange={e => setNewSkill({...newSkill, details: e.target.value})} placeholder="Provide more specific information..."></textarea>
              </div>

              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label">Tags (comma separated)</label>
                <input type="text" className="form-input" value={newSkill.tags} onChange={e => setNewSkill({...newSkill, tags: e.target.value})} placeholder="e.g. Math, Python, Design" />
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <RippleButton type="button" className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</RippleButton>
                <RippleButton type="submit" className="btn btn-primary">Post to Marketplace</RippleButton>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillMarketplace;
