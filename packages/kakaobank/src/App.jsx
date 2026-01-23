import CustomCursor from './CustomCursor';
import MainScreen from './pages/MainScreen';
// import MobileViewport from './components/common/MobileViewport';
// import { MobileDevWrapper } from './components/common/MobileDevWrapper';

import SplashScreen from './components/splash/SplashScreen';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Event1 from './pages/Event1';

export default function KakaoBankApp() {

  const [ready, setReady] = useState(false);

  const isDev = process.env.NODE_ENV === 'development';

  return (
    <>
      <Router>
      <div className='w-screen h-screen'>
        <CustomCursor />

        {ready ? (
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/event1" element={<Event1 />} />
            {/* 다른 페이지도 여기에 추가 */}
          </Routes>
        ) : (
          <SplashScreen onFinish={() => setReady(true)} />
        )}
      </div>

      {/* 해당 프로젝트를 독립적으로 실행시켜 개발이 필요한 경우 */}
      {/* <MobileDevWrapper>
        <MobileViewport>
          <CustomCursor />

          {!ready && <SplashScreen onFinish={() => setReady(true)} />}
          {ready && <MainScreen />}
        </MobileViewport>
      </MobileDevWrapper> */}
      </Router>
    </>
    
  )
}
