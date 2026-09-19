import React, { useState, useEffect } from 'react';

export default function PlaceMap({ onReserve }) {
  const [location, setLocation] = useState(null);
  const [places] = useState([
    { id: 1, name: '토즈 스터디룸 (유성점)', distance: '300m', availableTime: '15:00' },
    { id: 2, name: '희망 지역아동센터', distance: '800m', availableTime: '16:00' }
  ]);

  useEffect(() => {
    // 웹 브라우저/웹뷰의 GPS 권한을 통해 현재 위치를 가져옵니다.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
        },
        (error) => {
          console.error("GPS 권한 거부 또는 에러", error);
          setLocation({ lat: 36.3504, lng: 127.3845 }); // 대전 시청 기본 좌표 (Fall-back)
        }
      );
    }
  }, []);

  const handleReserve = (place) => {
    const today = new Date().toISOString().split('T')[0];
    onReserve({
      id: Date.now(),
      date: today,
      time: place.availableTime,
      title: `${place.name} 예약`,
      type: 'place'
    });
    alert(`${place.name} 예약이 캘린더에 추가되었습니다.`);
  };

  return (
    <div>
      <h3>🗺️ 주변 스터디룸 및 아동센터</h3>
      {location ? (
        <p style={{ color: 'green', fontSize: '12px' }}>📍 내 위치 확인 완료 (Lat: {location.lat.toFixed(2)}, Lng: {location.lng.toFixed(2)})</p>
      ) : (
        <p>GPS 위치를 찾는 중...</p>
      )}

      {/* 가상 지도 영역 */}
      <div style={{ height: '150px', background: '#e5e3df', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
        [지도 API 렌더링 영역]
      </div>

      <div>
        {places.map((place) => (
          <div key={place.id} style={{ background: 'white', padding: '16px', marginBottom: '8px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>{place.name}</strong>
              <div style={{ fontSize: '12px', color: '#666' }}>거리: {place.distance} | 빈 시간: {place.availableTime}</div>
            </div>
            <button onClick={() => handleReserve(place)} style={{ background: '#F5A623', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px' }}>
              예약하기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
