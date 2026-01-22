import { useIOSBackSwipe } from './useIOSBackSwipe';
import CustomCursor from './CustomCursor';
import MainScreen from './pages/MainScreen';
// import MobileViewport from './components/common/MobileViewport';
// import { MobileDevWrapper } from './components/common/MobileDevWrapper';

import SplashScreen from './components/splash/SplashScreen';
import { useState } from 'react';

export default function KakaoBankApp() {
  useIOSBackSwipe();

  const [ready, setReady] = useState(false);

  const isDev = process.env.NODE_ENV === 'development';

  return (
    <>
      <div className='w-screen h-screen'>
        <CustomCursor />

          {!ready && <SplashScreen onFinish={() => setReady(true)} />}
          {ready && <MainScreen />}
      </div>

      {/* 해당 프로젝트를 독립적으로 실행시켜 개발이 필요한 경우 */}
      {/* <MobileDevWrapper>
        <MobileViewport>
          <CustomCursor />

          {!ready && <SplashScreen onFinish={() => setReady(true)} />}
          {ready && <MainScreen />}
        </MobileViewport>
      </MobileDevWrapper> */}
    </>
    
  )
}
