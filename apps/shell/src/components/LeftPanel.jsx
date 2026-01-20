import { memo, useCallback } from 'react';
import DeviceMenuButton from './MenuButton';


const styles = {
  left: { flex: 1, paddingTop: 80 },
  banner: { marginTop: 24, padding: 16, background: '#fff', borderRadius: 16, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' },
  menu: { marginTop: 32, display: 'flex', gap: 12 },
  button: (active) => ({
    padding: '10px 16px',
    borderRadius: 12,
    border: 'none',
    cursor: 'pointer',
    background: active ? '#000' : '#e5e7eb',
    color: active ? '#fff' : '#111',
  }),
};

const DEVICES = [
  { label: 'iPhone X', value: 'iPhone X' },
  { label: 'iPhone 8', value: 'iPhone 8' },
  { label: 'iPhone 8 Plus', value: 'iPhone 8 Plus' },
  { label: 'Galaxy Note 8', value: 'Galaxy Note 8' },
  { label: 'Nexus 5', value: 'Nexus 5' },
//   { label: 'iPad Mini', value: 'iPad Mini' },
//   { label: 'MacBook Pro', value: 'MacBook Pro' },
];

function LeftPanel({ apps, currentApp, onSelectApp, currentDevice, onSelectDevice }) {


  const handleSelectApp = useCallback((key) => {
    onSelectApp(key);
  }, [onSelectApp]);

  const handleSelectDevice = useCallback( (value) => {
    onSelectDevice(value);
  }, [onSelectDevice]);

  return (
    <div style={styles.left}>
      <h1>Ms Mobile Lab</h1>

      <div style={styles.menu}>
        {Object.entries(apps).map(([key, app]) => (
          <DeviceMenuButton
            key={key}
            value={key}
            active={currentApp === key}
            onClick={handleSelectApp}
          >
            {app.name}
          </DeviceMenuButton>
        ))}
      </div>

      <h2 style={{ marginTop: 32 }}>디바이스 선택</h2>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {DEVICES.map((d) => (
          <DeviceMenuButton
            key={d.value}
            value={d.value}
            active={currentDevice === d.value}
            onClick={handleSelectDevice}
          >
            {d.label}
          </DeviceMenuButton>
        ))}
      </div>
    </div>
  );
}

export default memo(LeftPanel);