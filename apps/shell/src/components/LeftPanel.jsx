import { memo, useCallback } from 'react';
import DeviceMenuButton from './MenuButton';

const DEVICES = [
  { label: 'iPhone X', value: 'iPhone X' },
  { label: 'iPhone 8', value: 'iPhone 8' },
  { label: 'iPhone 8 Plus', value: 'iPhone 8 Plus' },
  { label: 'Galaxy Note 8', value: 'Galaxy Note 8' },
];

function LeftPanel({
  apps,
  currentApp,
  onSelectApp,
  currentDevice,
  onSelectDevice,
}) {
  const handleSelectApp = useCallback(
    (key) => onSelectApp(key),
    [onSelectApp]
  );

  const handleSelectDevice = useCallback(
    (value) => onSelectDevice(value),
    [onSelectDevice]
  );

  return (
    <div className="flex-1 pt-20">
      <h1 className="text-lg font-semibold">Ms Mobile Lab</h1>

      {/* App Menu */}
      <div className="mt-8 flex gap-3">
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

      {/* Device Selector */}
      <h2 className="mt-8 text-base font-medium">디바이스 선택</h2>
      <div className="mt-2 flex flex-wrap gap-2">
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
