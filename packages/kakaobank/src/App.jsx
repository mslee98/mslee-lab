import CustomCursor from './CustomCursor';
import Home from '@pages/Home'
import Layout from '@components/layouts/Layout';
// import MobileViewport from './components/common/MobileViewport';
// import { MobileDevWrapper } from './components/common/MobileDevWrapper';

import SplashScreen from './components/splash/SplashScreen';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Event1 from '@pages/ScrollEvent';
import Event2 from '@pages/Event2';

export default function KakaoBankApp() {

  const [ready, setReady] = useState(true);

  const isDev = process.env.NODE_ENV === 'development';
  // isDev를 누르면 픽셀별로 화면 선택할 수 있는 기능을 만들어야하 듯?

  return (
    <>
      <Router>
      <div className='w-screen h-screen'>
        <CustomCursor />

        {ready ? (
          <Routes>

            <Route element={<Layout/>}>
              <Route path="/" element={<Home />} />
              <Route path="/event1" element={<Event1 />} />
              <Route path="/event2" element={<Event2 />} />
            </Route>
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
