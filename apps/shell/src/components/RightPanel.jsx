import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
import { lazy, Suspense } from 'react';
import IOSHome from './IOSHome';

const KakaoBankApp = lazy(() => import('kakaobank'));
const TossApp = lazy(() => import('toss'));

const styles = {
  right: { display: 'flex', justifyContent: 'center', margin: 0, padding: 0 },
  iframe: { width: '100%', height: '100%', border: 'none' },
};

export default function RightPanel({ currentApp, app, device, apps, onSelectApp }) {
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
        <div style={{ width: '100%', height: '100%', display: 'flex', cursor: 'default' }}>
          {app ? (
            <Suspense fallback={<div>Loading...</div>}>
              {renderApp()}
            </Suspense>
          ) : (
            <IOSHome apps={apps} onSelectApp={onSelectApp} />
          )}
        </div>
      </DeviceFrameset>
    </div>
  );
}
