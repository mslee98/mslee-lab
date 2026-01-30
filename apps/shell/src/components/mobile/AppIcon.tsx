import type { AppConfig, AppKey } from "@configs/apps";
import { useMobile } from "@contexts/MobileContext";
import { memo } from "react";

interface AppIconProps {
  appKey: AppKey; // string으로 받기엔 쫌 그러네
  app: AppConfig;
}

const AppIcon = memo(function AppIcon({ appKey, app }: AppIconProps) {
  const { setCurrentApp } = useMobile();

  return (
    <div
      onClick={() => setCurrentApp(appKey)}
      className="
        flex flex-col items-center gap-1
        cursor-pointer
        transition-transform duration-200
        hover:scale-110
      "
    >
      <img
        src={app.icon}
        alt={app.name}
        className="w-[60px] h-[60px] rounded-xl"
      />
      <span className="text-xs text-center text-white">{app.name}</span>
    </div>
  );
});

export default AppIcon;
