import { memo, useCallback } from "react";

import { AppKey, AppMap, APPS } from "@configs/apps";
import { useMobile } from "@contexts/MobileContext";
import type { AppDeviceName } from "@contexts/MobileContext";

interface IDevice {
  label: string;
  value: AppDeviceName;
}

const DEVICES: readonly IDevice[] = [
  { label: "iPhone X", value: "iPhone X" },
  { label: "iPhone 8", value: "iPhone 8" },
  { label: "iPhone 8 Plus", value: "iPhone 8 Plus" },
  { label: "Galaxy Note 8", value: "Galaxy Note 8" },
];

function LeftPanel() {
  const { currentApp, currentDevice, setCurrentApp, setCurrentDevice } =
    useMobile();

  const handleSelectApp = useCallback(
    (key: AppKey) => setCurrentApp(key),
    [setCurrentApp],
  );

  const handleSelectDevice = useCallback(
    (device: AppDeviceName) => setCurrentDevice(device),
    [setCurrentDevice],
  );

  const entries = Object.entries(APPS) as [AppKey, AppMap[AppKey]][];

  return (
    <div className="flex-1">
      {/* App Menu */}
      <h2 className="text-base font-medium">Menu</h2>
      <div className="w-full mt-8 flex gap-3">
        {entries.map(([key, app]) => (
          <button
            key={key}
            type="button"
            className={`
              px-4 py-2
              rounded-lg
              border-none
              cursor-pointer
              transition-transform duration-200
              ${currentApp === key ? "bg-black text-white" : "bg-gray-200 text-black"}
              hover:scale-105
            `}
            onClick={() => handleSelectApp(key)}
          >
            {app.name}
          </button>
        ))}
      </div>

      {/* Device Selector */}
      <h2 className="mt-8 text-base font-medium">디바이스 선택</h2>

      <div className="w-full mt-2 flex flex-wrap gap-2">
        {DEVICES.map((d) => (
          <button
            key={d.value}
            type="button"
            className={`
              px-4 py-2
              rounded-lg
              border-none
              cursor-pointer
              transition-transform duration-200
              ${currentDevice === d.value ? "bg-black text-white" : "bg-gray-200 text-black"}
              hover:scale-105
            `}
            onClick={() => handleSelectDevice(d.value)}
          >
            {d.label}
          </button>
        ))}
      </div>

      <h2 className="mt-8 text-base font-medium">More Info</h2>

      <div className="w-full mt-2 flex flex-wrap gap-2">
        {/* GitHub */}
        <a
          href="https://github.com/mslee98"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-4 py-2
            rounded-lg
            bg-gray-200 text-black
            cursor-pointer
            transition-transform duration-200
            hover:scale-105
            hover:bg-gray-300
          "
        >
          GitHub
        </a>

        {/* Blog */}
        <a
          href="https://mslee98.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-4 py-2
            rounded-lg
            bg-gray-200 text-black
            cursor-pointer
            transition-transform duration-200
            hover:scale-105
            hover:bg-gray-300
          "
        >
          Blog
        </a>
      </div>
    </div>
  );
}

export default memo(LeftPanel);
