import React, { useState } from 'react';
import { MessageSquare, ArrowUp, ArrowDown, User, Tag, Clock, Share2, AlertCircle } from 'lucide-react';
import withRipple from '../../components/ui/withRipple';
import './forum.css';
import { forumQuestionsList } from '../../data/mockData';

const RippleButton = withRipple('button');

const QuestionFeed = () => {
  const [questions, setQuestions] = useState(forumQuestionsList);

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Q&A Forum</h1>
          <p className="page-subtitle">Ask questions, share answers, and learn together.</p>
        </div>
        <RippleButton className="btn btn-primary">
          <MessageSquare size={18} /> Ask a Question
        </RippleButton>
      </div>

      <div className="forum-layout">
        
        {/* Main Feed */}
        <div className="forum-feed">
          
          {/* Quick Ask Box */}
          <div className="ask-box ripple-surface">
            <textarea placeholder="Ask your academic question here..."></textarea>
            <div className="ask-actions">
              <div className="tag-input">
                <Tag size={16} className="text-muted" />
                <input type="text" placeholder="Add tags (e.g., #CS301)" />
              </div>
              <RippleButton className="btn btn-primary" style={{ padding: '0.4rem 1rem' }}>
                Post Question
              </RippleButton>
            </div>
          </div>

          {/* Question List */}
          <div className="question-list">
            {questions.map((q) => (
              <div key={q.id} className="question-card">
                {/* Voting Column */}
                <div className="vote-col">
                  <RippleButton className="vote-btn" title="Upvote"><ArrowUp size={24} /></RippleButton>
                  <span className="vote-count">{q.votes}</span>
                  <RippleButton className="vote-btn" title="Downvote"><ArrowDown size={24} /></RippleButton>
                </div>

                {/* Content Column */}
                <div className="q-content">
                  <div className="flex justify-between items-start mb-2">
                    <div className="q-author">
                      <img src={q.avatar} alt={q.author} />
                      <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{q.author}</span>
                      <span className="text-muted" style={{ fontSize: '0.85rem' }}>in {q.department}</span>
                    </div>
                    <div className="q-tags">
                      {q.tags.map(t => <span key={t} className="badge" style={{ background: 'var(--bg-input)', color: 'var(--text-muted)' }}>{t}</span>)}
                    </div>
                  </div>

                  <h3 className="q-title">{q.title}</h3>
                  <p className="q-desc">{q.content}</p>

                  <div className="q-footer">
                    <div className="q-stats">
                      <div className="q-stat"><MessageSquare size={16} /> {q.answers} Answers</div>
                      <div className="q-stat"><Clock size={16} /> {q.time}</div>
                      {q.hasAcceptedAnswer && (
                        <div className="answered-status">✔ Verified Solution</div>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <RippleButton className="btn btn-outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem' }}><Share2 size={14} /> Share</RippleButton>
                      <RippleButton className="btn btn-outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem', border: 'none', color: 'var(--text-muted)' }}><AlertCircle size={14} /> Report</RippleButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Space (Optional Filters) */}
        <div className="forum-sidebar">
          {/* Add forum specific filters here if needed */}
        </div>

      </div>
    </div>
  );
};

export default QuestionFeed;
