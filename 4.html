import React, { useState } from 'react';

export default function CalendarView({ schedules }) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // 선택한 날짜에 해당하는 일정만 필터링
  const dailySchedules = schedules.filter(s => s.date === selectedDate);

  // 알림 점(Dot)을 표시하기 위해 일정이 있는 고유 날짜 추출
  const datesWithEvents = [...new Set(schedules.map(s => s.date))];

  return (
    <div>
      <h3>📅 내 일정 캘린더</h3>
      
      {/* 간이 달력 UI (최근 5일 렌더링) */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', overflowX: 'auto' }}>
        {Array.from({ length: 5 }).map((_, i) => {
          const d = new Date();
          d.setDate(d.getDate() + i);
          const dateString = d.toISOString().split('T')[0];
          const hasEvent = datesWithEvents.includes(dateString);

          return (
            <div 
              key={dateString} 
              onClick={() => setSelectedDate(dateString)}
              style={{ 
                minWidth: '60px', padding: '10px', textAlign: 'center', borderRadius: '8px', cursor: 'pointer',
                background: selectedDate === dateString ? '#4A90E2' : 'white',
                color: selectedDate === dateString ? 'white' : 'black',
                border: '1px solid #ddd'
              }}
            >
              <div>{d.getDate()}일</div>
              {hasEvent && <div style={{ width: '6px', height: '6px', background: 'red', borderRadius: '50%', margin: '4px auto 0' }} />}
            </div>
          );
        })}
      </div>

      <h4>⏰ {selectedDate} 시간표</h4>
      <div style={{ background: 'white', borderRadius: '8px', padding: '10px', border: '1px solid #ddd' }}>
        {dailySchedules.length === 0 ? (
          <p style={{ color: '#999', textAlign: 'center' }}>이 날은 일정이 없습니다.</p>
        ) : (
          dailySchedules.sort((a, b) => a.time.localeCompare(b.time)).map((schedule) => (
            <div key={schedule.id} style={{ display: 'flex', padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <strong style={{ width: '60px', color: '#4A90E2' }}>{schedule.time}</strong>
              <div>
                <div style={{ fontWeight: 'bold' }}>{schedule.title}</div>
                <span style={{ fontSize: '12px', background: '#f0f0f0', padding: '2px 6px', borderRadius: '4px' }}>
                  {schedule.type === 'volunteer' ? '멘토링' : '장소대여'}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
