import { useState } from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

const APPS = {
  home: { name: 'Home', url: null, icon: null },
  kakaobank: { name: '카카오뱅크', icon: '/assets/appLogo/kakaobank_logo.jpeg', url: __KAKAOBANK_URL__ },
  toss: { name: '토스',icon: '/assets/appLogo/Toss_App_Icon.png', url: __TOSS_URL__ },
  github: { name: '깃허브',icon: '/assets/appLogo/github_logo.png', url: 'https://github.com/mslee98', external: true },
};

const styles = {
  page: { minHeight: '100vh', background: '#f7f8fa', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  container: { width: 1200, display: 'flex', gap: 80 },
};

export default function App() {
  const [currentApp, setCurrentApp] = useState('home');
  const [currentDevice, setCurrentDevice] = useState('iPhone X');

  return (
    <div className="min-h-screen bg-[#f7f8fa] flex justify-center align-center">
      <div className="flex w-full max-w-[1200px] gap-20 px-8 ">
        
        {/* LEFT – 고정 폭 */}
        <div className="w-[360px] shrink-0">
          <LeftPanel
            apps={APPS}
            currentApp={currentApp}
            onSelectApp={setCurrentApp}
            currentDevice={currentDevice}
            onSelectDevice={setCurrentDevice}
          />
        </div>

        {/* RIGHT – 가변 */}
        <div className="flex-1 flex justify-center items-center">
          <RightPanel
            currentApp={currentApp}
            app={currentApp ? APPS[currentApp] : null}
            device={currentDevice}
            apps={APPS}
            onSelectApp={setCurrentApp}
          />
        </div>

      </div>
    </div>
  );
}
