import { useEffect } from 'react';

const IOS_VIEWPORT = {
  width: 390,  // iPhone 12/13/14
  height: 844,
};

export default function MobileViewport({ children }) {
  useEffect(() => {
    // 모바일 앱 느낌을 위해 body 스크롤 제거
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div
      className="
        relative
        bg-white
        overflow-hidden
        touch-pan-y
        select-none
      "
      style={{
        width: IOS_VIEWPORT.width,
        height: IOS_VIEWPORT.height,
      }}
    >
      {children}
    </div>
  );
}
