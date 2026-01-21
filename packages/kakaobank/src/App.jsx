import { useIOSBackSwipe } from './useIOSBackSwipe';
import CustomCursor from './CustomCursor';
import MobileViewport from './components/common/MobileViewport';
import { MobileDevWrapper } from './components/common/MobileDevWrapper';
import SplashScreen from './components/splash/SplashScreen';
import { useState } from 'react';

export default function KakaoBankApp() {
  useIOSBackSwipe();

  const [ready, setReady] = useState(false);

  return (
    <MobileDevWrapper>
      <MobileViewport>
        <CustomCursor />

        {!ready && (
          <SplashScreen onFinish={() => setReady(true)} />
        )}

        {ready && <MainScreen />}
        <MainScreen />
      </MobileViewport>
    </MobileDevWrapper>
  );
}

function MainScreen() {
  return (
    <div className="w-full h-full bg-red-500 flex items-center justify-center">
      <span className="text-white text-4xl">Kakao Bank App</span>
    </div>
  );
}
