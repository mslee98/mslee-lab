import { useState,  } from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

const APPS = {
  home: { name: 'Home', url: null, icon: null },
  kakaobank: { name: '카카오뱅크', icon: '/assets/kakaobank_logo.jpeg' },
  toss: { name: '토스',icon: '/assets/Toss_App_Icon.png' },
};

const styles = {
  page: { minHeight: '100vh', background: '#f7f8fa', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  container: { width: 1200, display: 'flex', gap: 80 },
};

export default function App() {
  const [currentApp, setCurrentApp] = useState('home'); // 앱 선택
  const [currentDevice, setCurrentDevice] = useState('iPhone X'); // 디바이스 선택

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <LeftPanel 
          apps={APPS} 
          currentApp={currentApp}          // 현재 선택된 앱 전달
          onSelectApp={setCurrentApp}      // 앱 선택 콜백 전달
          currentDevice={currentDevice} 
          onSelectDevice={setCurrentDevice}
        />
        <RightPanel currentApp={currentApp} app={currentApp ? APPS[currentApp] : null} device={currentDevice} apps={APPS} onSelectApp={setCurrentApp}/>
      </div>
    </div>
  );
}
