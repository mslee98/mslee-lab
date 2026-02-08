import { memo, useEffect, useState } from "react";

// import batteryWhite from "@/assets/battery-white.png";
// import batteryDark from "@/assets/battery-dark.png";

import rightOptionDark from "@/assets/Right-option-dark.png";
import rightOptionWhite from "@/assets/Right-option-white.png";

interface StatusBarProps {
  /** 다크 모드 여부 */
  isDark: boolean;
}

function StatusBar({ isDark }: StatusBarProps) {
  const [time, setTime] = useState<string>(getTime());

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(getTime());
    }, 60 * 1000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className={`
        absolute top-2 left-0 w-full h-6
        flex items-center justify-between
        ${isDark ? "text-white" : "text-black"}
        text-[15px]
        font-medium
        pointer-events-none
        font-[-apple-system,BlinkMacSystemFont,sans-serif]
      `}
    >
      {/* Left: Time */}
      <div className="pl-[calc(28px+env(safe-area-inset-left))]">{time}</div>

      {/* Right: Battery */}
      <div className="pr-[calc(28px+env(safe-area-inset-right))]">
        <img
          src={isDark ? rightOptionWhite : rightOptionDark}
          alt="battery"
          className=""
          draggable={false}
        />
      </div>
    </div>
  );
}

export default memo(StatusBar);

/* ================= utils ================= */

function getTime(): string {
  const now = new Date();
  return now.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}
