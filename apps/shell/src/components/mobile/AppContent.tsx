import AppIcon from "./AppIcon";

import { APPS } from "@configs/apps";
import type { AppConfig, AppKey } from "@configs/apps";

export default function AppContent() {
  // const appEntries = Object.entries(APPS);

  const appEntries = Object.entries(APPS).filter(([key]) => key !== "home") as [
    AppKey,
    AppConfig,
  ][];

  return (
    <div className="absolute top-[60px] left-5 right-5">
      <div className="grid grid-cols-4 gap-5 px-[10px]">
        {appEntries.map(([key, app]) => (
          <AppIcon key={key} appKey={key} app={app} />
        ))}
      </div>
    </div>
  );
}
