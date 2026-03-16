import React from 'react';
import { Printer, MessageSquare, FileText, CheckCircle, Bell, Clock } from 'lucide-react';
import withRipple from '../../components/ui/withRipple';
import './notifications.css';
import { notificationsList } from '../../data/mockData';

const RippleButton = withRipple('button');

const Notifications = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'print': return <Printer size={20} />;
      case 'forum': return <MessageSquare size={20} />;
      case 'note': return <FileText size={20} />;
      case 'skill': return <Bell size={20} />;
      default: return <Bell size={20} />;
    }
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Notifications</h1>
          <p className="page-subtitle">Stay updated on your campus activities.</p>
        </div>
        <RippleButton className="btn btn-outline">
          <CheckCircle size={16} /> Mark all as read
        </RippleButton>
      </div>

      <div className="notifications-layout">
        <div className="notifications-list">
          {notificationsList.map(notif => (
            <div key={notif.id} className={`notification-item ripple-surface ${notif.unread ? 'unread' : ''}`}>
              <div className={`notif-icon ${notif.iconClass}`}>
                {getIcon(notif.type)}
              </div>
              <div className="notif-content">
                <h4>{notif.title}</h4>
                <p>{notif.desc}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem', flexShrink: 0 }}>
                <span className="notif-time"><Clock size={12} style={{ display: 'inline', marginRight: '3px' }} />{notif.time}</span>
                {notif.unread && <div className="unread-dot" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
