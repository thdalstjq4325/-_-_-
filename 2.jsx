import React, { useState } from 'react';

export default function VolunteerChat({ onConfirm }) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [messages, setMessages] = useState([
    { sender: '학생A', text: '이번 주말에 수학 멘토링 가능하신 분 있나요?' },
    { sender: '대학생봉사자', text: '제가 토요일 오후 2시에 가능합니다!' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMessages([...messages, { sender: '나', text: inputText }]);
    setInputText('');
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
    // 내일 날짜로 캘린더에 일정 추가
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    onConfirm({
      id: Date.now(),
      date: tomorrow.toISOString().split('T')[0],
      time: '14:00',
      title: '수학 교육봉사 멘토링',
      type: 'volunteer'
    });
    alert('일정이 확정되어 캘린더에 추가되었습니다!');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h3>📢 대학생 멘토링 자율 채팅방</h3>
        <button 
          onClick={handleConfirm} 
          disabled={isConfirmed}
          style={{ padding: '8px 16px', background: isConfirmed ? '#ccc' : '#E24A4A', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          {isConfirmed ? '확정 완료(채팅 닫힘)' : '수업 확정하기'}
        </button>
      </div>

      <div style={{ flex: 1, background: '#fff', border: '1px solid #ddd', padding: '10px', overflowY: 'auto', opacity: isConfirmed ? 0.6 : 1 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: '8px', textAlign: msg.sender === '나' ? 'right' : 'left' }}>
            <strong>{msg.sender}: </strong> {msg.text}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', marginTop: '10px' }}>
        <input 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)}
          disabled={isConfirmed}
          style={{ flex: 1, padding: '10px' }} 
          placeholder={isConfirmed ? "확정된 채팅방입니다." : "메시지 입력..."}
        />
        <button onClick={handleSend} disabled={isConfirmed} style={{ padding: '10px', background: '#4A90E2', color: 'white', border: 'none' }}>전송</button>
      </div>
    </div>
  );
}
