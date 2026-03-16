import React, { useState } from 'react';
import { Search, Filter, Download, Star, FileText } from 'lucide-react';
import withRipple from '../../components/ui/withRipple';
import './notes.css';
import { allNotesList } from '../../data/mockData';

const RippleButton = withRipple('button');

const NotesList = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [notes, setNotes] = useState(allNotesList);
  const [showModal, setShowModal] = useState(false);
  const [newNote, setNewNote] = useState({ title: '', subject: 'Computer Science', semester: '1' });

  const handleUpload = (e) => {
    e.preventDefault();
    if (!newNote.title) return;
    
    const noteEntry = {
      id: Date.now(),
      title: newNote.title,
      author: 'V Sing', // Current logged in user
      subject: newNote.subject,
      semester: newNote.semester,
      rating: 0,
      downloads: 0,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    };

    setNotes([noteEntry, ...notes]);
    setShowModal(false);
    setNewNote({ title: '', subject: 'Computer Science', semester: '1' });
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Campus Notes</h1>
          <p className="page-subtitle">Discover and share study materials.</p>
        </div>
        <RippleButton className="btn btn-primary" onClick={() => setShowModal(true)}>
          Upload Note
        </RippleButton>
      </div>

      <div className="filters-bar">
        <div className="search-wrapper">
          <Search size={18} />
          <input type="text" placeholder="Search notes by title, subject, or author..." />
        </div>
        <select className="filter-select">
          <option>All Subjects</option>
          <option>Computer Science</option>
          <option>Mechanical Eng</option>
          <option>Mathematics</option>
        </select>
        <select className="filter-select">
          <option>All Semesters</option>
          <option>Semester 1-2</option>
          <option>Semester 3-4</option>
          <option>Semester 5-6</option>
        </select>
      </div>

      <div className="notes-grid">
        {notes.map(note => (
          <div key={note.id} className="note-card ripple-surface">
            <div className="note-header">
              <div className="note-icon"><FileText size={24} /></div>
              <div className="note-rating"><Star size={14} fill="currentColor"/> {note.rating}</div>
            </div>
            
            <h3 className="note-title">{note.title}</h3>
            <p className="note-desc">Uploaded by {note.author} • {note.date}</p>
            
            <div className="note-meta">
              <span>{note.subject} (Sem {note.semester})</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Download size={14} /> {note.downloads}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="glass-card" style={{ width: '100%', maxWidth: '500px', padding: '2rem', background: 'var(--bg-card)' }}>
            <h2 style={{ marginTop: 0, marginBottom: '1.5rem', color: 'var(--text-main)' }}>Upload New Note</h2>
            <form onSubmit={handleUpload}>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Note Title</label>
                <input required type="text" className="form-input" value={newNote.title} onChange={e => setNewNote({...newNote, title: e.target.value})} placeholder="e.g. Chapter 4 Summary" />
              </div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label className="form-label">Subject</label>
                <select className="form-input" value={newNote.subject} onChange={e => setNewNote({...newNote, subject: e.target.value})}>
                  <option>Computer Science</option>
                  <option>Mechanical Eng</option>
                  <option>Mathematics</option>
                  <option>Business</option>
                  <option>Chemistry</option>
                </select>
              </div>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label">Semester</label>
                <select className="form-input" value={newNote.semester} onChange={e => setNewNote({...newNote, semester: e.target.value})}>
                  <option value="1">Semester 1</option>
                  <option value="2">Semester 2</option>
                  <option value="3">Semester 3</option>
                  <option value="4">Semester 4</option>
                  <option value="5">Semester 5</option>
                  <option value="6">Semester 6</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <RippleButton type="button" className="btn btn-outline" onClick={() => setShowModal(false)}>Cancel</RippleButton>
                <RippleButton type="submit" className="btn btn-primary">Upload</RippleButton>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesList;
