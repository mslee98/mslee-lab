import { memo, useEffect, useState } from 'react';
import batteryWhite from '../../assets/battery-white.png';
import batteryDark from '../../assets/battery-dark.png';

function StatusBar({isDark}) {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTime());
    }, 60 * 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`
        absolute top-2 left-0 w-full h-6
        flex items-center justify-between
        ${isDark ? 'text-white' : 'text-black'}
        text-[15px] 
        font-medium
        pointer-events-none
        font-[-apple-system,BlinkMacSystemFont,sans-serif]
      `}
    >
      {/* Left: Time */}
      <div className="pl-[calc(28px+env(safe-area-inset-left))]">
        {time}
      </div>

      {/* Right: Battery */}
      <div className="pr-[calc(28px+env(safe-area-inset-right))]">
        <img src={isDark ? batteryWhite : batteryDark} alt="battery" className="h-4" />
      </div>
    </div>
  );
}

export default memo(StatusBar);

function getTime() {
  const now = new Date();
  return now.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}
