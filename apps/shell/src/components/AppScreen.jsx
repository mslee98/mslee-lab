import AppContent from "./mobile/AppContent";
import StatusBar from "./mobile/StatusBar";

export default function AppScreen({ apps = {}, onSelectApp }) {
  // 'home'은 앱 목록에서 제외하고, icon이 있는 앱만 표시
  const appEntries = Object.entries(apps).filter(([key, app]) => key !== 'home' && app.icon);
  
  // 그리드 컨테이너 스타일 (아이폰 홈 화면처럼 4열 그리드)
  const gridStyle = {
    position: 'absolute',
    top: '60px', // 상단 여백
    left: '20px',
    right: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4열 그리드
    gap: '20px', // 아이콘 간 간격
    padding: '0 10px',
  };

  // 앱 아이콘 스타일
  const appIconStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {/* 헤더 */}
      <StatusBar/>

      {/* 앱 아이콘 그리드 => 컨테이너(앱 컨텐츠 영역)*/}
      <AppContent apps={apps} onSelectApp={onSelectApp}/>
    </div>
  );
}
