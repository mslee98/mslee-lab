import { memo } from 'react';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import { lazy, Suspense } from 'react';
import AppScreen from './AppScreen';
import Loader from './common/Loader';

const KakaoBankApp = lazy(() => import('kakaobank'));
const TossApp = lazy(() => import('toss'));

const styles = {
  right: { display: 'flex', justifyContent: 'center', margin: 0, padding: 0 },
  iframe: { width: '100%', height: '100%', border: 'none' },
};


function RightPanel({ currentApp, app, device, apps, onSelectApp }) {
  const renderApp = () => {
    if (!currentApp) return null;
    
    switch (currentApp) {
      case 'kakaobank':
        return <KakaoBankApp />;
      case 'toss':
        return <TossApp />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.right}>
      <DeviceFrameset device={device} landscape={false}>
        <div 
          className="screen-overlay" 
          style={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            cursor: 'default',
            backgroundImage: `url(/assets/iPhone.png)`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          {app && currentApp !== 'home' ? (
            <Suspense fallback={<Loader />}>
              {renderApp()}
            </Suspense>
          ) : (
            <AppScreen apps={apps} onSelectApp={onSelectApp} />
          )}
        </div>
      </DeviceFrameset>
    </div>
  );
}

export default memo(RightPanel);
