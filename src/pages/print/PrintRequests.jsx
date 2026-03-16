import React, { useState } from 'react';
import { Upload, Printer, File, Settings, AlertCircle, CheckCircle } from 'lucide-react';
import withRipple from '../../components/ui/withRipple';
import './print.css';

const RippleButton = withRipple('button');

const PrintRequests = () => {
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0].name);
    }
  };

  const handleSubmitJob = () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setFile(null);
      }, 3000);
    }, 1500);
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Campus Print Hub</h1>
          <p className="page-subtitle">Upload documents and send them directly to campus printers.</p>
        </div>
      </div>

      <div className="print-layout">
        
        {/* Upload Section */}
        <div className="glass-card">
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Upload size={20} className="text-primary"/> 1. Upload Document
          </h3>
          
          <div 
            className="upload-dropzone ripple-surface"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <Upload size={48} className="text-muted" style={{ marginBottom: '1rem' }} />
            <h4 style={{ marginBottom: '0.5rem' }}>Drag & drop your file here</h4>
            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>Supports PDF, DOCX, PPTX (Max 25MB)</p>
            <RippleButton className="btn btn-outline" onClick={() => document.getElementById('file-upload').click()}>
              Browse Files
            </RippleButton>
            <input type="file" id="file-upload" style={{ display: 'none' }} onChange={(e) => e.target.files[0] && setFile(e.target.files[0].name)} />
            {file && <div className="mt-4 text-primary font-medium flex items-center gap-2 justify-center"><File size={16}/> {file}</div>}
          </div>
        </div>

        {/* Settings Section */}
        <div className="glass-card">
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Settings size={20} className="text-primary"/> 2. Print Settings
          </h3>
          
          <div className="form-group">
            <label className="form-label">Select Printer Location</label>
            <select className="form-input">
              <option>Library Main Floor (Black & White)</option>
              <option>Library 2nd Floor (Color)</option>
              <option>CS Building RM 201 (B&W)</option>
              <option>Student Union Building (Color)</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Copies</label>
              <input type="number" className="form-input" defaultValue={1} min={1} max={50} />
            </div>
            <div className="form-group">
              <label className="form-label">Color Mode</label>
              <select className="form-input">
                <option>Black & White</option>
                <option>Grayscale</option>
                <option>Color</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Pages</label>
              <select className="form-input">
                <option>All Pages</option>
                <option>Custom Range</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Sided</label>
              <select className="form-input">
                <option>Double Sided</option>
                <option>Single Sided</option>
              </select>
            </div>
          </div>

          <div className="print-summary">
            <h4 style={{ marginBottom: '0.5rem' }}>Estimated Cost</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <span className="text-muted">15 Pages • B&W • 1 Copy</span>
              <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>$1.50</span>
            </div>
          </div>

          <RippleButton 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', opacity: (!file || isSubmitting) ? 0.7 : 1 }} 
            onClick={handleSubmitJob}
            disabled={!file || isSubmitting}
          >
            {isSubmitting ? (
              'Processing...'
            ) : showSuccess ? (
              <><CheckCircle size={20} /> Job Sent to Printer</>
            ) : (
              <><Printer size={20} /> Submit Print Job</>
            )}
          </RippleButton>
        </div>
      </div>
    </div>
  );
};

export default PrintRequests;
