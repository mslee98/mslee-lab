import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';
// import 'react-device-frameset/styles/device-emulator.min.css'
import IOSHome from './IOSHome';

const styles = {
  right: { display: 'flex', justifyContent: 'center', margin: 0, padding: 0 },
  iframe: { width: '100%', height: '100%', border: 'none' },
};

export default function RightPanel({ app, device }) {
  return (
    <div style={styles.right}>
      <DeviceFrameset device={device} landscape={true}>
        <div style={{ width: '100%', height: '100%', display: 'flex' }}>
          {app ? (
            <iframe src={app.url} style={styles.iframe} />
          ) : (
            <IOSHome />
          )}
        </div>
      </DeviceFrameset>
    </div>
  );
}
