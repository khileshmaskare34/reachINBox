// src/components/Reply.js
import React, { useState } from 'react';
import axios from 'axios';

const Reply = ({ threadId }) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSend = async () => {
    try {
      await axios.post(`https://api.example.com/reply/${threadId}`, {
        from: 'email@example.com',
        to: email,
        subject,
        body: `<html>${body}</html>`,
      });
      console.log('Reply sent');
    } catch (error) {
      console.error('Error sending reply:', error);
    }
  };

  return (
    <div>
      <h2>Reply</h2>
      <input
        type="email"
        placeholder="To"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Reply;
