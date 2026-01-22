import { useEffect, useState } from 'react';

/**
 * apps/shell 에서 실행되는 iframe 내부에 들어오기 때문에 iframe여부를 판단하고
 * iframe이 있다면 작업 화면을 100%로 맞추고 그렇지 않다면
 * 독립적이 환경에서 작업할 수 있도로 픽셀을 맞춘다.
 */

export default function MobileViewport({ children }) {
  const [isIframe, setIsIframe] = useState(false);

  useEffect(() => {
    // iframe 여부 체크
    if (typeof window !== 'undefined') {
      setIsIframe(window.parent !== window);
    }

    // 모바일 앱 느낌을 위해 body 스크롤 제거
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // iframe이면 전체 100%, 아니면 iPhone 12/13/14 크기
  const width = isIframe ? '100vw' : 420;
  const height = isIframe ? '100vh' : 844;

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
        width,
        height,
      }}
    >
      {children}
    </div>
  );
}
