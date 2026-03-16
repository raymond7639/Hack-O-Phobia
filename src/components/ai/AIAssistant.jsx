import React, { useState, useEffect, useRef } from 'react';
import { X, Send, KeyRound } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './ai-assistant.css';

const SYSTEM_PROMPT = `
You are the UniHub Academic Assistant, a friendly and extremely knowledgeable AI mentor specifically designed to help university students. 
Your expertise includes Computer Science, Algorithms, Data Structures, Web Development, and college survival tips.
Always be encouraging, concise, and format your answers in clean markup if code is required. 
If asked about things completely unrelated to academics or university life, gently steer the conversation back.
`;

const AIAssistant = () => {
  const envKey = import.meta.env.VITE_GEMINI_API_KEY || '';
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState(localStorage.getItem('gemini_api_key') || envKey);
  const [isKeyValid, setIsKeyValid] = useState(!!localStorage.getItem('gemini_api_key') || !!envKey);
  
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi! 👋 I\'m your UniHub Assistant. Ask me anything about your studies!' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); };
  useEffect(() => { scrollToBottom() }, [messages, isTyping]);

  const handleSaveKey = (e) => {
    e.preventDefault();
    if (apiKey.trim().length > 10) {
      localStorage.setItem('gemini_api_key', apiKey.trim());
      setIsKeyValid(true);
    }
  };

  const handleClearKey = () => {
    localStorage.removeItem('gemini_api_key');
    setApiKey('');
    setIsKeyValid(false);
    setMessages([{ role: 'assistant', text: 'API Key removed. Please provide a new key to continue.' }]);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputVal.trim() || !isKeyValid) return;

    const userText = inputVal.trim();
    setInputVal('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsTyping(true);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: SYSTEM_PROMPT });
      const chatHistory = messages.slice(1).map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));
      const chat = model.startChat({ history: chatHistory });
      const result = await chat.sendMessage(userText);
      const text = result.response.text();
      setMessages(prev => [...prev, { role: 'assistant', text }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Sorry, I couldn't connect to Gemini. Please check your API key." }]);
      setIsKeyValid(false);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Glowing Orb FAB */}
      {!isOpen && (
        <button className="ai-launcher" onClick={() => setIsOpen(true)} title="Open UniHub AI Assistant" />
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="ai-chat-window">
          {/* Header */}
          <div className="ai-header">
            <div className="ai-header-title">
              <div className="ai-orb-mini" />
              <div className="ai-header-info">
                <span className="ai-title">UniHub AI</span>
                <span className="ai-status">
                  <span className="ai-status-dot" />
                  Online & ready
                </span>
              </div>
            </div>
            <div className="ai-header-actions">
              {isKeyValid && (
                <button onClick={handleClearKey} className="ai-close-btn" title="Reset API Key" style={{ width: 'auto', padding: '0 0.5rem', fontSize: '0.7rem' }}>
                  Reset Key
                </button>
              )}
              <button className="ai-close-btn" onClick={() => setIsOpen(false)}>
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Setup / Chat */}
          {!isKeyValid ? (
            <div className="ai-setup-state">
              <div className="ai-orb-big" />
              <h3>Your Smart Assistant</h3>
              <p>To activate UniHub AI, provide your Gemini API key. It's stored securely in your browser only.</p>
              <form onSubmit={handleSaveKey} style={{ width: '100%' }}>
                <input
                  type="password"
                  className="form-input"
                  placeholder="Paste your Gemini API key..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  required
                  style={{ marginBottom: '0.75rem' }}
                />
                <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '44px' }}>
                  Connect Assistant
                </button>
              </form>
            </div>
          ) : (
            <>
              <div className="ai-messages">
                {messages.map((msg, i) => (
                  <div key={i} className={`ai-msg ai-msg-${msg.role}`}>
                    {msg.text}
                  </div>
                ))}
                {isTyping && (
                  <div className="ai-msg ai-msg-assistant">
                    <div className="ai-typing-indicator">
                      <div className="ai-dot" />
                      <div className="ai-dot" />
                      <div className="ai-dot" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="ai-input-wrapper">
                <form className="ai-input-form" onSubmit={sendMessage}>
                  <input
                    type="text"
                    placeholder="Ask anything about your studies..."
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                  />
                  <button type="submit" className="ai-send-btn" disabled={!inputVal.trim() || isTyping}>
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AIAssistant;
