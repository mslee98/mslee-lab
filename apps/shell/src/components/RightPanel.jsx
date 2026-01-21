import { useState, useEffect, memo } from 'react';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';

import Loader from './common/Loader';
import AppContent from './mobile/AppContent';
import StatusBar from './mobile/StatusBar';
import IOSErrorModal from './common/IOSErrorModal';

function RightPanel({ currentApp, app, device, apps, onSelectApp }) {


  const [status, setStatus] = useState('idle');

  const isHome = !currentApp || currentApp === 'home';

  // 서버 상태 체크
  // type Status =
  // | 'idle'        // home
  // | 'checking'   // 서버 체크 중
  // | 'available'  // iframe 가능
  // | 'no-url'     // 앱은 있는데 url 없음
  // | 'down';      // 서버 다운

  useEffect(() => {
    if (isHome) {
      setStatus('idle');
      return;
    }

    if (!app?.url) {
      setStatus('no-url');
      return;
    }

    setStatus('checking');

    fetch(app.url, { method: 'HEAD' })
      .then(res => {
        setStatus(res.ok ? 'available' : 'down');
      })
      .catch(() => {
        setStatus('down');
      });
  }, [currentApp, app]);

  const renderAppContent = () => {
    if (status === 'checking') return <Loader />;

    if (status === 'available') {
      return (
        <iframe
          title={app.name}
          src={app.url}
          className="w-full h-full border-none bg-transparent"
        />
      );
    }

    // idle / no-url / down
    return <AppContent apps={apps} onSelectApp={onSelectApp} />;
  };

  return (
    <div className="flex justify-center m-0 p-0">
      <DeviceFrameset device={device} landscape={false}>
        <div
          className="
            relative
            flex flex-col
            w-full h-full
            cursor-default
            bg-cover bg-center
          "
          style={{ backgroundImage: 'url(/assets/iPhone.png)' }}
        >
          {/* StatusBar */}
          <div className="shrink-0">
            <StatusBar />
          </div>

          {/* App Area */}
          <div className="relative flex-1 flex">
            {renderAppContent()}

            {!isHome && (status === 'down' || status === 'no-url') && (
              <IOSErrorModal
                title={status === 'no-url' ? '앱 미구현' : '연결 오류'}
                message={
                  status === 'no-url'
                    ? '아직 실행 가능한 앱이 아닙니다.'
                    : '앱 서버가 실행되지 않았습니다.'
                }
                onClose={() => onSelectApp('home')}
              />
            )}
          </div>
        </div>
      </DeviceFrameset>
    </div>
  );
}

export default memo(RightPanel);
