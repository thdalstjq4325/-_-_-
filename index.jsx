import React, { useState } from 'react';
import TutorProfile from './components/TutorProfile';
import VolunteerChat from './components/VolunteerChat';
import PlaceMap from './components/PlaceMap';
import CalendarView from './components/CalendarView';

export default function App() {
  const [activeTab, setActiveTab] = useState('tutor');
  const [schedules, setSchedules] = useState([]);

  const addSchedule = (newSchedule) => {
    setSchedules((prev) => [...prev, newSchedule]);
  };

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', border: '1px solid #ddd', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '16px', background: '#4A90E2', color: 'white', textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>
        과외 & 멘토링 매칭 앱
      </header>

      <main style={{ flex: 1, overflowY: 'auto', padding: '16px', background: '#f9f9f9' }}>
        {activeTab === 'tutor' && <TutorProfile />}
        {activeTab === 'chat' && <VolunteerChat onConfirm={addSchedule} />}
        {activeTab === 'map' && <PlaceMap onReserve={addSchedule} />}
        {activeTab === 'calendar' && <CalendarView schedules={schedules} />}
      </main>

      <nav style={{ display: 'flex', borderTop: '1px solid #ddd', background: 'white' }}>
        {['tutor', 'chat', 'map', 'calendar'].map((tab) => (
          <button 
            key={tab} 
            onClick={() => setActiveTab(tab)}
            style={{ flex: 1, padding: '16px 0', border: 'none', background: activeTab === tab ? '#e0f0ff' : 'white', cursor: 'pointer' }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </nav>
    </div>
  );
}
