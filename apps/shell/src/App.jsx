import { useState } from 'react';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

import kakaobank from './assets/appLogo/kakaobank_icon.webp';
import toss from './assets/appLogo/toss_icon.webp';
import github from './assets/appLogo/github_icon.webp';

const APPS = {
  home: { name: 'Home', url: null, icon: null, dark: true },
  kakaobank: { name: '카카오뱅크', icon: kakaobank, url: __KAKAOBANK_URL__, dark: false},
  toss: { name: '토스',icon: toss, url: __TOSS_URL__ },
  github: { name: '깃허브',icon: github, url: 'https://github.com/mslee98', external: true },
};

console.log("APPS",APPS)

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
